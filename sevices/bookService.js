import * as bookmModel from '../models/bookModel.js';

export const fetchAllBooks = async()=>{
    const books = await bookmModel.fetch();
    return books;
}