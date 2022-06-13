import './styles/style.scss';

const obj1 = {
  name: "Test", numb: 2
}

const obj2 = {
  ...obj1,
  boolz: true
}

console.log(obj1);
console.log(obj2);
