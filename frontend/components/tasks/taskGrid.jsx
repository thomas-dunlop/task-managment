'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { badgeRenderer } from './columnRenderers';
import { useGetTasksQuery, useUpdateTaskMutation } from '../../store/services/api';

const TaskGrid = function () {
  const { data: tasks } = useGetTasksQuery({});
  const [updateTask] = useUpdateTaskMutation();
  const [internalTasks, setInternalTasks] = useState([]);

  useEffect(() => {
    if (tasks) {
      setInternalTasks(JSON.parse(JSON.stringify(tasks)));
    }
  }, [tasks]);

  const onCellValueChanged = async (event) => {
    const { id } = event.data;
    const { field } = event.colDef;
    await updateTask({ id, body: { [field]: event.newValue } });
  };

  return (
    <Container>
      <div className="ag-theme-alpine" style={{ height: '500px', width: '90%' }}>
        <AgGridReact
          rowData={internalTasks}
          columnDefs={[
            { field: 'complete', rowDrag: true, editable: true },
            { field: 'name' }, { field: 'id' },
            { field: 'badges', cellRenderer: badgeRenderer }
          ]}
          rowDragManaged
          suppressMoveWhenRowDragging
          onCellValueChanged={onCellValueChanged}
        />
      </div>
    </Container>
  );
};

export default TaskGrid;
