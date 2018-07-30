var userNum = parseInt(prompt("Enter your grade number"));

if (userNum < 101 && userNum > 89)
{
    alert("You have an A!")
}

else if (userNum > 79 && userNum < 90)
{
    alert("You have a B!")
}

else if (userNum > 69 && userNum < 80)
{
    alert("You have a C")
}

else if (userNum > 59 && userNum < 70)

{
    alert("You have a D")
}

else if (userNum < 60)
{
    alert("YOU GOTTA F")
}

else {
    alert("Enter again")
}