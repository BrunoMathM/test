import style from "./index.module.scss";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Navbar({ navbarprops }: any) {
  return (
    <>
      <nav>
        <div className={style.container}>
          <div className={style.navbarContainer}>
            <div className={style.navLogo}>
              <Image src={logo} alt="logo" />
            </div>
            <ul className={style.navMenu}>
              <li className={style.navItem}>Home</li>
              <li className={style.navItem}>Sobre</li>
              <li className={style.navItem}>Blog</li>
              <li className={style.navItem}>Contato</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
