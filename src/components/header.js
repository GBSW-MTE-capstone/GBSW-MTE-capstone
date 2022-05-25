import React from "react";
import style from "../style/module/header.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <h2 className={style.title}>
        MT(<span style={{ color: "#FFA600" }}>T</span>)E :
      </h2>
      <ul>
        <li>Home</li>
        <li>News</li>
        <li>Board</li>
        <li>Metaverse</li>
      </ul>
    </div>
  );
};

export default Header;
