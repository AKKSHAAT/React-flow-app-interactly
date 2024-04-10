import React from 'react';

const AddNodeButton = ({ onClick }) => (
  <button
    className="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300 absolute z-10 top-6 left-6"
    onClick={onClick}
  >
    Create node
  </button>
);

export default AddNodeButton;
