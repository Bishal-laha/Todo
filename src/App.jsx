import { useState } from "react";
import Form from "./component/Form";
import Todo from "./component/Todo";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (obj) => {
    setTodos([...todos, obj]);
  }

  const handleDelete = (id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
    toast.error("Todo is deleted");
  }

  return (
    <div className="w-full  bg-[rgba(100,125,225,0.7)] h-screen pt-[5%]">
      <div className="lg:max-w-[50%] shadow-2xl overflow-scroll h-full bg-slate-100 lg:h-[90%] p-5 mx-auto rounded-lg">
        <h1 className="font-bold text-blue-700 text-[1.5rem] lg:text-[2rem] uppercase text-center mb-5">Welcome To TODO-LIST</h1>

        <div className="flex flex-col justify-center items-center mt-[20%] lg:mt-0">
          <Form onSubmit={handleSubmit} />

          <div className="w-full mt-8">
            <h2 className="font-semibold text-[1.6rem] text-emerald-600 text-opacity-65 ml-[10%]">List of Todos: {todos?.length}</h2>

            {todos.length > 0 ?
              todos?.map((item, id) => (<Todo item={item} key={`${item.id}${id}`} id={id} handleDelete={handleDelete} />))
              : (<p className="text-opacity-90 text-gray-500 text-center mt-5">No Todo Is Added</p>)}
          </div>

        </div>
      </div>
      <Toaster position="top-left" />
    </div>
  )
}

export default App;