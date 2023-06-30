import { useState } from 'react';

function Filed(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    props.onChange(inputValue); // Pass the input value to the parent component
  };

  return (
    <>
      <div className="px-8">
        <label htmlFor={props.Id} className="block text-gray-700 font-bold mb-2">
          {props.Label}
        </label>
        <input
        id={props.Id}
          type="text"
          placeholder={props.PlaceHolder}
          className="border-2 border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Filed;
