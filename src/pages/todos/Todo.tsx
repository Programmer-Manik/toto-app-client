import TodoContainer from "@/components/todos/TodoContainer";

const Todo = () => {
  return (
    <div className="mt-12 mb-8">
      <h1 className="text-4xl font-bold text-center mb-8">Show Todo List</h1>

      <TodoContainer></TodoContainer>
    </div>
  );
};

export default Todo;
