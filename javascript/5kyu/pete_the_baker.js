/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths.
 Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
 and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/

function cakes(recipe, available) {
	let numberCakes = 0;

	for (let ingredient in recipe) {
		//if there are all ingredients, keep doing
		if (available[ingredient]) {
			//1200/500 = 2 | Math.floor return integer
			const possibleCakes = Math.floor(available[ingredient] / recipe[ingredient] || 0);
			if (numberCakes === 0 || possibleCakes < numberCakes) {
				numberCakes = possibleCakes;
			}
			//else return 0 cos we are missing ingredients
		} else {
			return 0;
		}
	}
	return numberCakes;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
let recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available2 = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe, available));
console.log(cakes(recipe2, available2));

// Other results
/* #1
function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}
*/
/*
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
*/
/*
 function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
} 
*/
