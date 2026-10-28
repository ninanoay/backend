import * as studentModel from '../model/bookModel.js';

export const fetchAllstudent = async()=>{
    const student = await studentmModel.fetch();
    return student;
}

export const createstudent = async(student) =>{
    const studentId = await studentModel.insert(student);
    return studentId;
}

