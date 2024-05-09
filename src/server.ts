import "reflect-metadata";
import express, {Request, Response} from "express";
import cors from "cors";

import { errors } from "celebrate";
import AppDataSource from "./shared/typeorm/config";

import "dotenv/config";
import AppError from "./shared/erros/AppError";

const app = express();

AppDataSource.initialize().then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(errors());
    app.use((err: Error, _req: Request, res: Response) =>{
        if(err instanceof AppError){
            return res.status(err.statusCode).json({status: "error",error: err.message});
        }

        console.error(err);

        return res.status(500).json({status: "error", error: "Internal server error"});
    } )

    const Port = process.env.API_PORT || 3000;

    app.listen(Port, () => {
        console.log('Server started on port 3333!');
    });
})