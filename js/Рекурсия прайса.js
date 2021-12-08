
const price = [
  {
    v:5,
    c:[{v:3,c:[{v:7}]}]
  },
  {
    v:5,
    c:[{v:3,c:[{v:7}]}]
  },
  {
    v:7
  }
]

const recursive = function (price) {
  let sum = 0
  for (let node in price) {
    sum += price[node].v
    sum += recursive(price[node].c)
  }
  return sum
}

console.log(recursive(price))
