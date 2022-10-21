import studentData from "../models/students.js";

export const getStudents = async (req, res) => {
    try {
        const allStudents = await studentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;
    // console.log(student);
    const newStudent = new studentData(student);

    // console.log(newStudent);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
        
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteStudent=async (req, res)=>{
    const id=req.params.id;
    // console.log(id);
    try {
        await studentData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted!');
        
    } catch (error) {
        console.log(error);
    }
}