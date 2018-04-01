// returns the first number in a string between 1-3
const find_number_in_string = (str) => {
  const arr = str.split('')

  return arr.find(char => is_between(Number(char), 1, 3))
}

const is_between = (int, min, max) => {
  return int >= min && int <= max
}

module.exports = {
  find_number_in_string,
  is_between
}
