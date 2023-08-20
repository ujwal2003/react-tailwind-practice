import React from "react";

function Quote() {
    return (
        <div className="bg-[#E5E7EB] flex flex-col flex-wrap items-center justify-center pt-14 pb-14">
            <p className="text-[6vmin] italic text-[#1F2937] w-[60vw] pb-5">
                &#8220;The tree is the protagonist, but rather a passive one, letting the plot unfold around it. Each photo contains a story of its own.&#8221;
            </p>
            <p className="text-right text-xl sm:text-sm">
                - Patrik Svedberg, (Photographer of the Broccoli Tree)
            </p>
        </div>
    );
}

export default Quote