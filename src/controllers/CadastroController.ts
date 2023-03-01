import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'


export class userController{
    //controlador assincrono
    async create(req: Request, res: Response){
        const {name, email, password} = req.body

        // verificação para saber se ja possui um email cadastrado
        const userExists = await userRepository.findOneBy({email})

        if(userExists){
            throw new BadRequestError('E-mail já existente.')
        }

        //criptografar a senha
        // um nível de processamento adequado para o computador criptografar
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = userRepository.create({
            name,
            email,
            password: hashPassword,
        })

        //Usuario vai ser cadastrado no banco
        await userRepository.save(newUser)

        //Desestruturei o newUser para não mostrar o hash ao realizar o cadastro
        const {password: _, ...user} = newUser

        return res.status(201).json(user)


    }

    
       


        // public async update(req: Request, res: Response): Promise<Response> {
        //     const id = req.params
        //     const {
        //         name,
        //         email,
        //         password
        //     } = req.body
        
        //     await userRepository('users').where(id).first().update({
        //         name,
        //         email,
        //         password
        //     })
        
        //     return res.json({ ...id, name, password, email })
        // }

        // public async delete(req: Request, res: Response): Promise<Response> {
        //     const id = req.params
        //     await connection('users').where(id).delete()
        //     return res.sendStatus(204)
        // }
        
}
