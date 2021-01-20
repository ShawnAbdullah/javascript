//friends array
let friends = ["chevy", "angelica", "ethan", "jose", "prim"];
console.log(friends);

for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
let friend = friends[i];
console.log(friend);
for(let j = 99; j > 0; j--)
if(j > 2) {
    console.log(j + " lines of code in the file, " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
 } else if(j == 2) {
    console.log(j + " lines of code in the file " + j + " lines of code; " + friend + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
} else if(j == 1) {
    console.log(j + " line of code in the file " + j + " line of code " + friend + " strikes one out, clears it all out, no more lines of code in the file (operation complete)");
}
}
