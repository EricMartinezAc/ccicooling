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
exports.getDataServiceMS250 = void 0;
const cpannel_service_1 = require("../services/cpannel.service");
const getDataServiceMS250 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceMS250 = yield (0, cpannel_service_1.fetchFromMS250)();
        res.json({
            ms250: serviceMS250
        });
    }
    catch (error) {
        res.status(500).send(`error: ${error}`);
    }
});
exports.getDataServiceMS250 = getDataServiceMS250;
