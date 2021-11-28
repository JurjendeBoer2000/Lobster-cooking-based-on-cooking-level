let cookingLevel = 10;

// The chance of succesfully cooking the lobster starts at 50% and is incremented with 0.5% for each cooking level.
let randomSuccess = () => {
 let num = Math.random();
 if (num < .5 + (cookingLevel * 0.005)){
   return true;
 } else {
   return false;
 }
};

// This function returns a promise that resolves or rejects based on the chance of the randomSuccess() function.
let cookLobster = () => {
 return new Promise((resolve, reject) => {
   console.log('You attempt to cook the lobster...');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('You cooked the lobster.');
     } else {
       reject('You burnt the lobster.');
     }
   }, 1000);
 });
};

module.exports = cookLobster;