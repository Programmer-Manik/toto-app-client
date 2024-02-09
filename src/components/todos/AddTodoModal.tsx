import { FormEvent, useState } from "react";
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
import { useCreateTodoMutation } from "@/redux/api/api";
import { Loader } from "lucide-react";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState("");

  //add todo list or create todo list
  const [todo, { isLoading }] = useCreateTodoMutation();
  if (isLoading) {
    return <Loader />;
  }

  //* create todo list handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const createData = {
      title,
      description,
      priority,
      isCompleted: false,
    };
    todo(createData);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-28 hover:bg-purple-700">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Make new todo here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="title" className="text-right">
                Todo Title
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="todo-title"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Input
                onBlur={(e) => setPriority(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button className="hover:bg-purple-700" type="submit">
                Save Todo
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
