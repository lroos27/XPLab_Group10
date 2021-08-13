// Here, you can define all custom functions, you want to use and initialize some variables

// variable to get a random condition
const coin = _.sample(["teammate","opponent"]);

// function for getting and storing the other coin/condition
const get_other_coin = function(coin){
    if(coin == "teammate"){
        return "opponent"
    }
    else{
        return "teammate"
    }
}

/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
