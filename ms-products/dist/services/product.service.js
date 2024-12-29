"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteProductFromDb = exports.updateProductInDb = exports.createProductInDb = exports.getProductById = exports.getProducts = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_SID}`
};
const getProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield oracledb.getConnection(dbConfig);
        const result = yield connection.execute('SELECT * FROM PRODUCTS');
        return result.rows;
    }
    finally {
        if (connection) {
            yield connection.close();
        }
    }
});
exports.getProducts = getProducts;
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield oracledb.getConnection(dbConfig);
        const result = yield connection.execute('SELECT * FROM PRODUCTS WHERE PRODUCT_ID = :id', [id]);
        return result.rows[0];
    }
    finally {
        if (connection) {
            yield connection.close();
        }
    }
});
exports.getProductById = getProductById;
const createProductInDb = (product) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield oracledb.getConnection(dbConfig);
        const result = yield connection.execute('INSERT INTO PRODUCTS (PRODUCT_NAME, PRODUCT_PRICE) VALUES (:name, :price)', [product.name, product.price], { autoCommit: true });
        return result;
    }
    finally {
        if (connection) {
            yield connection.close();
        }
    }
});
exports.createProductInDb = createProductInDb;
const updateProductInDb = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield oracledb.getConnection(dbConfig);
        const result = yield connection.execute('UPDATE PRODUCTS SET PRODUCT_NAME = :name, PRODUCT_PRICE = :price WHERE PRODUCT_ID = :id', [product.name, product.price, id], { autoCommit: true });
        return result;
    }
    finally {
        if (connection) {
            yield connection.close();
        }
    }
});
exports.updateProductInDb = updateProductInDb;
const deleteProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield oracledb.getConnection(dbConfig);
        const result = yield connection.execute('DELETE FROM PRODUCTS WHERE PRODUCT_ID = :id', [id], { autoCommit: true });
        return result;
    }
    finally {
        if (connection) {
            yield connection.close();
        }
    }
});
exports.deleteProductFromDb = deleteProductFromDb;
