import { useState, useRef } from "react";
import cls from "./Carousel.module.scss";

import img1 from "shared/assets/images/dressCode/dc_1.jpg";
import img2 from "shared/assets/images/dressCode/dc_2.jpg";
import img3 from "shared/assets/images/dressCode/dc_3.jpg";
import img4 from "shared/assets/images/dressCode/dc_4.jpg";
import img5 from "shared/assets/images/dressCode/dc_5.jpg";
import img6 from "shared/assets/images/dressCode/dc_6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchMoveX = useRef(null);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !touchStartX.current) return;
    touchMoveX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchMoveX.current;
    let newTransform = `translateX(calc(-${activeIndex * 100}% - ${diff}px))`;

    if (activeIndex === 0 && diff < 0) {
      newTransform = `translateX(-${activeIndex * 100}%)`;
    } else if (activeIndex === images.length - 1 && diff > 0) {
      newTransform = `translateX(-${activeIndex * 100}%)`;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = newTransform;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (!touchStartX.current || !touchMoveX.current) {
      if (trackRef.current) {
        trackRef.current.style.transition = "transform 0.5s ease-in-out";
      }
      return;
    }

    const diff = touchStartX.current - touchMoveX.current;
    if (diff > 50 && activeIndex < images.length - 1)
      setActiveIndex(activeIndex + 1);
    if (diff < -50 && activeIndex > 0) setActiveIndex(activeIndex - 1);

    touchStartX.current = null;
    touchMoveX.current = null;

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.5s ease-in-out";
      trackRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  };

  return (
    <div
      className={cls.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className={cls.track}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={cls.slide}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={cls.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className={cls.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${cls.dot} ${index === activeIndex ? cls.active : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
