import { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = index => {
        setCurrentIndex(index);
    };

    return (
        <div className='slider'>
            {/* Left Arrow */}
            <div className='arrow left-arrow' onClick={goToPrevious}>
                &#10094;
            </div>

            {/* Image */}
            <div
                className='slide'
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>

            {/* Right Arrow */}
            <div className='arrow right-arrow' onClick={goToNext}>
                &#10095;
            </div>

            {/* Dots */}
            <div className='dots'>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${
                            index === currentIndex ? 'active' : ''
                        }`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
