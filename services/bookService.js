import * as bookModels from '../models/bookModel.js';

export const fetchAllBooks = async () => {
    return bookModels.fetch();
};

const doesBookExist = async (book) => {
    const existing = Object.hasOwn(book, 'id')
        ? await bookModels.findBookById(book.id)
        : await bookModels.findBookByNameAndAuthor(book.name, book.author);

    return existing.length > 0;
};

export const createBook = async (book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    if (await doesBookExist(book)) {
        throw new Error('Book already exist!');
    }

    return bookModels.insert(book);
};

export const updateBook = async (book) => {
    if (!book.name || !book.author) {
        throw new Error('Name and Author is required');
    }

    if (!(await doesBookExist(book))) {
        throw new Error('Book does not exist!');
    }

    return bookModels.update(book);
};

export const deleteBook = async (id) => {
    if (!(await doesBookExist({ id }))) {
        throw new Error('Book does not exist!');
    }

    return bookModels.remove(id);
};
