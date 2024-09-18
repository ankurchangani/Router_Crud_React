import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        studentId: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        setUpdataData(editData);
    }, []);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 my-5">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Student Registration</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updataData.name}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Full Name"
                            onChange={handleForm}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={updataData.email}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Email Address"
                            onChange={handleForm}
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">Student ID</label>
                        <input
                            type="text"
                            name="studentId"
                            value={updataData.studentId}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Student ID"
                            onChange={handleForm}
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={updataData.course}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            placeholder="Course Name"
                            onChange={handleForm}
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700">Additional Information</label>
                        <textarea
                            name="message"
                            value={updataData.message}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                            rows="4"
                            placeholder="Additional Information"
                            onChange={handleForm}
                        ></textarea>
                    </div>


                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-500 transition duration-300"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
