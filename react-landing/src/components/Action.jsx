import React from "react";

function Action() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex items-center justify-center gap-4 bg-[#3882F6] my-10 mx-60 rounded-2xl h-[80%] py-7 px-20 text-[#F9FAF8] 
                            sm:flex-col sm:my-5 sm:mx-1">
                <div className="sm:text-center">
                    <h3 className="font-bold text-2xl sm:text-xl">
                        Call to action! It's time!
                    </h3>
                    <p className="text-md">
                        Sign up for our product by clicking that button right over there!
                    </p>
                </div>
                <div>
                    <button type="button" className="bg-transparent border-2 rounded-md border-white border-solid text-white text-sm w-[8vw] h-[4vh]
                                                     ease-in-out duration-300 hover:w-[9vw] hover:h-[5vh] hover:bg-[#7d9ac9e1] hover:shadow
                                                     hover:shadow-[#ffffff44] hover:font-bold sm:w-[18vw] sm:hover:w-[19vw]">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Action