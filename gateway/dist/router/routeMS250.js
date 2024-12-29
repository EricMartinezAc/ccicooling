"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ms250_controller_1 = require("../controllers/ms250.controller");
const router = express_1.default.Router();
exports.gatewayRoutes = router;
router.get('/gateway', ms250_controller_1.getGatewayData);
