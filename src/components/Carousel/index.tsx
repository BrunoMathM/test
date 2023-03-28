import style from "./index.module.scss";
import { Button } from "../Button";
import cake from "../../../public/cake.png";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>
          <Image src={cake} alt="cake" />
        </div>
        <div className={style.carousel}>{/*carousel*/}</div>
      </div>
    </>
  );
}
