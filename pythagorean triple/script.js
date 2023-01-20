"use strict";
function calc()
{
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  var d = document.getElementById("answer");

  if ((a*a)+(b*b) == (c*c))
  {
      d.style.color = 'green'
      d.innerHTML = "Yes!"
  }
  else if (a > 0 & b > 0 & c > 0)
  {
      d.style.color = 'red'
      d.innerHTML = "No!"
  }
  else
  {
      alert("Error");
  }
}