import express from "express";
import router from "../routes/router";
import cors from 'cors';


const servidor = express();
servidor.use(cors())
servidor.use(express.json())
servidor.use(router);

export default servidor;

