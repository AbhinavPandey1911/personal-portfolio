import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import HackerRoom from "../Components/HackerRoom";

const Hero = () => {
    return (
        <div className="justify-center items-center flex flex-col h-screen bg-gray-800 text-white">
            <div className="w-full text-center mx-auto my-0 sm:mt-10 mt-5 gap-3">
                <span className="py-0 text-amber-300 sm:text-2xl text-xl">Hii! I am Abhinav👷<span className="waving-animation">👋</span></span>
            </div>

            <div className="w-full text-center mx-auto my-0 sm:mt-10 mt-5 gap-3">
            <Canvas className="h-full w-full ">
                <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                {/* <HackerRoom /> */}
            </Canvas>
            </div>
        </div>
    )
}

export default Hero;