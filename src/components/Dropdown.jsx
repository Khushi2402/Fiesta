import React, { useState } from 'react'
import { AiOutlineCaretUp, AiFillCaretDown } from 'react-icons/ai'
import list from "../list.json"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-center ww-p340px] h-[340px] rounded-lg'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='bg-transparent text-black font-semibold active:border-black'>
        STAG
        {!isOpen ? (
            <AiFillCaretDown className='h-8' />
        ) : (
            <AiOutlineCaretUp className='h-8' />
        )}
        </button>

        {isOpen && (
            <div className='bg-blue-200 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
                {list.map((item, i) => (
                    <div className='flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white'>
                        <h3>{item.type}</h3>
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}

export default Dropdown
