'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Container from 'react-bootstrap/Container';
import { badgeRenderer } from './columnRenderers';
import { useGetTasksQuery } from '../../store/services/api';

const TaskGrid = function () {
  const { data: tasks } = useGetTasksQuery({});
  return (
    <Container>
      <div className="ag-theme-alpine" style={{ height: '500px', width: '90%' }}>
        <AgGridReact
          rowData={tasks}
          columnDefs={[{ field: 'complete', rowDrag: true }, { field: 'name' }, { field: 'id' }, { field: 'badges', cellRenderer: badgeRenderer }]}
          rowDragManaged
          suppressMoveWhenRowDragging
        />
      </div>
    </Container>
  );
};

export default TaskGrid;
