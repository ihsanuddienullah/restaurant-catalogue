import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../tamplates/template-creator";

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="content__wrapper">
          <h1 class="content__label">Top Tier Restaurant List</h1>
          <div id="restaurants" class="restaurants">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
