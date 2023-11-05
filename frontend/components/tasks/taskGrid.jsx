'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Container from 'react-bootstrap/Container';
import { useGetTasksQuery } from '@/store/services/api';

const TaskGrid = function () {
  const { data: tasks } = useGetTasksQuery({});
  return (
    <Container>
      <div className="ag-theme-alpine" style={{ height: '500px', width: '50%' }}>
        <AgGridReact
          rowData={tasks?.map((element) => ({ ...element, name: element.option.name }))}
          columnDefs={[{ field: 'complete' }, { field: 'name' }]}
        />
      </div>
    </Container>
  );
};

export default TaskGrid;
