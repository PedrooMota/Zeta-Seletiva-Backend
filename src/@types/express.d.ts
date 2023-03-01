import { User } from "../entities/User";

// vou sobrescrever o request para utilizar o USER
declare global {
    namespace Express {
        export interface Request{
            user: Partial<User>
        }
    }
}