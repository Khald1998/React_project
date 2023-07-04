import { useState } from 'react';

function Filed(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (props.Id === 'Phone') {
      // If the field is the phone field, remove any non-number characters
      const numericValue = inputValue.replace(/\D/g, '');
      setValue(numericValue);
      props.onChange(numericValue); // Pass the input value to the parent component
    } else {
      setValue(inputValue);
      props.onChange(inputValue); // Pass the input value to the parent component
    }
  };

  return (
    <>
      <div className="max-sm:mx-5 max-sm:w-72 xl:px-16 py-2">
        <div className='flex justify-between'>
        <label htmlFor={props.Id} className="inline-block text-gray-700 font-bold mb-2">
          {props.Label}
        </label>
            <p className={`inline-block text-red-500 ${props.error ? 'opacity-100':'opacity-0'} transition-all duration-1000`}>{props.error}</p>
        </div>
        <input
          id={props.Id}
          type="text"
          placeholder={props.PlaceHolder}
          className="border-2 border-prime p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Filed;
