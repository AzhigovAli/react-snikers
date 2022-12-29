import React from "react";
import { AppContext } from "../App";
const Info = ({ title, image, description }) => {
  const { setRemove } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="Empty-Cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setRemove(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
