import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import CONFIG from "../../globals/config";

const createDetailDetailTemplate = (restaurant) => `
  <h1 class="restaurant__title">${restaurant.name}</h1>
  <div class="restaurant-img__wrapper">
    <img class="restaurant__poster" 
    src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
    alt="${restaurant.name}" /> 
    <span class="restaurant__description">${restaurant.description}</span>
  </div>
  <div class="restaurant-info__wrapper">
    <div class="restaurant__info">
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>City</h4>
      <p>${restaurant.city}</p>    
    </div>
    <div class="restaurant__info">
      <h4>Food Menu</h4>
      <ul>${restaurant.menus.foods
    .map((food) => `<li><span>${food.name}<span></li>`)
    .join("")}</ul>
    </div>
    <div class="restaurant__info">
      <h4>Drink Menu</h4>
        <ul>${restaurant.menus.drinks
    .map((drink) => `<li><span>${drink.name}<span></li>`)
    .join("")}</ul>
    </div>
  </div>
  <div class="restaurant__info">
  <h4>Customers Review</h4>
      <ul>
        ${restaurant.customerReviews
    .map((review) => `<li><span>${review.name}: ${review.review}</span></li>`)
    .join("")}</ul>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <img
    class="restaurant-item__thumbnail lazyload"
    src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
    alt=${restaurant.name}
    />
    <div class="restaurant-item__content">
    <h1 class="restaurant-item__title">
        <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
    </h1>
    <p class="restaurant-item__date">
      ${restaurant.city}
      <span href="#" class="restaurant-item__date__author">
      ⭐ ${restaurant.rating}</span>
    </p>
    <p class="restaurant-item__description">
        ${restaurant.description}
    </p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
