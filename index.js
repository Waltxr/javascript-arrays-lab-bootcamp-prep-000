const app = "I don't do much."

function destructivelyAppendKitten(name) {
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name) {
    kittens.unshift(name)
    return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
  return kittens
}

function appendKitten(name) {
  newkittens = kittens.push(name)
  return newkittens
}

function prependKitten(name) {
  var newkittens = kittens.unshift(name)
  return newkittens
}

function removeLastKitten(name) {
  var newkittens = kittens.pop(name)
  return newkittens
}

function removeFirstKitten(name) {
  var newkittens = kittens.shift(name)
  return newkittens
}
