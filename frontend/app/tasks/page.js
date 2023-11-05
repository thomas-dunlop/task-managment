import Button from 'react-bootstrap/Button';
import TaskGrid from '@/components/tasks/taskGrid';

function TaskPage() {
  return (
    <div className="content">
      <h1>Tasks</h1>
      <TaskGrid />
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default TaskPage;
