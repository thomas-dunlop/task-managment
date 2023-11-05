import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getApiUrl = () => 'http://127.0.0.1:8000/';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: getApiUrl() }),
  tagTypes: ['Tasks'],
  endpoints: (build) => ({
    getTasks: build.query({
      query: ({
        isScheduled = false, isUnscheduled = false, isComplete = false, isIncomplete = false
      }) => `tasks?isScheduled=${isScheduled}&isUnscheduled=${isUnscheduled}&isComplete=${isComplete}&isIncomplete=${isIncomplete}`,
      providesTags: ['Tasks']
    }),
  })
});

// Hooks
export const {
  useGetTasksQuery,
} = api;

export const {
  endpoints,
  reducerPath,
  reducer,
  middleware
} = api;
