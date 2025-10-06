import { Router } from "express";
import {
    getAllProducts, getProductById, getProductByName, getProductByCategory, getProductByQuery, getVista1, getVista2,
    createProduct, updateProduct, patchProduct, deleteProduct
} from "../controller/productos.controller.js";

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

// Funcion para crear un nuevo Producto.
productosRouter.post("/", createProduct);

// Funcion para actualizar un Producto.
productosRouter.put("/:id", updateProduct);

// Funcion para actualizar un Producto con PATCH.
productosRouter.patch("/:id", patchProduct);

// Funcion para eliminar un producto
productosRouter.delete("/:id", deleteProduct);



export default productosRouter;