import React from 'react';

const SectionTitle = ({title}) => {
  const localTheme=localStorage.getItem('theme');
  return (
    <div>
      <h1 className={`text-2xl text-gray-600 font-semibold font-mono text-center my-5 ${localTheme === 'dark' ? 'text-white' : ''} `}>{title}</h1>
    </div>
  );
};

export default SectionTitle;