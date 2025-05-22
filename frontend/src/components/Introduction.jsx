import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHexagonNodes, faCode, faRobot, faMagic } from "@fortawesome/free-solid-svg-icons";
import { faUser,  faRocket } from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
    const words = ["Login", "Input Details", "Generate Portfolio", "Deploy"];
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const currentWord = words[index];
        const typeSpeed = isDeleting ? 100 : 200;
        const nextDelay = isDeleting && charIndex === -1 ? 1000 : typeSpeed;

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
            }

            setText(currentWord.substring(0, charIndex));
            setCharIndex((prevChar) => prevChar + (isDeleting ? -1 : 1));
        }, nextDelay);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, index]);

    const features = [
        {
            icon: faUser,
            title: "Form‑Driven Input",
            description: "Enter your personal details, skills, projects, and achievements across dedicated sections to shape your portfolio blueprint.",
        },
        {
            icon: faRobot,
            title: "AI Prompt Synthesis",
            description: "Our AI automatically combines your inputs into a structured prompt that guides the entire portfolio build.",
        },
        {
            icon: faRocket,
            title: "Instant Deployment & Export",
            description: "Generate your live portfolio in one click or download the full HTML, CSS, and JS for self‑hosting or further customization.",
        },
    ];
    const handleScroll = () => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    };

    return (
        <div className="relative min-h-[98%] flex flex-col items-center justify-center text-gray-800 mt-8 md:mt-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-center px-4 md:px-8 w-full flex flex-col items-center"
            >
                <div className="flex items-center justify-center mb-6">
                    <FontAwesomeIcon
                        icon={faHexagonNodes}
                        className="text-6xl md:text-8xl text-indigo-500 mr-4"
                    />
                    <div className="text-5xl md:text-7xl font-bold">
                        <span className={words[index] === "HexCode" ? "text-indigo-500" : "text-gray-300"}>
                            {text}
                        </span>
                        <span className="animate-blink border-r-4 border-gray-800 ml-1"></span>
                    </div>
                </div>
                <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-4xl text-gray-400 mb-6 font-semibold"
                >
                Transform Your Vision into a Professional Portfolio
                </motion.h2>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="hidden md:block max-w-2xl mx-auto text-base md:text-xl text-gray-600 mb-10"
                >
                Fill out your personal details, skills, projects, and achievements, and let our AI craft a beautifully responsive, deployable portfolio in seconds.
                </motion.p>


                <div className="md:grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + idx * 0.2 }}
                            className="mb-2 md:mb-0 bg-white/10 backdrop-blur-lg shadow-md border-[0.8px] border-gray-500 rounded-lg p-3 md:p-6 text-gray-200  transition-all duration-300 group hover:scale-105 hover:shadow-lg"
                        >
                            <FontAwesomeIcon
                                icon={feature.icon}
                                className="text-3xl mb-4 text-indigo-500 transition-colors"
                            />
                            <h3 className="text-md md:text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm md:text-md text-gray-300 font-light">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
                <div
                    className="flex justify-center gap-5 items-center md:mt-6 md:mb-24"
                >

                    <motion.button
                        onClick={()=>{navigate('/universal')}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="mt-2 md:mt-0 md:bottom-10  bg-transparent border-[0.8px] border-gray-500 text-white font-normal md:font-semibold md:text-lg text-md  px-4 md:px-10 py-2 md:py-3 rounded-full shadow-md hover:bg-gray-400/20 hover:scale-105 transition-all duration-300"
                        >
                        Explore Projects
                    </motion.button>
                    <motion.button
                        onClick={handleScroll}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="mt-2 md:mt-0 md:bottom-10  bg-indigo-500 text-white font-normal md:font-semibold md:text-lg text-md px-4 md:px-10 py-2 md:py-3 rounded-full shadow-md hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
                        >
                        Get Started
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Introduction;
