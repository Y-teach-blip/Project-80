function getParagraph1()
{
    var inputs = [];
    for(var i = 1 ; i <= 6 ; i++)
    {
        inputs.push(document.getElementById("paragraph_1_input_" + i).value);
    }
document.getElementById("showPara1").innerHTML = inputs.join(". ");
}

function getParagraph2()
{
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("paragraph_2_input_" + i).value);
    }
document.getElementById("showPara2").innerHTML = inputs.join(". ");
}
