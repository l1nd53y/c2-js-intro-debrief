//#1
let myNumber = 15;
if (typeof myNumber != 'number') {
    console.log('This is not a number.');
}

else if (myNumber % 3 === 0 && myNumber % 5 === 0) {
    console.log('GenBuzz');
}
else if (myNumber % 3 === 0) {
    console.log('Gen');
}
else if (myNumber % 5 === 0) {
    console.log('Buzz');
}
else {
    console.log(myNumber);
}

//#2
let item = 'Shoes';

switch (item) {
  case 'Shoes':
  console.log('Shoes are $50');
  break;
  case 'Jeans':
  console.log('Jeans are $25');
  break;
  case 'Hat':
  console.log('Hats are $12');
  break;
  case 'Socks':
  console.log('Socks are $2');
  break;
  default:
  console.log('Invalid item.');
  break;
}

//#3
Ran out of time!