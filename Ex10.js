var card1 = parseInt(prompt("Input a num"));
var card2 = parseInt(prompt("Input a 2nd num"));
var card3 = parseInt(prompt("Input a 3rd num"));

if ( (card1 + card2 + card3) > 21)
{
    alert(" Bust");
}
else
{
    alert( "The sum is " + (card1 + card2 + card3));
}