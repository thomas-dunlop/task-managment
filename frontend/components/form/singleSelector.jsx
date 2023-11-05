'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';

const SingleSelector = function ({
  onSelect,
  defaultOption,
  disabled = false,
  options
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);
    if (defaultOption && options) {
      const option = options.filter((entry) => entry.id === defaultOption.id);
      if (option === 1) {
        setSelectedOption(option[0]);
      }
    }
  }, [defaultOption, options]);

  const onChange = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? '1px solid #80bdff' : '1px solid #ced4da',
      boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(0,123,255,.25)' : 'none',
      '&:hover': {
        border: '1px solid #80bdff',
      },
      borderRadius: '.25rem',
      padding: '0.375rem 0.75rem',
    }),
  };

  return (
    <div className="content">
      <Select
        onChange={onChange}
        options={options}
        value={selectedOption}
        isClearable
        placeholder="type or select from the dropdown..."
        getOptionLabel={(option) => `${option.name}`}
        getOptionValue={(option) => `${option.id}`}
        isDisabled={disabled}
        styles={customStyles}
      />
    </div>
  );
};

export default SingleSelector;
