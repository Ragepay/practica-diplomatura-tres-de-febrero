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

// Crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        // Obtencion de Datos del req.body
        const {
            ProductName,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            Discontinued
        } = req.body;

        // Validacion de Datos obligatorios
        if (!ProductName || !UnitPrice) {
            return res.status(400).json({ error: "Faltan datos obligatorios para crear el producto." });
        }
        const product = await Product.create({
            ProductName,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            Discontinued
        });
        return res.status(201).json({ message: "Producto creado exitosamente.", product });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al crear un producto." });
    }
}
// Actualizar un producto existente.
const updateProduct = async (req, res) => {
    try {
        // Obtencion del id del producto a actualizar.
        const { id } = req.params;

        // Verificacion si el producto existe en la BBDD.
        let producto = await Product.findByPk(id);
        if (producto === null) {
            return res.status(404).json({ message: "Producto no encontrado o ID incorrecto." });
        }

        // Obtencion de Datos del req.body.
        const {
            ProductName,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            Discontinued
        } = req.body;

        // Validacion de Datos obligatorios
        if (!ProductName || !UnitPrice || isNaN(id)) {
            return res.status(400).json({ error: "Faltan datos obligatorios o id incorrecto." });
        }

        // Actualizacion del producto en la BBDD.
        await producto.update({
            ProductName,
            SupplierID,
            CategoryID,
            QuantityPerUnit,
            UnitPrice,
            UnitsInStock,
            UnitsOnOrder,
            ReorderLevel,
            Discontinued
        });

        // Refrescamos la instancia del producto ya actualizado.
        producto = await Product.findByPk(id);

        // Si existe el producto actualizado.
        return res.status(200).json({ message: "Producto actualizado exitosamente.", producto });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al actualizar un producto." });
    }
}

// Patch product
const patchProduct = async (req, res) => {
    try {
        // Obtencion del id del producto a actualizar y datos por body.
        const { id } = req.params;
        const updateData = req.body;
        // Verificacion si el producto existe en la BBDD.
        let producto = await Product.findByPk(id);
        if (producto === null) {
            return res.status(404).json({ message: "Producto no encontrado o ID incorrecto." });
        }
        // Actualizacion del producto en la BBDD.
        await producto.update(updateData);

        // Refrescamos el producto actualizado.
        producto = await Product.findByPk(id);
        return res.status(200).json({
            message: "Producto PATCHEADO exitosamente.", producto
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al actualizar un producto." });
    }
}

const deleteProduct = async (req, res) => {
    try {
        // Obtencion del id del producto a eliminar.
        const { id } = req.params;
        // Obtencion del producto a eliminar.
        let producto = await Product.findByPk(id);
        // Validar si existe tal producto.
        if (producto === null) {
            return res.status(404).json({
                message: "Producto no encontrado o ID incorrecto."
            })
        }
        // Eliminacion del producto.
        await producto.destroy();
        return res.status(200).json({ message: "Producto eliminado exitosamente." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error al eliminar un producto." });
    }
}

export {
    getAllProducts,
    getProductById,
    getProductByName,
    getProductByCategory,
    getProductByQuery,
    getVista1,
    getVista2,
    createProduct,
    updateProduct,
    patchProduct,
    deleteProduct
}