import Product from "../models/products.js";
import { Op } from "sequelize";
import ViewOrderDetails from "../models/viewOrderDetails.js";

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.status(200).json({ productos: allProducts });
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        res.status(200).json({ producto: product });
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
}

const getProductByName = async (req, res) => {
    try {
        const { nombre } = req.params;
        const product = await Product.findOne({ where: { ProductName: nombre } });
        res.status(200).json({ producto: product });
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
}

const getProductByCategory = async (req, res) => {
    try {
        const { categoria } = req.params;
        const product = await Product.findAll({ where: { CategoryID: categoria } });
        res.status(200).json(product);
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
}

const getProductByQuery = async (req, res) => {
    try {
        const { query } = req.params;
        const product = await Product.findAll({
            where: {
                ProductName: {
                    [Op.like]: `%${query}%`
                }
            }
        });
        res.status(200).json({ producto: product });
    } catch (error) {
        console.error("Error al buscar productos:", error);
        res.status(500).json({ error: "Error al buscar productos." });
    }
}

const getVista1 = async (req, res) => {
    try {
        const allVista = await ViewOrderDetails.findAll();
        return res.status(200).json({ productos: allVista });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al buscar productos." });
    }
}


const getVista2 = async (req, res) => {
    try {
        const { id } = req.params; 
        const product = await ViewOrderDetails.findAll({
            where: { OrderID: id },
            order: [['ProductID', 'DESC']]
        });
        return res.status(200).json({ producto: product });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al buscar productos." });
    }
}


export {
    getAllProducts,
    getProductById,
    getProductByName,
    getProductByCategory,
    getProductByQuery,
    getVista1,
    getVista2
}