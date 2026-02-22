// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.


var taka = parseInt("1000");

var costOfOranges = parseInt("350");

var costOfApples = parseInt("350");

var totalCost = costOfOranges + costOfApples;

var change = taka - totalCost;

console.log(change);