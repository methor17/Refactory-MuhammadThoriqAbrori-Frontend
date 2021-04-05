//soal 1. Play with CSV and object
const csv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`;

const makeObject = data => {
  let row = data.split("\n");
  let key = row[0].split(", ");
  let arrObject = [];

  for (i in row) {
    let obj = {};
    let col = row[i].split(", ");

    for (j in col) {
      obj[key[j].toLowerCase()] = col[j];
    }

    arrObject.push(obj);
  }
  return arrObject;
};

console.log(makeObject(csv));

//soal 2. Censoring Words
const data = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

/**
 * @param {String} data 
 * @param  {String} sensor 
 */
const censorWord = (data, ...sensor) => {
  sensor.forEach(sensor => {
    let sensorLength = sensor
      .toLowerCase()
      .split("")
      .map(x => "*")
      .join("");
    data = data.toLowerCase().split(sensor).join(sensorLength);
  });
  return data;
};

console.log(
  censorWord(
    data,
    "dolor",
    "elit",
    "quis",
    "nisi",
    "fugiat",
    "proident",
    "laborum"
  )
);

//soal 3. Count words
const data = `Aku ingin begini 
Aku ingin begitu
Ingin ini itu banyak sekali
Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib
Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu
La... la... la...
Aku sayang sekali
Doraemon
La... la... la...
Aku sayang sekali`;

const countWord = (data, ...keys) => {
  keys = keys.map(w => w.toLowerCase());
  let obj = {};

  const words = data.split("\n").join(" ").split(" ");

  for (word of words) {
    for (key of keys) {
      if (key.toLowerCase() == word.toLowerCase()) {
        obj[key] ? obj[key]++ : (obj[key] = 1);
      }
    }
  }

  return obj;
};

console.log(countWord(data, "aku", "ingin", "dapat"));

//soal 4. Play with numbers
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

//soal 5. Char Counter
var obj={}
var repeats=[];
str='Mammals'
str = str.toLowerCase();


for(x = 0, length = str.length; x < length; x++) {
    var l = str.charAt(x)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    
}



var obj1={}
var repeats1=[];
str1='Bruiser build'
str1 = str1.toLowerCase();


for(x = 0, length = str1.length; x < length; x++) {
    var l = str1.charAt(x)
    obj1[l] = (isNaN(obj1[l]) ? 1 : obj1[l] + 1);
}

console.log(obj)
console.log(obj1)

//soal 6. Missing Letter
const findMissingLetter = (array) => {
  
  for (let i = 1; i < array.length; i++) {
    
    const prev = array[i - 1].charCodeAt();
    
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) { 
      return String.fromCharCode(prev + 1);
    }
  }
  
  return null; // if nothing is found
}

console.log("list_letters_first :  " + findMissingLetter(["c","d","e","g","h"])); 
console.log("list_letters_second :  " + findMissingLetter(["X","Z"]));


//soal 7. Sorting Odd Numbers
const numbers = [9,4,2,4,1,5,3,0] 

function sortOddsOnly(arr) {
    const odds = arr
        .filter(x => x%2)
        .sort((a, b) => a - b);
        
    return arr
        .map(x => x%2 ? odds.shift() : x);
}

console.log(sortOddsOnly(numbers));

//soal 8. Masking
function secrettext(input){
  return input.split("").map(function(char, index){
    if(index === (input.length - 3) || index === (input.length - 2) || index === (input.length - 1)){
      return char;
    } else {
      return "*";
    }
  }).join("");
}

console.log(secrettext("23dn3ir30fd2eddd"));

//soal 9. Array Sort
function arraylist(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(arraylist([3, 12, 4, 5, 8, 9]));

//soal 10. Rest API
const axios = require( 'axios' );


const getUser = ()=> axios.get('https://jsonplaceholder.typicode.com/users');
const getPost = ()=> axios.get('https://jsonplaceholder.typicode.com/posts');


Promise.all([getUser(), getPost()])
  .then(results => {
    const users = results[0].data;
    const posts = results[1].data;
    const merge = posts.map(post => {
        post['user'] = users.filter(user => user.id == post.userId)[0]
        return post
    })

    console.log(merge)
  })
  .catch(err => console.log(err.message))