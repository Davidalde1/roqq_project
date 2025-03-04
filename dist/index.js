"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
dotenv_1.default.config();
//use the exported router
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const addressRoutes_1 = __importDefault(require("./routes/addressRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
app.use((0, cors_1.default)());
//use the router
app.use(express_1.default.json());
// Routes
app.use('/api/user', userRoutes_1.default);
app.use('/api/address', addressRoutes_1.default);
app.use('/api/post', postRoutes_1.default);
// Database synchronization
const PORT = process.env.PORT || 3000;
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running`);
    });
}).catch((error) => {
    console.log(error);
});
