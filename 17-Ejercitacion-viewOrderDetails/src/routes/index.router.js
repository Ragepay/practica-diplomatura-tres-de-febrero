import { Router } from "express";
import productosRouter from "./productos.router.js";
import empleadosRouter from "./empleados.router.js";

const router = Router();

// Home endpoint.
router.get("/", async (req, res) => {
    res.status(200).json({ mensaje: "HOME ENDPOINT - HELLOW WORLD" });
});

// Rutas de productos.
router.use("/productos", productosRouter);

// Rutas de Empleados.
router.use("/empleados", empleadosRouter);

// Endpoint de ruta no encontrada(NOT FOUND).
router.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada. ERROR - NOT FOUND" });
});

export default router;