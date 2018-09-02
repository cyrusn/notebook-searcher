function dashToCamelCase (word) {
  return word.split('-').map((arr, n) =>
    (n === 0) ? arr : (arr[0].toUpperCase() + arr.slice(1))
  ).join('')
}
