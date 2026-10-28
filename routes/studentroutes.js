import * as studentController from '../controllers/studentControllers.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllstudent);
studentRoutes.post('/', studentController.createStudent);

export default studentRoutes;
