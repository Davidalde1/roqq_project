"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
dotenv_1.default.config();
const user_1 = __importDefault(require("./routes/user"));
const address_1 = __importDefault(require("./routes/address"));
const post_1 = __importDefault(require("./routes/post"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
//Routes
app.use('/api/users', user_1.default);
app.use('/api/addresses', address_1.default);
app.use('/api/posts', post_1.default);
// Database synchronization 
const PORT = process.env.PORT || 3000;
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running");
    });
}).catch((error) => {
    console.error(error);
});
