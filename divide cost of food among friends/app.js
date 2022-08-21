//normal web app to divide khane ka kharcha between frnds
var foodcost= prompt("what is the total amount?");
var friedns=prompt("total number of friends in which you have to divide the amount?");
document.write("the total cost of food was ", foodcost, "<br>");
document.write("each have to pay: " , (foodcost/friedns).toFixed(2));
