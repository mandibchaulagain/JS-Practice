//Print all even numbers from 0 – 10
for(let i=0; i<=10;i+=2){
    console.log(`Print all even numbers from 0 – 10: ${i}`);
}

//Print a table containing multiplication tables

{
    var x= 2;

    for(let i=1; i<=10; i++){
        console.log(`${x} x ${i} = ${x*i}`);
    }
}

//Create a length converter function

{
    var km = 1;
    function kmtomiles(km){
        miles = km*0.621371;
        console.log(`${km} Kilometers is ${miles} miles.`)
    }

kmtomiles(km)
}

//Calculate the sum of numbers within an array

{
    let array3 = []
    function addtwoarrays(array1,array2){
        
        for(i = 0; i<array1.length && array2.length; i+=1){
            array3.push(array1[i]+array2[i]);
            
        }
    }
    addtwoarrays([1,2,3],[4,5,6])
    console.log(array3);
}

//Create a function that gives a reversed array using two arrays
{
    let array3 = [],key;
    let reverseArray = (array1) =>{
        for(let i = array1.length-1; i>=0; i-=1){
            key = array1[i];
            array3.push(key);
        }
    }
    reverseArray([1,2,3,4,5])
    console.log(array3)
}

// Create a function that reverses an array using only one array
{
    let array1 = [1, 2, 3, 4, 5, 6,7];
    let reverseArray = (array1) => {
        for (let i = 0; i < array1.length / 2; i++) {
            let temp = array1[i];
            array1[i] = array1[array1.length - 1 - i];
            array1[array1.length - 1 - i] = temp;
        }
    };
    reverseArray(array1);
    console.log(array1);
    
}

// Sort an array from lowest to highest

{
    let array1 = [2,1,4,3,5] 
    let sortedArray = (array1) => {
        for(i = 0; i<5; i++){
            for(j = 0; j<5;j++){
                if(array1[j]>array1[j+1]){
                    temp = array1[j];
                    array1[j] = array1[j+1];
                    array1[j+1] = temp;
                }
            }
        }
    }
    sortedArray(array1);
    console.log(array1);
}

// create a function that filters out negative numbers
{
    let array1 = [1, -2, -3, 4, 5];
    let removeNegative = (array) => {
        return array.filter((number) => {
            return number >= 0;
        });
    };
    array1 = removeNegative(array1);/*Assigned the result of removeNegative(array1) back to 
    array1 to store the filtered array.*/
    console.log(array1);
}

//Remove the spaces found in a string

{
    var randomString = "     Mandib C hau lag ain  ";
    console.log(randomString.trim());
    console.log(randomString.replace(/\s+/g, ''));
    /*\s+ matches one or more whitespace characters (including spaces, tabs, and line breaks).
    The g flag at the end (/.../g) indicates a global search, meaning
    it will replace all occurrences of the pattern in the string. */
}

// Return a Boolean if a number is divisible by 10 using if

{
    let divByTen = (num) =>{
        if(num % 10 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    divByTen(10);
    console.log(divByTen(10));
}
// Return a Boolean if a number is divisible by 10 using conditional operator
{
    const booleanNum = (num) => {
        return num % 10 === 0 ? true : false
    }
    
    console.log(booleanNum(20))
}

//convert string to array
{
    let string1 = "mandib";
    let splitword = string1.split("");
    console.log(splitword);
}

//Return the number of vowels in a string
{
    let string1 = "mandib";
    vowelArray = [];
    let splitword = string1.split("");
    for(i=0;i<6;i++){
        if (splitword[i] === 'a' || splitword[i] === 'e' || splitword[i] === 'i' || splitword[i] === 'o' || splitword[i] === 'u'){
            vowelArray.push(splitword[i]);
        }
    }
    console.log(vowelArray);
}

//Get nth character of string
{
    string1 = "mandib";
    nthTerm = 4;
    myFunction = (str1,n) =>{
        let array1 = [];
        let splitstr = str1.split("");
        for(i = 0; i<n;i++){
            if(i===(n-1)){
                console.log(`The ${n} term of the string ${string1} is ${splitstr[i]}`)
            }
        }
    }
    myFunction(string1, nthTerm);
}

/*Write a function that takes a string as argument. 
The string contains the substring 'is'. Return the index of 'is'.
 */
{
    string1 = "praise";
    string2 = "is";
    subStrPos = (str1) =>{
        for(i=0; i<str1.length;i++){
            if(str1.substr(i,2) === string2){
                console.log(`The position of ${string2} is ${i}`)
            }
        }
    }
    subStrPos(string1);
}

/*Write a function that takes an object with two 
properties as argument. It should return the value 
of the property with key country.*/

{
    let countryObj = {country: "Nepal",continent:"Asia"};//the order of property makes no diff.
    //using "" on country or not is not making a diff.
    returnCountry = (obj) =>{
        return obj["country"];//using square brackets property accessor, we need to use "" else it won't work
        //return obj.country; this works as well
        //return obj["country","continent"]; using this shows continent only
    }
    console.log(returnCountry(countryObj));//a = returnCountry(countryObj);
    // console.log(a); output was the same
}

/*Write a function that takes an object with two properties and a string as arguments.
It should return the value of the property with key equal to the value of the string*/

{
    let continentObj = {country:'Nepal', continent : 'Asia'};
    let key = "continent";
    returnContinent = (cObj,k) =>{
        return cObj[k];//when we want to use property of an object through a variable, we should use []
    }
    a= returnContinent(continentObj, key);
    console.log(a);
}

//return the string's last word's length, without using trim
{
    const string1 = "My nam  e is mandib  ";
    let lastWord = (str1)=>{
        const b = str1.split(" ");//never forget to use space btw "" for split, else it will give array with 'm','y'...so on
        c = b.filter((e)=>{//filtering here is better than trim as trim takes the initial and final spaces in factor
            if(e.length!==0)
                return e;
        }).pop().length;
        console.log(c);
    }
    lastWord(string1);
}
{
    const string1 = "dvdf";
    function lengthOfLongestSubstring(s) {
        const map = {}; // Map to store the index of the last occurrence of each character
        let left = 0; // Left boundary of the current substring
        
        let maxLength = 0; // Length of the longest substring without repeating characters
        
        for (let i = 0; i < s.length; i++) {
            const currentChar = s[i];
            // Update the left boundary to be the maximum of current position of the character in the map + 1 or the current left value
            left = Math.max(left, map[currentChar] + 1 || 0);
            // Update the map with the current character's position
            map[currentChar] = i;
            // Update the maxLength to be the maximum of current maxLength and the length of the current substring
            maxLength = Math.max(maxLength, i - left + 1);
        }
        
        return maxLength;
    }
    
    console.log(lengthOfLongestSubstring(string1)); // Output: 3

}