'use client';

import Container from 'react-bootstrap/Container';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import TaskOptionSelector from '../form/taskOptionSelector';
import { useCreateTaskMutation } from '@/store/services/api';

const TaskForm = function () {
  const { handleSubmit, control } = useForm();
  const [createTask] = useCreateTaskMutation();

  const onSubmit = async (formData) => {
    console.log(formData);
    await createTask({ option: formData.taskOption.id });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="is-family-monospace">
        <Controller
          control={control}
          name="taskOption"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TaskOptionSelector onSelect={(entry) => { if (entry) { onChange(entry); } else { onChange(null); } }} defaultTaskOptionId={value} />
          )}
        />
        <div className="control">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
};

export default TaskForm;
