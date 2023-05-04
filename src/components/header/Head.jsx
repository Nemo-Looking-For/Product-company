import style from "./Head.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <h1 className={style.header__title}>
          <strong>
            <em>Product</em>
          </strong>
          <br />
          <p>Наша компания самая мощная</p>
        </h1>
        <div className={style.header__text}>
          <p>Деятельность нашей компании связана с ...</p>
        </div>
      </div>
    </header>
  );
};


export default Header;