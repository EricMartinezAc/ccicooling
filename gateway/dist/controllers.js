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
exports.getGatewayData = void 0;
const services_1 = require("./services");
const getGatewayData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service1Data = yield (0, services_1.fetchFromService1)();
        res.json({
            ms250: service1Data
        });
    }
    catch (error) {
        res.status(500).send(`error: ${error}`);
    }
});
exports.getGatewayData = getGatewayData;
