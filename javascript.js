var chamber = 6;
document.onclick = function(){
  if ((chamber == 0) || (Math.random()*100<(100/chamber))) {
    chamber = 6;
    document.head.style.display='block';
    document.documentElement.style.background='white';
  } else {
    document.head.style.display='none';
    document.documentElement.style.background='black';
  }
  document.body.style.cssText='-webkit-transform:rotate('+chamber*60+'deg);-moz-transform:rotate('+chamber*60+'deg);transform:rotate('+chamber*60+'deg)';
  chamber--;
}
document.onkeydown = function(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "number")?e.which:e.keyCode;
  if (charCode == 32) {
    document.dispatchEvent(new MouseEvent('click'))
  }
}