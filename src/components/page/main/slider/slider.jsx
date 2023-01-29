import React, { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevCount) => prevCount + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);
    const slides = [
        { id: 1, key: "slide1", src: "../../../images/slider/slide1.png" },
        { id: 2, key: "slide2", src: "../../../images/slider/slide2.png" },
        { id: 3, key: "slide3", src: "../../../images/slider/slide3.png" }
    ];
    const dots = [
        { id: 1, key: "slide1" },
        { id: 2, key: "slide2" },
        { id: 3, key: "slide3" }
    ];
    function showSlides() {
        if (activeIndex > slides.length) {
            setActiveIndex(1);
        } else if (activeIndex < 1) {
            setActiveIndex(slides.length);
        }
        return slides.map(
            (slide) =>
                activeIndex === slide.id && (
                    <div className="slide" key={slide.key}>
                        <img src={slide.src} alt={slide.key} />
                    </div>
                )
        );
    }
    return (
        <div className="slider">
            <div className="slides">
                {showSlides()}
                <a
                    className="prev"
                    onClick={() => setActiveIndex(activeIndex - 1)}
                >
                    &#10094;
                </a>
                <a
                    className="next"
                    onClick={() => setActiveIndex(activeIndex + 1)}
                >
                    &#10095;
                </a>

                <div className="dots">
                    {dots.map((dot) => (
                        <span
                            className={
                                dot.id === activeIndex ? "dot active" : "dot"
                            }
                            key={dot.key}
                            onClick={() => {
                                setActiveIndex(dot.id);
                            }}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
