import { Request, Response } from "express";

export function rotaIndex(req: Request, res: Response): Response{
    
    return res.json('Bem vindo a api direto do index controller!');
}