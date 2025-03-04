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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersCount = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const address_1 = __importDefault(require("../models/address"));
const getUsers = (pageNumber, pageSize) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findAll({
        limit: pageSize,
        offset: pageNumber * pageSize,
        include: [address_1.default],
    });
});
exports.getUsers = getUsers;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.findByPk(id, { include: [address_1.default] });
});
exports.getUserById = getUserById;
const createUser = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.create({ name, email });
});
exports.createUser = createUser;
const getUsersCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_1.default.count();
});
exports.getUsersCount = getUsersCount;
