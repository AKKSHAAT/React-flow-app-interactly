import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const CustomNode = ({ data, isConnectable, sourcePosition, targetPosition, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '150px',
        height: '50px',
        backgroundColor: isHovered ? 'lightcoral' : 'lightblue',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.label}
      {isHovered && (
        <IoClose
          style={{ position: 'absolute', top: '5px', right: '5px', color: 'red', cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation(); // Prevents the node from being clicked when clicking the icon
            onClick();
          }}
        />
      )}
    </div>
  );
};

export default CustomNode;
