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
exports.deletePost = exports.createPost = exports.getPostsByUserId = void 0;
const post_1 = __importDefault(require("../models/post"));
const getPostsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield post_1.default.findAll({ where: { userId } });
});
exports.getPostsByUserId = getPostsByUserId;
const createPost = (title, body, userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield post_1.default.create({ title, body, userId });
});
exports.createPost = createPost;
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield post_1.default.destroy({ where: { id } });
});
exports.deletePost = deletePost;
