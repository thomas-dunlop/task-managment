'use client';

import { useGetTaskOptionsQuery } from '../../store/services/api';
import SingleSelector from './singleSelector';

const TaskBadgeSelector = function ({
  onSelect,
  defaultOption,
  disabled = false
}) {
  const { data: options } = useGetTaskOptionsQuery();

  return (
    <div className="content">
      <SingleSelector onSelect={onSelect} defaultOption={defaultOption} disabled={disabled} options={options} />
    </div>
  );
};

export default TaskBadgeSelector;
