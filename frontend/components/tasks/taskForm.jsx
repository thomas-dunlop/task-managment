'use client';

import Container from 'react-bootstrap/Container';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import TaskOptionSelector from '../form/taskOptionSelector';
import { useCreateTaskMutation } from '../../store/services/api';

const TaskForm = function () {
  const {
    handleSubmit, register, setValue, reset
  } = useForm({ defaultValues: { duration: 60, start_time: '09:00:00', end_time: '17:00:00' } });
  const [createTask] = useCreateTaskMutation();

  const onSubmit = async (formData) => {
    await createTask(formData);
  };

  const populateTaskFromTaskOption = (taskOption) => {
    if (taskOption) {
      setValue('name', taskOption.name);
      setValue('duration', taskOption.duration);
      setValue('start_time', taskOption.start_time);
      setValue('end_time', taskOption.end_time);
    } else {
      reset();
    }
  };

  return (
    <Container>
      <div className="mb-3">
        <label htmlFor="selectTaskOption" className="form-label">Task Option</label>
        <TaskOptionSelector onSelect={(taskOption) => populateTaskFromTaskOption(taskOption)} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="is-family-monospace">
        <div className="mb-3">
          <label htmlFor="inputTaskName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputTaskName" aria-describedby="inputTaskName" {...register('name', { required: true })} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTaskName" className="form-label">Allowed Time Range</label>
          <div className="row">
            <div className="col">
              <input type="time" className="form-control" id="inputTaskName" aria-describedby="inputTaskName" {...register('start_time', { required: true })} />
            </div>
            <div className="col">
              <input type="time" className="form-control" id="inputTaskName" aria-describedby="inputTaskName" {...register('end_time', { required: true })} />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDuration" className="form-label">Duration (min)</label>
          <input type="number" className="form-control" id="inputDuration" aria-describedby="inputDuration" {...register('duration', { required: true })} step="5" />
        </div>
        <div className="control">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
};

export default TaskForm;
