import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../tamplates/template-creator";

const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="content__wrapper">    
          <h1 class="content__label">Your Favorite Restaurants</h1>
          <div id="restaurants" class="restaurants"></div>      
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    } else {
      document.querySelector(".content__wrapper").innerHTML = `
        <h1 class="content__label">Your Favorite Restaurants</h1>
        <h2 class="restaurant-item__not__found">There is no restaurant to show</h2>
      `;
    }
  },
};

export default Favorite;
