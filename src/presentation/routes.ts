import { Router } from "express";
import { TodosController } from "./todos/controller";



export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        const todosController = new TodosController();

        router.get('/api/todos', todosController.getTodos);

        router.get('/api/todos', (req, res ) => {

        })


        return router;
    }


}