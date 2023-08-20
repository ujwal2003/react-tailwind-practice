import React from "react";
import ContentImage from "./ContentImages";
import { makeKey } from "./Header";

function Info() {
    const contentImages = [
        {"img": "./Cedar-Of-God.jpeg", "description": "Cedars of God (Lebanon)"},
        {"img": "./Comfort-Maple.jpg", "description": "Comfort Maple (Canada)"},
        {"img": "./Angel_Oak.jpg", "description": "Angel Oak (United States)"},
        {"img": "./Wonderboom_tree.jpg", "description": "Wonderboom (South Africa)"}
    ];

    return (
        <div className="items-center text-center pt-5 pb-5">
            <h2 className="text-4xl font-extrabold text-[#1F2937] pb-4">
                Cool Trees!
            </h2>
            <div className="flex flex-wrap justify-center">
                {contentImages.map(img => (
                    <ContentImage key={makeKey(`content_img_${img.img}`)} image={img} />
                ))}
            </div>
        </div>
    );
}

export default Info