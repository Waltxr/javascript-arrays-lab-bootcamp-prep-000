const app = "I don't do much."

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
    kittens.unshift(name)
    return kittens
}
