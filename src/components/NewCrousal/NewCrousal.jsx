import React, { useEffect, useRef } from 'react';
import './NewCrousal.css';

const NewCrousal = () => {
    const slidesRef = useRef([]);

    useEffect(() => {
        const slides = slidesRef.current;

        function addActive(slide) {
            slide.classList.add('active');
        }

        function removeActive(slide) {
            slide.classList.remove('active');
        }

        addActive(slides[0]);
        const interval = setInterval(() => {
            for (let i = 0; i < slides.length; i++) {
                if (i + 1 === slides.length) {
                    addActive(slides[0]);
                    setTimeout(removeActive, 550, slides[i]);
                    break;
                }
                if (slides[i].classList.contains('active')) {
                    setTimeout(removeActive, 550, slides[i]);
                    addActive(slides[i + 1]);
                    break;
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="crousalCOmponent">

        <div className="carousel">
            <div className="carousel-item" ref={el => slidesRef.current[0] = el}>
                <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/poornima1.jpg)' }}>
                </div>
            </div>
            <div className="carousel-item" ref={el => slidesRef.current[1] = el}>
                <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/poornima2.jpg)' }}>
                </div>
            </div>
            <div className="carousel-item" ref={el => slidesRef.current[2] = el}>
                <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/poornima3.png)' }}>
                </div>
            </div>
            <div className="carousel-item" ref={el => slidesRef.current[2] = el}>
                <div className="slide-image"
                    style={{ backgroundImage: 'url(/TopCrousalIMages/poornima4.png)' }}>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NewCrousal;
