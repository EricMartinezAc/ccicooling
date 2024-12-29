"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayMS250 = void 0;
const express_1 = __importDefault(require("express"));
const cpannel_controller_1 = require("../controllers/cpannel.controller");
const router = express_1.default.Router();
exports.gatewayMS250 = router;
router.get('/gateway', cpannel_controller_1.getDataServiceMS250);
