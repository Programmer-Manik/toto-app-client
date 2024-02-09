import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo-app-server-virid.vercel.app",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append("priority", priority);
        }

        return {
          url: "/todo-list",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),

    createTodo: builder.mutation({
      query: (data) => {
        return {
          url: "/create-todo-list",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),

    updateTodo: builder.mutation({
      query: (data) => {
        return {
          url: `/update-todo-list/${data?._id}`,
          method: "PUT",
          body: data?.updateDoc,
        };
      },
      invalidatesTags: ["todo"],
    }),

    toggleTodo: builder.mutation({
      query: (data) => {
        console.log("toggle", data);
        return {
          url: `/toggle-todo-list/${data?._id}`,
          method: "PUT",
          body: data?.toggleDoc,
        };
      },
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/remove-todo-list/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
  useToggleTodoMutation,
} = baseApi;
