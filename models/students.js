import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
        default: 'A'
    }
});

const studentData = mongoose.model('student', studentSchema);
export default studentData;
