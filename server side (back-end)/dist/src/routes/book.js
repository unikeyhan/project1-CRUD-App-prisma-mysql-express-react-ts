"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const book_1 = __importDefault(require("../controllers/book"));
router.get('/', book_1.default.getBooks);
router.get('/:id', book_1.default.getBookById);
router.post('/', book_1.default.createBook);
router.put('/:id', book_1.default.updateBook);
router.delete('/:id', book_1.default.deleteBook);
exports.default = router;
