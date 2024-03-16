'use client';
import React, { useState } from 'react';
import './infosnippet.css';

const InfoSnippet: React.FC = () => {
  const [hoveredBox, setHoveredBox] = useState('');

  const handleMouseEnter = (boxName: string) => {
    setHoveredBox(boxName);
  };

  const handleMouseLeave = () => {
    setHoveredBox('');
  };

  const getBoxStyles = (boxName: string) => ({
    flexBasis: 'calc(50% - 1rem)',
    marginBottom: '1rem',
    marginRight: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '2rem',
    boxSizing: 'border-box' as const,
    transition: 'transform 0.2s ease-in-out',
    transform: hoveredBox === boxName ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: '#007681',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties);

  const getHeaderStyles = {
    color: '#d7a920',
    fontSize: '1.2rem', // Adjusted font size
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    borderRadius: '4px',
    textAlign: 'center' as const,
    fontFamily: 'Oswald, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 1.2)',
  };

  const getParagraphStyles = {
    color: '#ffffff',
    textAlign: 'center' as const,
    fontWeight: 'bold',
    fontFamily: 'Oswald, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, .5)',
    fontSize: '1rem', // Adjusted font size
  };
  return (
    <div className="infographic-container">
      <div className="inf-box tech-sales" style={getBoxStyles('tech-sales')} onMouseEnter={() => handleMouseEnter('tech-sales')} onMouseLeave={handleMouseLeave}>
        <h2 style={getHeaderStyles}>What is tech sales?</h2>
        <p style={getParagraphStyles}>
          Tech sales is the process of selling technology as software, hardware, or IT service. Professionals in the field are responsible for identifying potential clients, building relationships, and closing deals that meet their needs.
        </p>
      </div>
      <div className="inf-box sales-experience" style={getBoxStyles('sales-experience')} onMouseEnter={() => handleMouseEnter('sales-experience')} onMouseLeave={handleMouseLeave}>
        <h2 style={getHeaderStyles}>Do you need to have formal sales experience to get started in tech sales?</h2>
        <p style={getParagraphStyles}>
          Short answer, not much if any. We are all born sellers, Our job is to help refine, home and developed your sales skills to thrive in your new tech sales role. Many tech companies are willing to hire candidates with a strong academic background or relevant experience from other industries such as customer-facing roles like customer service, Hospitality, and restaurant/ food and beverage server
        </p>
      </div>
      <div className="inf-box consider-tech-sales" style={getBoxStyles('consider-tech-sales')} onMouseEnter={() => handleMouseEnter('consider-tech-sales')} onMouseLeave={handleMouseLeave}>
        <h2 style={getHeaderStyles}>Why should you consider tech sales?</h2>
        <p style={getParagraphStyles}>
          There is a growing demand to incorporate technology into every aspect of business and life. The tech sales profession offers exciting opportunities for career growth, high earnings potential, and the chance to work in a hybrid or remote with cutting-edge products and services. Tech sales professionals play a critical role in helping companies leverage technology to improve their operations. NOT TO MENTION tech sales professionals are in HIGH DEMAND
        </p>
      </div>
      <div className="inf-box work-life-balance" style={getBoxStyles('work-life-balance')} onMouseEnter={() => handleMouseEnter('work-life-balance')} onMouseLeave={handleMouseLeave}>
        <h2 style={getHeaderStyles}>What does work-life balance look like in tech sales?</h2>
        <p style={getParagraphStyles}>
          While tech sales can be a demanding and competitive field, many companies recognize the importance of work-life blend in attracting and retaining top talent. Most companies offer flexible PTO or even the option to work remotely, which can help in creating better work-life balance.
        </p>
      </div>
    </div>
  );
};

export default InfoSnippet;
