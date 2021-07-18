import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa";
import { motion } from 'framer-motion'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <motion.footer 
                transition={{ ease: "easeOut" }}
                className="absolute w-full -bottom-0">
                <div className="bg-red-500 dark:bg-red-800">
                    <div className="container max-w-4xl mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-50 text-sm text-center sm:text-left">
                            © {year} PassGen —
                            <span className="text-gray-50 ml-1">Reda BELHAJ</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a
                                aria-label="Twitter"
                                className="text-gray-50"
                                href="https://twitter.com/RedatoB"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiTwitter />
                            </a>
                            <a
                                aria-label="Github"
                                className="ml-4 text-gray-50"
                                href="https://github.com/Reda-BELHAJ"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiGithub />
                            </a>
                            <a
                                aria-label="Instagram"
                                className="ml-4 text-gray-50"
                                href="https://www.instagram.com/ss8yeo_cho/"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiInstagram />
                            </a>
                            <a
                                aria-label="Linkedin"
                                className="ml-4 text-gray-50"
                                href="https://www.linkedin.com/in/reda-belhaj/"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                <FiLinkedin />
                            </a>
                            <a
                                aria-label="Linkedin"
                                className="ml-4 text-gray-50"
                                href="https://unencrypted.vercel.app/"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                <FaBloggerB />
                            </a>
                        </span>
                    </div>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer
