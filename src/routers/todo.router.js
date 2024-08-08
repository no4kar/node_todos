// @ts-check
'use strict';

import express from 'express';
export const todoRouter = express.Router();

import { todoController } from '../controllers/todo.controller.js';
import { isAction } from '../middlewares/todo.middleware.js';
import { catchError } from '../middlewares/error.middleware.js';

todoRouter.get('/', catchError(todoController.get));
todoRouter.get('/:id', catchError(todoController.getById));

todoRouter.post('/', catchError(todoController.post));

todoRouter.put('/:id', catchError(todoController.put));

todoRouter.patch('/:id', catchError(todoController.patchById));
todoRouter.patch('/', isAction('delete'), catchError(todoController.removeMany));// chain of responsibility
todoRouter.patch('/', isAction('update'), catchError(todoController.updateMany));
todoRouter.patch('/', catchError(todoController.patchBulkUnknown));

todoRouter.delete('/:id', catchError(todoController.remove));
