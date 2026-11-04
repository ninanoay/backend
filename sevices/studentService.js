import * as studentModel from '../model/bookModel.js';

export const fetchAllstudent = async()=>{
    const student = await studentmModel.fetch();
    return student;
}

export const createStudent = async (student) => {
      const studentID = await studentModel.insert(student);
      return studentID;
}

export const update = async (student) => {
    const [result] = await pool.query(
        "UPDATE student SET name = ?, age = ? WHERE id = ?",
        [student.name, student.age, student.id]
    );
    return result.affectedRows;
}   

export const deleteStudent = async (id) => {
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
}