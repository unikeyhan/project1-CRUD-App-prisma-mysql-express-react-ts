import { PrismaClient } from '@prisma/client';
import type { Request, Response } from 'express';
import { createError } from '../utils/httpError';

const prisma = new PrismaClient();

export default class Book {
  static async createBook(request: Request, response: Response, next: any) {
    try {
      const { title, datePublished, isFiction, description } = request.body;
      const parsedDate: Date = new Date();
      const data: any = { title, isFiction, datePublished: parsedDate.toDateString(), description };
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
      const res = await prisma.book.create({
        data,
        select,
      });
      response.status(201).json(res);
    } catch (err) {
      response.status(500).json(err);
      return next(createError(500, 'Could not get orders, please try again.'));
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  static async deleteBook(request: Request, response: Response, next: any) {
    try {
      const res = await prisma.book.delete({
        where: {
          id: Number(request.params.id),
        },
      });
      response.status(201).json(res);
    } catch (err) {
      response.status(500).json(err);
      return next(createError(500, 'Could not get orders, please try again.'));
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  static async updateBook(request: Request, response: Response, next: any) {
    try {
      const { title, datePublished, isFiction, description } = request.body;
      const parsedDate: Date = new Date();
      const data: any = { title, isFiction, datePublished: parsedDate.toDateString(), description };
      const res = await prisma.book.update({
        where: {
          id: Number(request.params.id),
        },
        data,
      });
      response.status(201).json(res);
      console.log(res);
    } catch (err) {
      console.log(err);
      return next(createError(500, 'Could not get orders, please try again.'));
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  static async getBooks(request: Request, response: Response, next: any) {
    try {
      const books = await prisma.book.findMany();
      return response.status(200).json(books);
    } catch (err) {
      console.log(err);
      return next(createError(500, 'Could not get orders, please try again.'));
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
  static async getBookById(request: Request, response: Response, next: any) {
    try {
      const book = await prisma.book.findUnique({
        where: {
          id: Number(request.params.id),
        },
      });
      console.log(book);
      return response.status(200).json(book);
    } catch (err) {
      console.log(err);
      return next(createError(500, 'Could not get orders, please try again.'));
    } finally {
      async () => {
        await prisma.$disconnect();
      };
    }
  }
}
