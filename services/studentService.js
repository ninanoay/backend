import * as studentModel from '../models/studentModel.js';

export const fetchAllStudents = async () => {
    return studentModel.fetch();
};

export const createStudent = async (student) => {
    return studentModel.insert(student);
};

export const updateStudent = async (student) => {
    return studentModel.update(student);
};

export const deleteStudent = async (id) => {
    return studentModel.remove(id);
};
