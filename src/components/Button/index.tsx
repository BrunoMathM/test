import style from "./index.module.scss";

interface ButtonProps {
  title?: String;
  onclick?: void;
}

export function Button({ title, onclick }: ButtonProps) {
  return (
    <>
      <button className={style.button} onClick={() => onclick}>
        {title}
      </button>
    </>
  );
}
