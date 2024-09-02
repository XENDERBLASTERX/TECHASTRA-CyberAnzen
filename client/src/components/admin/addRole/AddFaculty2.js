import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment, addFacultyMember } from "../../../redux/actions/adminActions";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Body from "./Body";

const Addroll = () => {
  const dispatch = useDispatch();
  const [facultyData, setFacultyData] = useState({
    name: "",
    department: "",
    role: "",
  });

  const departments = useSelector((state) => state.admin.departments);

  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);

  const handleChange = (e) => {
    setFacultyData({
      ...facultyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add the faculty member with selected role
    dispatch(addFacultyMember(facultyData));
  };

  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <Header />
        <div className="flex flex-[0.95]">
          <Sidebar />
          <div className="flex flex-col w-full p-6">
            <Body />
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={facultyData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Department</label>
                <select
                  name="department"
                  value={facultyData.department}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.name}>
                      {department.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Role</label>
                <select
                  name="role"
                  value={facultyData.role}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="HOD">HOD</option>
                  <option value="Dean">Dean</option>
                  <option value="Professor">Professor</option>
                  <option value="Class Teacher">Class Teacher</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Faculty
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFaculty;
