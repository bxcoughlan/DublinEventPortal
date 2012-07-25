var no1=2;
var no2=1;
var no3=1;
var Temp;


function swapAdvert()

{

Temp=no3; no3=no2; no2=no1; no1=Temp;

document.getElementById('img1').style.zIndex = no1;
document.getElementById('img2').style.zIndex = no2;
document.getElementById('img3').style.zIndex = no3;
setTimeout("swapAdvert()",2000);

}

