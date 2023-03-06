/* this function validates that the price entered contains only digits, and maximum one period, and a number after the period */
function validatePrice(price) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(price);
}

export default validatePrice;
