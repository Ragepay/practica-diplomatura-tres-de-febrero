import { Router } from "express";
import { getAllProducts, getProductById, getProductByName, getProductByCategory, getProductByQuery, getVista1, getVista2 } from "../controller/productos.controller.js";

const productosRouter = Router();

// Funcion para buscar TODOS los Productos.
productosRouter.get("/", getAllProducts);

// Funcion para buscar en la vista
productosRouter.get("/vieworderdetails", getVista1);

// Funcion para buscar en la vista
productosRouter.get("/vieworderdetails/:id", getVista2);

// Funcion para buscar un Producto por id o Primary Key.
productosRouter.get("/:id", getProductById);

// Funcion buscar un Producto por nombre.
productosRouter.get("/nombre/:nombre", getProductByName);

// Funcion buscar un Producto por su categoria
productosRouter.get("/categoria/:categoria", getProductByCategory);

// Funcion buscar un Producto por nombre.
productosRouter.get("/query/:query", getProductByQuery);




export default productosRouter;