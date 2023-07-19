/* eslint-disable no-undef */
const assert = require("assert");

Feature("Liking Restaurants");

// Before(({ I }) => {
//   I.amOnPage("/#/favorite");
// });

// Scenario("showing empty liked restaurants", ({ I }) => {
//   I.seeElement(".content__label");
//   I.waitForElement(".restaurant-item__not__found", 3);
//   I.see("There is no restaurant to show", ".restaurant-item__not__found");
// });

Scenario("liking one restaurant", async ({ I }) => {
  // I.see("There is no restaurant to show", ".restaurant-item__not__found");
  I.amOnPage("/");
  I.waitForElement(".restaurant-item__title", 3);
  I.seeElement(".restaurant-item__title a");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firsRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likeButton", 3);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".restaurant-item", 3);
  I.seeElement(".restaurant-item");

  const likedRestaurantName = await I.grabTextFrom(".restaurant-item__title a");
  assert.strictEqual(firsRestaurantName, likedRestaurantName);
});

Scenario("cancel liking the restaurant", async ({ I }) => {
  // I.see("There is no restaurant to show", ".restaurant-item__not__found");
  I.amOnPage("/");
  I.waitForElement(".restaurant-item__title", 3);
  I.seeElement(".restaurant-item__title a");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firsRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#likeButton", 3);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.waitForElement(".restaurant-item", 3);
  I.seeElement(".restaurant-item");

  const likedRestaurantName = await I.grabTextFrom(".restaurant-item__title a");
  assert.strictEqual(firsRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);
  I.waitForElement('[aria-label="unlike this restaurant"]', 3);
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage("/#/favorite");
  I.seeElement(".content__label");
  I.waitForElement(".restaurant-item__not__found", 3);
  I.see("There is no restaurant to show", ".restaurant-item__not__found");
});
