"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routePRoducts_1 = require("./router/routePRoducts");
const app = (0, express_1.default)();
const port = process.env.PORT || 3003;
app.use(express_1.default.json());
app.use('/api/products', routePRoducts_1.productRoutes);
app.listen(port, () => {
    console.log(`Product CRUD Service running on http://localhost:${port}`);
});
