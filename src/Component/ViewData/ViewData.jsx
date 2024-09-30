


import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewData = ({ handleEdit , setStorage , Storage }) => {
  
  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Course</th>
            <th className="px-4 py-2 border border-gray-300">Message</th>
            <th className="px-4 py-2 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {Storage.map((rec, index) => (
            <tr key={index} className="bg-white hover:bg-gray-100 text-gray-600 text-sm">
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">{rec.name}</td>
              <td className="border px-4 py-2 text-center">{rec.email}</td>
              <td className="border px-4 py-2 text-center">{rec.course}</td>
              <td className="border px-4 py-2 text-center">{rec.message}</td>
              <td className="border px-4 py-2 text-center">
              <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(rec.id)}
                >
                  <PencilIcon className="w-5 h-5 inline-block" />
                </button>

                <button
                  className="bg-red-500 text-white px-2 mx-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleRemove(rec.id)}
                >
                  <TrashIcon className="w-5 h-5 inline-block" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;

