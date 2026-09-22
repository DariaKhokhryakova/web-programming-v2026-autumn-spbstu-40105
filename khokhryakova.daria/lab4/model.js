export class Restaurant {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
  }

  get menuSize() {
    return this.menu.length;
  }

  addDish(dish) {
    this.menu.push(dish);
  }

  removeDish(dishName) {
    this.menu = this.menu.filter((dish) => dish.name !== dishName);
  }
}

export function groupRestaurantsByMenuSize(restaurants) {
  const result = {};
  for (const restaurant of restaurants) {
    const key = restaurant.menuSize;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(restaurant);
  }
  return result;
}

export function getUniqueDishes(restaurants) {
  const names = new Set();
  for (const restaurant of restaurants) {
    for (const dish of restaurant.menu) {
      names.add(dish.name);
    }
  }
  return Array.from(names);
}

export function findRestaurantsByDish(restaurants, dishName) {
  return restaurants.filter((restaurant) =>
    restaurant.menu.some((dish) => dish.name === dishName),
  );
}

export function groupDishesByPriceRange(restaurants) {
  const result = {
    cheap: [],
    medium: [],
    expensive: [],
  };

  for (const restaurant of restaurants) {
    for (const dish of restaurant.menu) {
      if (dish.price < 500) {
        result.cheap.push(dish);
      } else if (dish.price <= 1000) {
        result.medium.push(dish);
      } else {
        result.expensive.push(dish);
      }
    }
  }
  return result;
}

export function findRestaurantsWithMostExpensiveDish(restaurants) {
  let maxPrice = -Infinity;
  for (const restaurant of restaurants) {
    for (const dish of restaurant.menu) {
      if (dish.price > maxPrice) {
        maxPrice = dish.price;
      }
    }
  }

  return restaurants.filter((restaurant) =>
    restaurant.menu.some((dish) => dish.price === maxPrice),
  );
}
