"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserInput = void 0;
const validateUserInput = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    next();
};
exports.validateUserInput = validateUserInput;
