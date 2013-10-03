var dollarCalc = function(amount) {
    var hundred = 0;
    var fifty = 0;
    var twenty = 0;
    var ten = 0;
    var five = 0;
    var one = 0;
    var quater = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;
    
    if (amount > 0 && typeof(amount) === "number") {
        while ((amount / 100) >= 1) {
            amount -= 100;
            hundred++;
        }
        while ((amount / 50) >= 1) {
            amount -= 50;
            fifty++;
        }
          while ((amount / 20) >= 1) {
            amount -= 20;
            twenty++;
        }
          while ((amount / 10) >= 1) {
            amount -= 10;
            ten++;
        }
          while ((amount / 5) >= 1) {
            amount -= 5;
            five++;
        }
          while ((amount / 1) >= 1) {
            amount -= 1;
            one++;
        }
          while ((amount / 0.25) >= 1) {
            amount -= 0.25;
            quater++;
        }
          while ((amount / 0.10) >= 1) {
            amount -= 0.10;
            dime++;
        }
          while ((amount / 0.05) >= 1) {
            amount -= 0.05;
            nickel++;
        }
          while ((amount / 0.01) >= 1) {
            amount -= 0.01;
            penny++;
        }
    }
        
        return ("Hundreds: " + hundred + " Fifties: " + fifty + " Twentys: " + twenty + " Tens: " + ten + " Fives: " + five + " Ones: " + one + " Quarters: " + quater + " Dimes: " + dime + " Nickels: " + nickel + " Pennies: " + penny);
    
};
   
document.write(dollarCalc(288.97));
