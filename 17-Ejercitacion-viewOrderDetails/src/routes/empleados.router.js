import { Router } from "express";
import Employee from "../models/employees.js";

const empleadosRouter = Router();

// Funcion para buscar todos los Empleados.
empleadosRouter.get("/", async (req, res) => {
    try {
        const allEmployees = await Employee.findAll();
        res.status(200).json({ Employees: allEmployees });
    } catch (error) {
        console.error("Error al buscar empleados:", error);
        res.status(500).json({ error: "Error al buscar empleados." });
    }
});

export default empleadosRouter;