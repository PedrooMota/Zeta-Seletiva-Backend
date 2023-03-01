import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'

export class loginController{
    //controlador assincrono para login
    async login(req:Request, res:Response){
        const {email, password} = req.body

        const user = await userRepository.findOneBy({email})

        //Verifica se não existe o email que foi inserido cadastrado
        if (!user) {
            throw new BadRequestError('E-mail ou senha inválidos')
        }

        const verifyPassword = await bcrypt.compare(password, user.password)

        // verifica se a senha coincide com a cadastrada
        if (!verifyPassword) {
            throw new BadRequestError('E-mail ou senha inválidos')
        }

        //crio o token utilizando a biblioteca JWT 
        const token = jwt.sign({ id: user.id}, process.env.JWT_PASS ?? '', {
            expiresIn: '8h',
        })

        const {password:_, ...userLogin} = user

        // retorno de endpoint
        return res.json({
            user: userLogin,
            token: token,
        })

    }
}