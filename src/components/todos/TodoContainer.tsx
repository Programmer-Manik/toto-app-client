import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./TodoCard";
import { useGetTodoQuery } from "@/redux/api/api";
import { LoaderIcon } from "lucide-react";
import { useState } from "react";

type TTodos = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted: boolean;
};

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // get todo data from rtk query
  const { data: todos, isLoading } = useGetTodoQuery(priority);
  if (isLoading) {
    return <LoaderIcon />;
  }

  return (
    <div className="rounded-md bg-navbar-gradient">
      <div className="flex items-center justify-between py-1">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>

      <div>
        {todos?.map((todo: TTodos) => (
          <TodoCard key={todo._id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
