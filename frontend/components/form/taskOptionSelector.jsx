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
      />
    </div>
  );
};

export default TaskOptionSelector;
