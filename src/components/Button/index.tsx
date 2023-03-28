import style from "./index.module.scss";

interface ButtonProps {
  title?: String;
  onclick?: void;
}

export function Button({ title, onclick, ...props }: ButtonProps) {
  return (
    <>
      <button className={style.button} onClick={() => onclick}>
        {title}
      </button>
    </>
  );
}
