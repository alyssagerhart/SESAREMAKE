import React from 'react';

export const HorizontalLine: React.FC = () => {
  const lineStyle = {
    width: '100%',
    height: '6px', // Adjust the height for bigger dashes
    border: '0',
    borderTop: '8px dashed rgba(0, 118, 129, 0.7)', // Set color to #007681 with 0.7 opacity
    padding: '5px 0',
    margin: '20px 0 20px 0',
  };

  return <hr style={lineStyle} />;
};

export default HorizontalLine;
