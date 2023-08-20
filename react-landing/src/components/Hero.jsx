import React from "react";

function Hero() {
    return(
        <div className="flex justify-center items-center bg-[#1F2937] gap-[15vw] pb-5 sm:gap-[2vw] sm:text-center sm:pt-2">
            <div className="w-1/3 sm:w-[100%]">
                <h1 className="font-bold text-5xl text-[#F9FAF8] sm:text-2xl">
                    Tree Appreciation Page
                </h1>
                <p className="text-lg text-[#E5E7EB] pt-5 pb-5 sm:text-sm sm:w-[100%] sm:pb-2 sm:pt-2">
                    This website has some subtext that goes here under the main title. It's a smaller font and the color is lower contrast
                </p>
                <button type="button" 
                  className="bg-[#3882F6] text-white text-sm w-[8vw] h-[4vh] rounded border-solid hover:bg-[#314d79] 
                              hover:shadow hover:shadow-[#1681da33] hover:w-[9vw] hover:h-[5vh] ease-in-out duration-300
                              sm:w-[18vw] sm:hover:w-[19vw]">
                    Sign up
                </button>
            </div>
            <div>
                <img src="./brocc_tree1.png" className="h-auto w-[100%]" />
            </div>
        </div>
    );
}

export default Hero