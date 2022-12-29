import React from "react";
import { Link } from "react-router-dom";
function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="Logo" />
        <Link to="/">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </Link>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <button className="btnCart">
            <img
              onClick={onClickCart}
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="Cart"
            />
          </button>
          <span>0 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="cu-p"
              width={18}
              height={18}
              src="/img/heart.svg"
              alt="Heart"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <button className="btnUser">
              <img width={18} height={18} src="/img/user.svg" alt="User" />
            </button>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
