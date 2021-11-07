/* Free pizza
In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice.

However, the rewards system may change in the future. Your manager wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers who are eligible for a reward.

Customers in the dictionary are represented as:

{ 'customerName' : [list_of_order_values_as_integers] }
See example test case for more details.
*/

function pizzaRewards(customers, minOrders, minPrice) {
	let arr = [];
	for (let i in customers) {
		if (customers[i].filter((customer) => customer >= minPrice).length >= minOrders) arr.push(i);
	}
	return arr;
}

var minOrders = 5;
var minPrice = 20;
var customers = {
	'John Doe': [ 22, 30, 11, 17, 15, 52, 27, 12 ], // Only has three orders above 20$, so no pizza
	'Jane Doe': [ 5, 17, 30, 33, 40, 22, 26, 10, 11, 45 ] // Has six orders above 20$, which means FREE PIZZA!
};
console.log(pizzaRewards(customers, minOrders, minPrice));

var minOrders = 2;
var minPrice = 50;
var customers = {
	'Joey Bonzo': [ 22, 67, 53, 29 ], // Has two orders above 50$, which means FREE PIZZA!
	'Jennifer Bonzo': [ 51, 19 ] // Only has one order above 50$, so no pizza
};

console.log(pizzaRewards(customers, minOrders, minPrice));

/* Other Solutions
----------------------------------
pizzaRewards = (customers, minOrders, minPrice) =>
  Object.keys(customers).filter(e=> customers[e].filter(o=> o >= minPrice).length >= minOrders); 
----------------------------------
function pizzaRewards(o, l, p) {
  return Object.keys(o).map(x=>o[x].filter(x=>x>=p).length>=l?x:false).filter(x=>x)
}
----------------------------------
function pizzaRewards(customers, minOrders, minPrice) {
    var customerList = new Array();
  
    for(var key in customers) {
      const customerOrders = customers[key];
      var list = customerOrders.filter(v => {
        if(v < minPrice) return;
        return v;
      });
      
      if(list.length >= minOrders) {
        customerList = customerList.concat(key);
      }
    }
    
    return customerList;
}
----------------------------------
const pizzaRewards = (customers, minOrders, minPrice) => 
    Object.keys(customers)
            .filter(name => customers[name]
              .filter(x => x >= minPrice).length >= minOrders);
----------------------------------
function pizzaRewards(customers, minOrders, minPrice) {
  return Object.keys(customers).filter(function(customer){
    return customers[customer].filter(function(order){
      return order >= minPrice ? order : 0;
    }).length >= minOrders  ? customer : 0;
  });
}
----------------------------------
pizzaRewards=(a,b,c)=>Object.entries(a).filter(([,a])=>a.filter(a=>a>=c).length>=b).map(a=>a[0])
----------------------------------
function pizzaRewards(customers, minOrders, minPrice) {
  const qualifies = c => customers[c].filter(o => o >= minPrice).length >= minOrders;
    
  return Object.keys(customers).filter(qualifies);  
}
----------------------------------
*/
