import style from "./index.module.scss";
import home from "../../../public/homepagetext.png";
import stars from "../../../public/stars.png";
import Image from "next/image";

export default function Featured() {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>
          <Image src={home} alt="enjoy healthy life" />
          <Image src={stars} alt="stars" />
        </div>
      </div>
    </>
  );
}
