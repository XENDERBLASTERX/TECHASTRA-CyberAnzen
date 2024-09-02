import mongoose from "mongoose";

const facultySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  joiningYear: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ['HOD', 'Class Teacher', 'Professor', 'Dean'],
    required: true,
    default: 'Professor', // Set a default role if needed
  },
});

export default mongoose.model("FacultyRole", facultySchema);
