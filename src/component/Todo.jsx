import { MdDelete } from "react-icons/md";

function Todo({ item, handleDelete, id }) {
    return (
        <div className='w-[80%] mx-auto mt-5'>
            <div className='flex justify-between items-center p-3 bg-indigo-400 rounded-lg text-[1rem] font-semibold text-white'>
                <h3><span>{id + 1}.</span> {item.data}</h3>
                <button onClick={() => handleDelete(item.id)} className='text-[1.5rem] bg-red-600 rounded-full p-1 duration-150 hover:duration-150 hover:bg-red-700'><MdDelete /></button>
            </div>
        </div>
    )
}

export default Todo;