'use client';

import { useGetTaskBadgesQuery } from '../../store/services/api';
import Selector from './selector';

const TaskBadgeSelector = function ({
  onSelect,
  defaultOption,
  disabled = false
}) {
  const { data: options } = useGetTaskBadgesQuery();

  return (
    <div className="content">
      <Selector onSelect={onSelect} defaultOption={defaultOption} disabled={disabled} options={options} isMulti />
    </div>
  );
};

export default TaskBadgeSelector;
