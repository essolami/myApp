import React from "react";

// Components
const Header = React.lazy(() => import("./Layouts/Header"));
const Meals = React.lazy(() => import("./Meals/Meals"));
const MealsSummary = React.lazy(() => import("./Meals/MealsSummary"));
const AvailableMeals = React.lazy(() => import("./Meals/AvailableMeals"));
// UI
const HeaderCartButton = React.lazy(() => import("./UI/HeaderCartButton"));
// Svg
const CartIcon = React.lazy(() => import("./svg/CartIcon"));

// export varibals
export {
  Header,
  CartIcon,
  HeaderCartButton,
  Meals,
  MealsSummary,
  AvailableMeals,
};
