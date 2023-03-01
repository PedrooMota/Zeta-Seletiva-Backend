import { Request, Response } from "express";

export class listaController{
    async getProfile(req: Request, res: Response){
        return res.json(req.body)
     }
}