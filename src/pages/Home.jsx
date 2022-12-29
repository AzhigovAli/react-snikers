import React from "react";
import Card from "../components/Card";

function Home({
  isLoading,
  items,
  searchValue,
  onAddToCart,
  onAddToFavorites,
  onChangeSeacrhInput,
  setSearchValue,
}) {
  const renderItems = () => {
    const filtred = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(8)] : filtred).map((item, index) => {
      return (
        items && (
          <Card
            loading={isLoading}
            key={index}
            onFavorite={(obj) => onAddToFavorites(obj)}
            title={item && item.title}
            price={item && item.price}
            imageUrl={item && item.imageUrl}
            onPlus={(obj) => onAddToCart(obj)}
          />
        )
      );
    });
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Поиск по "${searchValue}"` : "Все кроссовки"}</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={onChangeSeacrhInput}
            value={searchValue}
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
export default Home;
