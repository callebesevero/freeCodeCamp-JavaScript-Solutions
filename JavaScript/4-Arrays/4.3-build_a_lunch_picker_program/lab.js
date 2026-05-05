let lunches = [];

function addLunchToEnd(lunches, lunch) {
  lunches.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return lunches;
};

function addLunchToStart(lunches, lunch) {
  lunches.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return lunches;
};

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    const lunch = lunches.pop();
    console.log(`${lunch} removed from the end of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  };
};

function removeFirstLunch(lunches) {
  if (lunches.length > 0) {
    const lunch = lunches.shift();
    console.log(`${lunch} removed from the start of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
  };
};

function getRandomLunch(lunches) {
  if (lunches.length > 0) {
    const lunch = lunches[Math.round(Math.random() * (lunches.length - 1))];
    
    console.log(`Randomly selected lunch: ${lunch}`);
  } else {
    console.log("No lunches available.");
  };
};

function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    const menu = lunches.map((l) => l).join(", ");

    console.log(`Menu items: ${menu}`);
  } else {
    console.log("The menu is empty.");
  };
};
