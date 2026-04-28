// step 1
console.log("Grocery shopping list");

// step 2
const shoppingList = [];

// step 3
console.log("It will be nice to have some fruit to eat.");

// step 4
shoppingList.push("Apples");

// step 5
function getShoppingListMsg(arr) {
  return "Current Shopping List: " + arr;
};

// step 6
console.log(getShoppingListMsg(shoppingList));

// step 7
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

// step 8
console.log("It looks like we need to get some cooking oil.");

// step 9
shoppingList.unshift("Vegetable Oil");

// step 10
console.log(getShoppingListMsg(shoppingList));

// step 11 
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");

// step 12
console.log(getShoppingListMsg(shoppingList));

// step 13
console.log("This looks like too much junk food.");

// step 14
shoppingList.pop();

// step 15
console.log(getShoppingListMsg(shoppingList));

// step 16
console.log("It might be nice to get a dessert.");
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

// step 17
console.log("On second thought, maybe we should be more health conscious.");

// step 18
shoppingList.shift();

// step 19
shoppingList[0] = "Canola Oil";

// step 20
console.log(getShoppingListMsg(shoppingList));
