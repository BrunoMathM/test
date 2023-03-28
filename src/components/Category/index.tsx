import style from "./index.module.scss";

export default function Category() {
  return (
    <>
      <div className={style.container}>
        <h2>Food Category</h2>
        <span className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </span>
        <div className={style.carousel}>{/*carousel*/}</div>
      </div>
    </>
  );
}
