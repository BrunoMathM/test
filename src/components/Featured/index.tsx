import style from "./index.module.scss";
import home from "../../../public/homepagetext.png";
import stars from "../../../public/stars.png";
import Image from "next/image";
import { Button } from "../Button";

export default function Featured() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.image}>
            <Image src={home} alt="enjoy healthy life" />
            <Image src={stars} alt="stars" />
          </div>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </span>
          <div className={style.buttons}>
            <Button title={"Saiba mais"} />
            <Button title={"Fazer um pedido"} />
          </div>
        </div>
        <div className={style.background}></div>
      </div>
    </>
  );
}
