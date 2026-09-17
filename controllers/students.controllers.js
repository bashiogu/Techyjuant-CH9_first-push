const Student = require("../models/students.models");





const createStudent = async (req, res) => {
    const { name, age, email, phone, address, course, institution } = req.body;

    try {
        const student = new Student({ 
            name,
            age,
            email,
            phone,
            address,
            course,
            institution
         });
    await student.save();
    return res.status(201).json({ message: "Student created successfully", student});
    } catch (error) {
        return res.status(500).json({ message: 'internal server error' });
    }
};


const getStudents = async (req, res) => {
     try {
        const students = await Student.find();
        return res.status(200).json({ message: `Students fetched successfully`, students});
    } catch (error) {
        return res.status(500).json({ message: `internal server error`});
    }
};


const updateStudent = async (req, res) => {
    const { id } = req.params;
     const { name, age, email, phone, address, course, institution } = req.body;
     try {
        const student = await Student.findByIdAndUpdate(id, { name, age, email, phone, address, course, institution }, { returnDocument: 'after'});
        return res.status(200).json({ message: 'Student update successfully', student});
     } catch (error) {
        return res.status(500).json({ message: 'internal server error'});
     }
};


const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        return res.status(200).json({ message: 'Student fetched successfully', student});
    } catch (error) {
        return res.status(500).json({ message: 'internal server error'});
    }
};


const getStudentByName = async (req, res) => {
    const { name } = req.query;
    try {
        const student = await Student.find({ name });
        return res.status(200).json({ message: 'Student fetched successfully', student});
    } catch (error) {
        return res.status(500).json({ message: 'internal server error'});
    }
};


const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
      await Student.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'internal server error', error: error.message });
    }
};


module.exports = {
     createStudent,
     getStudents,
     updateStudent,
     getStudentById,
     getStudentByName,
     deleteStudent
};