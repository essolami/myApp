import React from "react";
import mealsImage from "../../../assets/meals.jpg";
import { HeaderCartButton } from "../../";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
