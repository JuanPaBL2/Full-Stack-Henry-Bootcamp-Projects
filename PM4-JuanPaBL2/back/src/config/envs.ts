import dotenv from "dotenv";

dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3002;
export const DB_NAME: string = process.env.DB_NAME || "servidorm4";
export const DB_USER: string = process.env.DB_USER || "postgres";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
export const DB_HOST: string = process.env.DB_HOST || "localhost";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
