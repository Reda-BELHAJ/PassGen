import { useState } from 'react'

const NymberInput = ({value}) => {
    const [count, setCount] = useState(10);

    value = 10;

    const min = 1; 
    const max = 40; 

    return (
        <>
            <div className="flex flex-row h-10 w-24 rounded-lg relative">
                <button
                    className="font-semibold bg-red-700 hover:bg-red-600 text-white  h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                    onClick={() => {
                        if (count - 1 >= min){
                            setCount(count - 1) 
                        }
                    }}>
                    
                    <span className="m-auto">-</span>
                </button>

                <input
                    type="hidden"
                    className="md:p-2 p-1 text-xs md:text-base focus:outline-none text-center"
                    readOnly
                    name="custom-input-number"
                />

                <div
                    className="border border-red-700 dark:border-red-700 w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                    
                    <span className="font-semibold text-gray-900 dark:text-gray-100"> {count} </span>
                </div>

                <button 
                    className="font-semibold bg-red-700 hover:bg-red-600 text-white h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                    onClick={() => {
                        if (count + 1 <= max){
                            setCount(count + 1) 
                        }
                    } }>
                    
                    <span className="m-auto">+</span>
                </button>
            </div>
        </>
    )
}

export default NymberInput
