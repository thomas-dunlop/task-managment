'use client';

import Select from 'react-select';

const Selector = function ({
  onSelect,
  defaultOption,
  disabled = false,
  options,
  isMulti = false
}) {
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
        onChange={(option) => onSelect(option)}
        options={options}
        value={defaultOption}
        isClearable
        isMulti={isMulti}
        placeholder="type or select from the dropdown..."
        getOptionLabel={(option) => `${option.name}`}
        getOptionValue={(option) => `${option.id}`}
        isDisabled={disabled}
        styles={customStyles}
      />
    </div>
  );
};

export default Selector;
