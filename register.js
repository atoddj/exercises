const currencyValues = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};

const checkCashRegister = ([price, cash, cid]) => {
  let due = (cash - price)*100; 
  let output = {status: null, change: []};
  let change = {}; //object holding key/value pairs of currency to give back to customer
  
  //convert change-in-drawer to object with total
  //multiplies amounts by 100 and rounds to nearest whole value to avoid strange float values
  var register = cid.reduce((acc, curr) => {
      acc.total += Math.round(curr[1]*100);
      acc[curr[0]] = Math.round(curr[1]*100);
      return acc;
    },
    { total: 0 }
  );
  
  //FUNCTION: convert change object to 2d array to provide expected output
  var flattenChange = (change) => {
    let arr = new Array();
    for(const property in change) {
      arr.unshift([property, change[property]/100]);
    }
    return arr;
  }

  //determine when to close register (cash in drawer is equal to cash due back to customer)
  if (register.total === due) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  
  //close register if change due back is greater than the amount in cash register
  if (due > register.total) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
    return output;
  }

  while (due>0) {
    let currency;
    for (const currencyName in currencyValues) {
      if(due % currencyValues[currencyName] === 0 && register[currencyName]) {
        currency = currencyName; //determine largest available currency for change
      }
    }

    //undefined currency means change cannot be made with the cash in drawer
    if(currency === undefined) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
      return output;
    }

    change[currency] = change[currency] || 0; //default value for specific denomination
    change[currency] += currencyValues[currency]; //add value to key in change-back object 
    register[currency] -= currencyValues[currency]; //remove currency from cash-in-drawer(register)
    due -= currencyValues[currency]; //subtract change from the total amount due
  }

  output.status = "OPEN";
  change = flattenChange(change);
  output.change = change;
  return output;
}



//tests
// checkCashRegister([19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]], {status: "OPEN", change: [["QUARTER", 0.5]]});

// checkCashRegister([3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]], {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});

// checkCashRegister([19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "INSUFFICIENT_FUNDS", change: []});

// checkCashRegister([19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "INSUFFICIENT_FUNDS", change: []});

// checkCashRegister([19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]], {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});