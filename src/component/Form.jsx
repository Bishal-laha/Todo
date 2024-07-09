import { useState } from 'react';
import toast from 'react-hot-toast';

function Form({ onSubmit }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text) {
            const newtodo = {
                id: Math.floor(Math.random() * 100),
                data: text
            };
            onSubmit(newtodo);
            toast.success("Todo is Added..");
            setText("");
        } else
            toast.error("Please enter Todo to add");
    }

    return (
        <div className='flex gap-5 w-full justify-center'>
            <input type="text" className='w-[50%] p-3 outline-none rounded-md border border-1 border-black' autoFocus value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Todo" />
            <button onClick={handleAdd} className='p-3 w-[20%] bg-teal-400 rounded-md shadow-md text-white font-semibold duration-150 capitalize hover:duration-150 hover:bg-teal-600'>ADD</button>
        </div >
    )
}

export default Form;