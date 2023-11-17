import express from 'express';
const router = express.Router();
import Book from '../controllers/book';

router.get('/', Book.getBooks);
router.get('/:id', Book.getBookById);
router.post('/', Book.createBook);
router.put('/:id', Book.updateBook);
router.delete('/:id', Book.deleteBook);

export default router;
