var isHotOutside = true;
var isWeekday = false;
var hasMoneyInPocket = false;

var costOfMilk = 3;
var moneyInWallet = 10;
var thirstLevel = 4;

var shouldBuyIcecream = (isHotOutside && hasMoneyInPocket);
var willGoSwimming = (isHotOutside && isWeekday);
var isAgoodDay = (isHotOutside && hasMoneyInPocket && isWeekday);
var willBuyMilk = (isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk);

console.log(shouldBuyIcecream);
console.log(willGoSwimming);
console.log(isAgoodDay);
console.log(willBuyMilk);