"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getAllProducts = void 0;
const product_service_1 = require("../services/product.service");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, product_service_1.getProducts)();
        res.json(products);
    }
    catch (error) {
        res.status(500).send('Error fetching products');
    }
});
exports.getAllProducts = getAllProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, product_service_1.getProductById)(req.params.id);
        res.json(product);
    }
    catch (error) {
        res.status(500).send('Error fetching product');
    }
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = yield (0, product_service_1.createProductInDb)(req.body);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).send('Error creating product');
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield (0, product_service_1.updateProductInDb)(req.params.id, req.body);
        res.json(updatedProduct);
    }
    catch (error) {
        res.status(500).send('Error updating product');
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, product_service_1.deleteProductFromDb)(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        res.status(500).send('Error deleting product');
    }
});
exports.deleteProduct = deleteProduct;
