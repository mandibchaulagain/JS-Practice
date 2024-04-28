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
