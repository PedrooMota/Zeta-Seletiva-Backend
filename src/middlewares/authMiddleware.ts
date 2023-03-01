import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";

type JwtPayLoad = {
    id: number
}
//
export const authMiddlewareListar = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const listar = await userRepository.find()
   req.body = listar
   next()
   
}


export const authMiddlewareDelete = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // utilizando o header para pegar o token
    const { authorization } = req.headers
    
    if(!authorization){
        throw new UnauthorizedError('Não autorizado!')
    }

    // método para manipular string e retirar o "bearer" do token
    const token = authorization.split(' ')[1]

    if (!token) {
        throw new BadRequestError(' Invalid Token ')
    }

     //verificar se o token existe
    const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayLoad
    console.log(id)
    const userExists = await userRepository.findOneBy({id})

    if (!userExists) {
        throw new BadRequestError(' Invalid Id ')
    }

    await userRepository.delete(userExists)
    const message = 'Apagado com Sucesso!'

    req.body = message
    next()
   
}


export const authMiddlewareUpdate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    // utilizando o header para pegar o token
    const { authorization } = req.headers
    
    if(!authorization){
        throw new UnauthorizedError('Não autorizado!')
    }
    
    // método para manipular string e retirar o "bearer" do token
    const token = authorization.split(' ')[1]

    //verificar se o token existe
    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayLoad

    console.log("ok3")
    const newUser = await userRepository.findBy({id});

    if (!newUser){
        throw new UnauthorizedError('Comer o curtis')
    }


    const { name, email} = req.body
    
    newUser[0].name = name
    newUser[0].email = email
    await userRepository.save(newUser)
    
    console.log(newUser)

    req.body = newUser

   next()
   
}


