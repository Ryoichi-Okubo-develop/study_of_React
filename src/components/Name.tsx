import React from 'react';

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div style={{ padding: '20px', backgroundColor: 'gray' }}>
      <label htmlFor='name'>Name:</label>
      <input id="name" className="input-name" type="text" onChange={onChange} />
    </div>
  )
}

export default Name