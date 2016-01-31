var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");
console.log("reindeer", reindeer );


for (var i = 0; i < reindeer.length; i++) {
    hohohoElement.innerHTML += "<div>" + colors[i] + " "+ reindeer[i] + "</div>";
}

// for (var i = 0; i < reindeer.length; i++) {
//   hohohoElement.innerHTML = "<div>" + colors[i] + " "+ reindeer[i] + "</div>";
// }

// hohohoElement.innerHTML = hohohoElement.innerHTML + "<div>" + colors[i] + " "+ reindeer[i] + "</div>";


// Joe's advice is that think of the counter as completely divorced from the 
// "thing" that you're doing with your code which is in this case on line 10.
// 
// That helps enormously. The for loop here in English says the following: 
// 
// "var i = 0;"  <-- "start at zero, keeping in mind that this can mean index # 0
// or 0 of the numeral 0, 1, 3... 
// 
// i < reindeer.length; <-- "as long as i is less than the length of the INDEX 
// number of the array referenced, keep running
// 
// i++ <-- "index number increment by 1"
// 
// then you decide what you want to do everytime you run the loop. 
// 
// so line 10 means that you want to take hohohoElement.innerHTML (which grabs the id in the html)
// and then adds the latest iteration of that line, and the next time through the loop, again, and the next
// time through the loop, again. until length of reindeer index. 
// 
// 
// 
// 
// 
// 