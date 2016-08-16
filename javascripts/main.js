"use strict";
document.addEventListener("DOMContentLoaded", function(){

  var requestData = new XMLHttpRequest();
  var formElement = document.querySelector("[data-js='form--container']");
  var formFooterElement = document.querySelector("[data-js='form--footer']");


  requestData.addEventListener("load", function(e){
    var data = JSON.parse(e.target.response);
    var formHTML = "";

    data.forEach(function(input){
      var inputHTML = "";
        if(input.type === "select"){
          inputHTML += "<select class='form--select'>";
            input.options.forEach(function(option){
              inputHTML += `<option value='${option.value}'>${option.label}</option>`;
            });
          inputHTML += "</select>";
        }else if(input.type === "textarea"){
          inputHTML += `<textarea class="form--textarea">${input.label}</textarea>`;
        }else{
          inputHTML = `<input type="${input.type}"
                              id="${input.id}"
                              placeholder="${input.label}">`;
        };

        formHTML += inputHTML;
      });
    formElement.innerHTML = formHTML;
    console.log(data);
  });










  requestData.open("GET", "http://json-data.herokuapp.com/forms");
  requestData.send(null);

});
