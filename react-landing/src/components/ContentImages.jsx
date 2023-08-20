import React from "react";

function ContentImage({image}) {
    return(
        <div>
            <img src={image.img} className="w-48 h-48 object-cover border-solid border-4 rounded-2xl border-[#3882F6] mt-1 mx-5 mb-0" />
            <p>{image.description}</p>
        </div>
    );
}

export default ContentImage