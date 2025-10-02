import { Router } from "express";
import Product from "../models/products.js";
import Employee from "../models/employees.js";

const router = Router();

// Home endpoint.
router.get("/", async (req, res) => {
    res.status(200).json({ mensaje: "HOME ENDPOINT - HELLOW WORLD" });
});

// Funcion buscar TODOS los Productos.
router.get("/productos", async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.status(200).json({ productos: allProducts });
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
});

// Funcion registrar un User.
router.get("/empleados", async (req, res) => {
    try {
        const allEmployees = await Employee.findAll();
        res.status(200).json({ Employees: allEmployees });
    } catch (error) {
        console.error("Error al buscar empleados:", error);
        res.status(500).json({ error: "Error al buscar empleados." });
    }
});


// Endpoint de ruta no econtrada.
router.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada." });
});

export default router;