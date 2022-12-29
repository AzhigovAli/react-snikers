import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({});

function App() {
  const [remove, setRemove] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function featchData() {
      try {
        const itemsResponse = await axios.get(
          "https://635fb6dcca0fe3c21aa294e4.mockapi.io/items"
        );
        const favoritesResponse = await axios.get(
          "https://635fb6dcca0fe3c21aa294e4.mockapi.io/favorites"
        );
        const cartResponse = await axios.get(
          "https://635fb6dcca0fe3c21aa294e4.mockapi.io/cart"
        );
        setIsLoading(false);
        setItems(itemsResponse.data);
        setFavorites(favoritesResponse.data);
        setCartItems(cartResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
      }
    }
    featchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        await axios.delete(
          `https://635fb6dcca0fe3c21aa294e4.mockapi.io/cart/${findItem.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://635fb6dcca0fe3c21aa294e4.mockapi.io/cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
      console.error(error);
    }
  };

  const onAddToFavorites = async (obj) => {
    if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      await axios.delete(
        `https://635fb6dcca0fe3c21aa294e4.mockapi.io/favorites/${obj.id}`
      );
      setFavorites((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      const { data } = await axios.post(
        "https://635fb6dcca0fe3c21aa294e4.mockapi.io/favorites",
        obj
      );
      setFavorites((prev) => [...prev, data]);
    }
  };

  const onChangeSeacrhInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://635fb6dcca0fe3c21aa294e4.mockapi.io/cart/${id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
    }
  };
  const isItemAdded = (id) => {
    cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorites,
        onAddToCart,
        setRemove,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setRemove(false)}
          onRemove={onRemoveItem}
          opened={remove}
        />
        <Header onClickCart={() => setRemove(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                isLoading={isLoading}
                searchValue={searchValue}
                onChangeSeacrhInput={onChangeSeacrhInput}
                setSearchValue={setSearchValue}
                onAddToFavorites={onAddToFavorites}
                onAddToCart={onAddToCart}
              />
            }
            exact
          ></Route>
          <Route path="/favorites" element={<Favorites />} exact></Route>
          <Route path="/orders" element={<Orders />} exact></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
