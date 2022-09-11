
import { CSSProperties, useEffect } from "react";
import { useState } from "react";
import classes from"./Slider.module.css"

const slides = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4E22AQET7Xt-BMoawQ/feedshare-shrink_800/0/1650772864506?e=1665014400&v=beta&t=CjHxJLjBLI5FIhxDRV3hMFwyk1CyC32UjmGfpK3nhzw",
    title: "vinci",
  },
  {
    url: "http://main.gbpec.ac.in/images/vlcsnap-2022-08-08-18h31m11s838.png",
    title: "audi",
  },

  {

  url:"http://www.gbpec.ac.in/img/img4.jpg",

  },
  {
    url: "http://www.gbpec.ac.in/img/img6.jpg"
  }
 
];

const slideStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
};


const sliderStyles: CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const dotsContainerStyles: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  margin: "-35px auto 0 auto",



};


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const autoScroll = true;
  let slideInterval :any;
  let intervalTime = 5000;

  
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };


  function auto() {
    slideInterval = setInterval(goToPrevious, intervalTime);
  }

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);



  return (
    <div style={sliderStyles}>
      <div>
        <div  onClick={goToPrevious} >
          <span className={classes.left_control}>❰ </span>
        </div>
        <div onClick={goToNext} >
        <span className={classes.right_control}> ❱</span>
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            className={classes.dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
