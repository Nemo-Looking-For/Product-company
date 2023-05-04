import style from "./Projects.module.css"
const Projects = () => {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <h2 className={style.title_1}>Проекты нашей компании</h2>
        <ui className={style.projects}>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
                Project
              </h3>
            </a>
          </li>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
              Project
              </h3>
            </a>
          </li>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
              Project
              </h3>
            </a>
          </li>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
              Project
              </h3>
            </a>
          </li>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
              Project
              </h3>
            </a>
          </li>
          <li className={style.project}>
            <a href="./activity.html">
              <img
                src="./img/projects/rentgen_1.jpg"
                alt="Project img"
                className={style.project__img}
              />
              <h3 className={style.project__title}>
              Project
              </h3>
            </a>
          </li>
        </ui>
      </div>
    </div>
  );
};

export default Projects;
