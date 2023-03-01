import { Request, Response } from "express";

export class updateController{
    async updateUser(req: Request, res: Response){
       return res.json(req.body)
      
    };

}
    