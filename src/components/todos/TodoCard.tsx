import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader, Trash } from "lucide-react";
import UpdateTodoModal from "./UpdateTodoModal";
import { useDeleteTodoMutation, useToggleTodoMutation } from "@/redux/api/api";

type TTodoCardsProps = {
  title: string;
  description: string;
  isCompleted?: boolean;
  _id?: string;
  priority?: string;
};

const TodoCard = ({
  title,
  description,
  isCompleted,
  _id,
  priority,
}: TTodoCardsProps) => {
  //* delete todo from collection using rtk query
  const [deleteTodo] = useDeleteTodoMutation();
  const [toggle, { isLoading }] = useToggleTodoMutation();
  if (isLoading) {
    return <Loader />;
  }

  //* toggle checked unchecked
  const handleToggle = () => {
    const toggleDoc = {
      isCompleted: !isCompleted,
    };

    const toggleData = {
      _id,
      toggleDoc,
    };
    toggle(toggleData);
  };

  //* delete todo handler
  const handleDelete = () => {
    deleteTodo(_id);
  };

  return (
    <div className="flex py-2 my-2 text-white border border-green-500 rounded-sm justify-items-center">
      <p className="flex-1">
        <Input
          onChange={handleToggle}
          type="checkbox"
          defaultChecked={isCompleted}
        />
      </p>
      <p className="flex-1 border-r">{title}</p>
      <p className="flex items-center justify-center flex-1 pl-1 border-r">
        {description}
      </p>
      <p className="flex items-center justify-center flex-1 border-r">
        {isCompleted ? (
          <p className="font-semibold text-green-500 ">Done</p>
        ) : (
          <p className="font-semibold ">Pending</p>
        )}
      </p>
      <div className="flex items-center justify-center flex-1 gap-2 border-r">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <p className="col-span-1 border-r ">{priority}</p>
      </div>

      <div className="flex col-span-3 gap-3">
        <UpdateTodoModal
          _id={_id}
          title={title}
          description={description}
          priority={priority}
        />

        <Button onClick={handleDelete} className="hover:bg-purple-700">
          <Trash />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
