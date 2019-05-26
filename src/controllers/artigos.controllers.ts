import { Request, Response, response } from "express";
import { connection } from "../database"
import { Artigo } from "../interface/Artigo.interface"


export async function getArtigos(req: Request, res: Response): Promise<Response>{

        const conn = await connection();
        const postagem = await conn.query('SELECT * FROM artigos');


    return res.json(postagem[0]);
};

export async function creatArtigos(req:Request, res:Response){

    const novoArtigo:Artigo = req.body;
    const conn = await connection();
    await conn.query("INSERT INTO artigos SET ?", [novoArtigo]);
    return res.json({
        message: 'Artigo criado com sucesso!'
    });

};

export async function getArtigosId(req:Request, res:Response):Promise<Response>{
    
    const id = req.params.id;
    const conn = await connection();
    const publicacao = await conn.query(" SELECT * FROM artigos WHERE id  = ?", [id])

    return res.json(publicacao[0]);
};

export async function deleteArtigos(req: Request, res: Response){
    
    const id = req.params.id;
    const conn = await connection();
    await conn.query("DELETE FROM artigos WHERE id = ?", [id]);

    return res.json({
        message: 'Artigo excluído com sucesso!'
    });
}

export async function updateArtigos(req:Request, res:Response){

    const id = req.params.id;
    const updateArtigo: Artigo = req.body;
    const conn = await connection();
    await conn.query("UPDATE artigos set ? WHERE id = ?", [updateArtigo, id]);

    return res.json({
        message: 'Atualizado com sucesso!'
    });

};
