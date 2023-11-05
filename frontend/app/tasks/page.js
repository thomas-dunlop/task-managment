import Button from 'react-bootstrap/Button';
import TaskGrid from '../../components/tasks/taskGrid';
import TaskForm from '@/components/tasks/taskForm';

function TaskPage() {
  return (
    <div className="content">
      <h1>Tasks</h1>
      <TaskForm />
      <hr />
      <TaskGrid />
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default TaskPage;
