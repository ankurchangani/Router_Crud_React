import React from 'react';

const ViewData = ({ data }) => {
  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rec, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2 text-center">{index + 1}</td>
              <td className="border px-4 py-2 text-center">{rec.name}</td>
              <td className="border px-4 py-2 text-center">{rec.email}</td>
              <td className="border px-4 py-2 text-center">{rec.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;
