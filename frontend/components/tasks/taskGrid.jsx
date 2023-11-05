'use client';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Container from 'react-bootstrap/Container';

const TaskGrid = function () {
  return (
    <Container>
      <div className="ag-theme-alpine" style={{ height: '500px', width: '50%' }}>
        <AgGridReact
          rowData={[]}
          columnDefs={[{ field: 'id' }]}
        />
      </div>
    </Container>
  );
};

export default TaskGrid;
