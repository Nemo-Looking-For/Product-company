import style from "./ReversForm.module.css";

const ReversForm = () => {
  return (
    <div className={style.container}>
      <div className={style.form}>
        <h2 className={style.title_3}>Задайте нам свой вопрос</h2>
        <div className={style.data_block}>
          <input type="text" className={style.name} placeholder="Full Name" />
          <input type="text" className={style.mail} placeholder="Email" />
          <input type="text" className={style.phone} placeholder="Phone" />
        </div>
        <div className={style.text_area}>
          <p className={style.message}>Message</p>
          <textarea rows={5} placeholder="Напишите свое сообщение . . ." />
        </div>
        <div className={style.send}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ReversForm;
