import Link from 'next/link';
import {CgPassword} from 'react-icons/cg';
import {AiFillCode} from 'react-icons/ai';
import Toggle from './Toggle';

const Navbar = () => {
    return (
        <>
            <header className="fixed w-full border-t-4 bg-gray-100 dark:bg-gray-800 border-red-700 dark:border-red-800 shadow dark:shadow-2 z-50">
                <div className="container max-w-4xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/" aria-label="Home">
                                <a className="flex items-center hover:text-red-800 dark:hover:text-red-500 text-gray-800 dark:text-gray-50">
                                    <span className="text-xl font-bold">
                                        <CgPassword />
                                    </span>
                                    <span className="mx-3 font-bold text-base md:text-base">
                                        PassGen
                                    </span>
                                </a>
                            </Link>
                        </div>
                        <div className="flex items-center -mx-2">
                            <Toggle />

                            <a 
                                href="https://github.com/Reda-BELHAJ/PassGen"
                                aria-label="Tags" 
                                className="flex items-center mx-2 text-gray-800 hover:text-red-800 dark:hover:text-red-500 dark:text-gray-50">
                                <span className="text-xl ">
                                    <AiFillCode />
                                </span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
