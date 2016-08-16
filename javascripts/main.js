"use strict";
document.addEventListener("DOMContentLoaded", function(){

  var requestData = new XMLHttpRequest();
  var formElement = document.querySelector("[data-js='form--container']");
  document.querySelector("[data-js='form--footer']");
  requestData.addEventListener("load", function(e){
    var data = JSON.parse(e.target.response);
    console.log(requestData);
  });








  requestData.open("GET", "http://json-data.herokuapp.com/forms");
  requestData.send(null);

});
