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
const client_1 = require("@prisma/client");
const httpError_1 = require("../utils/httpError");
const prisma = new client_1.PrismaClient();
class Book {
    static createBook(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, datePublished, isFiction, description } = request.body;
                const parsedDate = new Date();
                const data = { title, isFiction, datePublished: parsedDate.toDateString(), description };
                const select = {
                    id: true,
                    title: true,
                    isFiction: true,
                    datePublished: true,
                    description: true,
                    // author: {
                    //   select: {
                    //     id: true,
                    //     firstName: true,
                    //     lastName: true,
                    //   },
                    // },
                };
                const res = yield prisma.book.create({
                    data,
                    select,
                });
                response.status(201).json(res);
            }
            catch (err) {
                response.status(500).json(err);
                return next((0, httpError_1.createError)(500, 'Could not get orders, please try again.'));
            }
            finally {
                () => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.$disconnect();
                });
            }
        });
    }
    static deleteBook(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield prisma.book.delete({
                    where: {
                        id: Number(request.params.id),
                    },
                });
                response.status(201).json(res);
            }
            catch (err) {
                response.status(500).json(err);
                return next((0, httpError_1.createError)(500, 'Could not get orders, please try again.'));
            }
            finally {
                () => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.$disconnect();
                });
            }
        });
    }
    static updateBook(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, datePublished, isFiction, description } = request.body;
                const parsedDate = new Date();
                const data = { title, isFiction, datePublished: parsedDate.toDateString(), description };
                const res = yield prisma.book.update({
                    where: {
                        id: Number(request.params.id),
                    },
                    data,
                });
                response.status(201).json(res);
                console.log(res);
            }
            catch (err) {
                console.log(err);
                return next((0, httpError_1.createError)(500, 'Could not get orders, please try again.'));
            }
            finally {
                () => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.$disconnect();
                });
            }
        });
    }
    static getBooks(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const books = yield prisma.book.findMany();
                return response.status(200).json(books);
            }
            catch (err) {
                console.log(err);
                return next((0, httpError_1.createError)(500, 'Could not get orders, please try again.'));
            }
            finally {
                () => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.$disconnect();
                });
            }
        });
    }
    static getBookById(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield prisma.book.findUnique({
                    where: {
                        id: Number(request.params.id),
                    },
                });
                console.log(book);
                return response.status(200).json(book);
            }
            catch (err) {
                console.log(err);
                return next((0, httpError_1.createError)(500, 'Could not get orders, please try again.'));
            }
            finally {
                () => __awaiter(this, void 0, void 0, function* () {
                    yield prisma.$disconnect();
                });
            }
        });
    }
}
exports.default = Book;
