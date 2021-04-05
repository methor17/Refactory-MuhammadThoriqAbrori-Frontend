
const playWithNumbers = count => {
  let even = [];
  let odd = [];
  let multiple = [];
  let prime = [];
  let primeLessThan = [];

  for (let i = 0; i < count; i++) {
    
    i % 2 === 0 ? even.push(i) : odd.push(i);

    
    multiple.push(i * 5);

    
    isPrime(i) ? prime.push(i) : "";

    
    if (i < 100) isPrime(i) ? primeLessThan.push(i) : "";
  }

  let output = {
    even: even,
    odd: odd,
    multiple: multiple,
    prime: prime,
    primeLessThan: primeLessThan
  };
  return output;
};


const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

console.log(playWithNumbers(1000));