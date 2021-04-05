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