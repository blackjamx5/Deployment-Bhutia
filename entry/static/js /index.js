/*

var engToBhut = document.getElementById("engToBhut");
var bhutToEng = document.getElementById("bhutToEng");
var tibToBhut = document.getElementById("tibToBhut");

engToBhut.onclick =  function() {
  document.myform.setAttribute("action", "/entry/english_bhutia/");
  console.log("1");
}
bhutToEng.onclick =  function() {
  document.myform.setAttribute("action", "/entry/bhutia_english/");
  console.log("2");
}
tibToBhut.onclick =  function() {
    document.myform.setAttribute("action", "/entry/tibetan_bhutia/");
  console.log("3");
}
*/

document.addEventListener('DOMContentLoaded',function() {
    document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
},false);

function changeEventHandler(event) {
    // You can use “this” to refer to the selected element.
    if(!event.target.value) alert('Please Select One');
    else alert('You like ' + event.target.value + ' ice cream.');
}
