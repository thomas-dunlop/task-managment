'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useGetTaskOptionsQuery } from '../../store/services/api';

const TaskOptionSelector = function ({
  onSelect,
  defaultTaskOption,
  disabled = false
}) {
  const { data: taskOptions } = useGetTaskOptionsQuery();
  const [selectedTaskOption, setSelectedTaskOption] = useState(null);

  useEffect(() => {
    setSelectedTaskOption(null);
    if (defaultTaskOption && taskOptions) {
      const taskOption = taskOptions.filter((entry) => entry.id === defaultTaskOption.id);
      if (taskOption === 1) {
        setSelectedTaskOption(taskOption[0]);
      }
    }
  }, [defaultTaskOption, taskOptions]);

  const onChange = (taskOption) => {
    setSelectedTaskOption(taskOption);
    onSelect(taskOption);
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
        options={taskOptions}
        value={selectedTaskOption}
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

export default TaskOptionSelector;
