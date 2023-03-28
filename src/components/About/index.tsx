import style from "./index.module.scss";
import food1 from "../../../public/food1.png";
import food2 from "../../../public/food2.png";
import food3 from "../../../public/food3.png";
import Image from "next/image";
import { Button } from "../Button";

export default function About() {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>
          <Image src={food1} alt="food" />
          <Image src={food2} alt="food" />
          <Image src={food3} alt="food" />
        </div>
        <div className={style.about}>
          <span className={style.title}>Sobre nós____</span>
          <h2 className={style.text}>
            Food is an important part Of a balanced Diet
          </h2>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </span>
          <div className={style.buttons}>
            <Button title={"Saiba mais"} />
            <Button title={"Ver vídeo"} />
          </div>
        </div>
      </div>
    </>
  );
}
