
// 1. Returns number of blocks from HQ (HQ is at block 42)
function distanceFromHqInBlocks(someValue) {
  const hqBlock = 42;
  return Math.abs(someValue - hqBlock);
}

// 2. Converts block distance from HQ to feet (1 block = 264 feet)
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3. Calculates number of feet traveled between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare based on distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

