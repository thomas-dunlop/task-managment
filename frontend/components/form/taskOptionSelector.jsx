'use client';

import { useGetTaskOptionsQuery } from '../../store/services/api';
import Selector from './selector';

const TaskOptionSelector = function ({
  onSelect,
  defaultOption,
  disabled = false
}) {
  const { data: options } = useGetTaskOptionsQuery();

  return (
    <div className="content">
      <Selector onSelect={onSelect} defaultOption={defaultOption} disabled={disabled} options={options} />
    </div>
  );
};

export default TaskOptionSelector;
