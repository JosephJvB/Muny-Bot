const is_between = (int, min, max) => int >= min && int <= max

// returns the first number in a string between 1-3
const first_number_in_string = (str) => {
  const arr = str.split('')

  return arr.find(char => is_between(Number(char), 1, 3))
}

module.exports = {
  first_number_in_string,
  is_between
}
