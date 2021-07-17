import Generated from "./Generated"

const Main = () => {
    return (
        <>
            <div className="p-6 my-4 w-full">
                <h2 className="font-bold text-xl md:text-2xl tracking-tight mb-2 text-red-500 dark:text-red-600 text-center">
                    Password Generator Tool
                </h2>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white text-center">
                    Generate a Secure Password
                </h1>
            </div>
            <div className="p-6 my-4 w-full rounded bg-gray-100 dark:bg-gray-800">
                <Generated />
            </div>
        </>
    )
}

export default Main
