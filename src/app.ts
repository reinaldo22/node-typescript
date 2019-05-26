
import express, {Application} from "express";
import morgan from "morgan";

//rotas
import IndexRoutes from "./routes/index.routes";
import artigoRoutes from "./routes/artigos.routes";

//Classe principal
export class App{

    private app: Application; 

    constructor(private porta?: number | string){
        this.app = express();
        this.settingsPorta()
        this.middlewares();
        this.rotas();
    }

    settingsPorta(){
        this.app.set('porta', this.porta || process.env.porta || 3000 );
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    rotas(){
        this.app.use(IndexRoutes);
        this.app.use('/artigos',artigoRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get("porta"));
        console.log("server on port: 3000");
    }
}