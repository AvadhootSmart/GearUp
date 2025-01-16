import React, { useEffect } from "react";
import gsap from "gsap";

const PageLoader = ({ text }) => {
    useEffect(() => {
        gsap.fromTo(
            ".even",
            { y: 1000 },
            { y: 0, duration: 1, stagger: 0.2, ease: "power1" }
        );
        gsap.fromTo(
            ".odd",
            { y: -1000 },
            { y: 0, duration: 1, stagger: 0.2, ease: "power1" }
        );

        gsap.to(".wrapper", {
            y: "-100%",
            ease: "power1.inOut",
            delay: 1,
        });
    }, []);

    const renderText = () => {
        return text.split("").map((char, index) => (
            <div
                key={index}
                className={`${index % 2 === 0 ? "even" : "odd"} -space-y-8 leading-none`}
            >
                {Array(5)
                    .fill(char)
                    .map((c, i) => (
                        <h1 key={i}>{c}</h1>
                    ))}
            </div>
        ));
    };

    return (
        <div className="wrapper z-50 absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-zinc-900 text-[10rem] font-bold text-white">
            <div className="flex h-[8.1rem] w-full items-center justify-center overflow-hidden text-center">
                {renderText()}
            </div>
        </div>
    );
};

export default PageLoader;
