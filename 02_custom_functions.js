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
