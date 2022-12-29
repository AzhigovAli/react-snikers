import React from "react";
import Card from "../components/Card/index";
import { AppContext } from "../App";

function Favorites() {
  const { favorites, onAddToFavorites } = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <hr />
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => {
          return (
            <Card
              onFavorite={onAddToFavorites}
              favorited={true}
              key={index}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Favorites;
