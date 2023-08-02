// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(factor) {
//   return function (fare) {
//     return fare * factor;
//   };
// }

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

const createFareMultiplier = (x) => (y) => x * y;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, givenFunction) {
  return givenFunction(arrayOfDrivers);
}
