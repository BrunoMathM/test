import { useState, useRef } from "react";
import { data, sliderSettings } from "../../utils/data";
import prev from "../../../public/prev.png";
import next from "../../../public/next.png";
import style from "./index.module.scss";
import Image from "next/image";

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);

  const carousel = useRef(null);

  const handlePrev = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleNext = (e: any) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div className={style.container}>
        <button className={style.cardButton} onClick={handlePrev}>
          <Image src={prev} alt="scroll to prev" />
        </button>
        <div className={style.slider} ref={carousel}>
          {data.map((element, index) => (
            <div className={style.imageWrapper} key={index}>
              <div className={style.image}>
                <Image src={element.image} alt="cake" />
              </div>
              <div className={style.textTitle}>{element.title}</div>
              <div className={style.textDescription}>{element.description}</div>
            </div>
          ))}
        </div>
        <button className={style.cardButton} onClick={handleNext}>
          <Image src={next} alt="scroll to next" />
        </button>
      </div>
    </>
  );
}
