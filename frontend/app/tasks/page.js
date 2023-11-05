import TaskGrid from '../../components/tasks/taskGrid';
import TaskForm from '../../components/tasks/taskForm';

function TaskPage() {
  return (
    <div className="content">
      <br />
      <TaskForm />
      <hr />
      <TaskGrid />
    </div>
  );
}

export default TaskPage;
