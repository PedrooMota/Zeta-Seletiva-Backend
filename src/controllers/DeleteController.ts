import { Request, Response } from "express";

export class deleteController{
   
    async deleteUser(req: Request, res: Response){
       return res.json(req.body)
      
    };

    
}
    