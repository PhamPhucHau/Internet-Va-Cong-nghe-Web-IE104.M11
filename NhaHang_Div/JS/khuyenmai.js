function myFunction() {
  var copyText = document.getElementById("myInput");
  //copyText.select();
  //copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.innerText);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.innerText;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}// JavaScript Document
var object={
	luu:document.getElementById("myTooltip")}
object.luu.onclick=function(){myFunction()}
object.luu.onmouseout=function(){outFunc()}
	