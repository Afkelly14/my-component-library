import React from "react";
import { storiesOf } from "@storybook/react";
import cart from "./Cart.png";
import favorites from "./Favorites.png";

import Icon from "./Icon";

storiesOf("Icon", module)
  .add("Cart", () => <Icon type= 'icon' img={cart}  label="Add to Cart"/>)
  .add("Favorites", () => <Icon img={favorites} type= 'icon' label="Add to Favorites" />)
  .add("Cart-small", () => <Icon img={cart} type= 'icon' />)
  .add("Favorites-small", () => <Icon img={favorites} type= 'icon'  />)
