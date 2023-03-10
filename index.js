// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(catName) {
    const copyOfCats = cats.slice();
    copyOfCats.push(catName);
    return copyOfCats;
}

function prependCat(catName) {
    const copyOfCats = cats.slice();
    copyOfCats.unshift(catName);
    return copyOfCats;
}

function removeLastCat(catName) {
    const copyOfCats = cats.slice();
    copyOfCats.pop(catName);
    return copyOfCats;
}

function removeFirstCat(catName) {
    const copyOfCats = cats.slice();
    copyOfCats.shift(catName);
    return copyOfCats;
}