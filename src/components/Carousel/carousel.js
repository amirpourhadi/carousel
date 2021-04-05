import React, { useState } from 'react';
import { PHOTO_PATH, PHOTO_PATH_THUMB } from '../../utils/constants';
import './carousel.css';

function Carousel(props) {
    const { photos, showDots = false } = props;
    let [currentIndex, setCurrentIndex] = useState(0);

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const next = () => {
        currentIndex >= photos.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    const back = () => {
        currentIndex === 0 ? setCurrentIndex(photos.length - 1) : setCurrentIndex(currentIndex - 1);
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    const handleTouchEnd = () => {

        (touchStart - touchEnd < 0) ? next() : back();
    }

    const handleMouseDown = (mouseDownEvent) => {
        setTouchStart(mouseDownEvent.clientX)
    }

    const handleMouseMove = (mouseMoveEvent) => {
        setTouchEnd(mouseMoveEvent.clientX);
    }

    const photoRender = (photo, index) => {
        const photoUrl = `${PHOTO_PATH}/${photo.fileName}`;
        return <img key={`photo-${index}`}
            src={photoUrl}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}

            onDragStart={e => setTouchStart(e.clientX)}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onDragEnd={handleTouchEnd}
            className={currentIndex === index ? 'visible' : 'hidden'} />;
    }

    const thumbsRender = (photo, index) => {
        const thumbUrl = `${PHOTO_PATH_THUMB}/${photo.thumbName}`;

        return <img key={`thumb-${index}`}
            onClick={() => setCurrentIndex(index)}
            src={thumbUrl} />;
    }

    const dotsRender = (photo, index) => {
        return <span key={`dot-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`nav-dot ${currentIndex === index && 'active-dot'}`}
            id={`img-dot-${index}`}>
        </span>;
    }

    return <>
        <section className='current-image'>
            <div className='btn-nav btn-nav__left' onClick={() => back()}><i className="arrow left"></i></div>
            <div className="slides">
                {photos.map(photoRender)}
            </div>
            <div className='btn-nav btn-nav__right' onClick={() => next()}><i className="arrow right"></i></div>
        </section>

        {showDots ?
            <div className="nav-dots">{photos.map(dotsRender)}</div> :
            <div className="thumb-images">{photos.map(thumbsRender)}</div>
        }
    </>
}

export default Carousel;