import React from "react";

function makeKey(prefix="") {
    return `${prefix}_${new Date().getTime()}`;
}

function Header({links}) {
    return (
        <nav className="flex items-center justify-around bg-[#1F2937]">
            <div className="h-auto w-[45%]">
                <img src="./header-logo.png" />
            </div>

            <div className="flex gap-[50px]">
                {links.map(link => (
                    <a key={makeKey(`nav_link_${link.name}`)} 
                       href={link.url}
                       className="no-underline text-[18px] text-[#E5E7EB] hover:border-2 ease-in-out duration-300 hover:border-solid 
                                hover:border-white hover:p-2 hover:shadow hover:shadow-white">
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Header