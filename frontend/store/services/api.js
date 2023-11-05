import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getApiUrl = () => 'http://127.0.0.1:8000/';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  tagTypes: ['Tasks', 'TaskOptions'],
  endpoints: (build) => ({
    getTasks: build.query({
      query: ({
        isScheduled = false, isUnscheduled = false, isComplete = false, isIncomplete = false
      }) => `tasks?isScheduled=${isScheduled}&isUnscheduled=${isUnscheduled}&isComplete=${isComplete}&isIncomplete=${isIncomplete}`,
      providesTags: ['Tasks']
    }),
    getTaskOptions: build.query({
      query: () => 'taskOptions',
      providesTags: ['TaskOptions']
    }),
    createTask: build.mutation({
      query: (body) => ({
        url: 'tasks/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tasks']
    }),
  })
});

// Hooks
export const {
  useGetTasksQuery,
  useGetTaskOptionsQuery,
  useCreateTaskMutation
} = api;

export const {
  endpoints,
  reducerPath,
  reducer,
  middleware
} = api;
