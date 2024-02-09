import { Edit, Loader } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { FormEvent, useState } from "react";
import { useUpdateTodoMutation } from "@/redux/api/api";

type TUpdatesTodoModalProps = {
  title: string;
  description: string;
  priority?: string;
  _id?: string;
};

const UpdateTodoModal = ({
  title: todoTitle,
  description: todoDescription,
  priority: todoPriority,
  _id,
}: TUpdatesTodoModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //* update data from collection using rtk query
  const [updateTodo, { isLoading }] = useUpdateTodoMutation();
  if (isLoading) {
    return <Loader />;
  }

  //add todo
  const handleUpdate = (e: FormEvent) => {
    e.preventDefault();
    //update data
    const updateDoc = {
      title,
      description,
      priority,
    };
    const updateData = {
      _id,
      updateDoc,
    };
    updateTodo(updateData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="hover:bg-purple-700">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
          <DialogDescription>
            Make new todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdate}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="title" className="text-right">
                Todo Title
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                id="todo-title"
                className="col-span-3"
                defaultValue={todoTitle}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={todoDescription}
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Input
                onChange={(e) => setPriority(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={todoPriority}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button className="hover:bg-purple-700" type="submit">
                Update Todo
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
