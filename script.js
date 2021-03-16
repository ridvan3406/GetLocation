"use strict";
/*
  Write an asynchronous function that accepts 1 parameter
    - A city name

  this function should use fetch to retrieve the city data from the geocode.xyz API, which uses a URL formatted as follows.
    https://geocode.xyz/seattle?json=1

*/

let getBtn = document.querySelector(".btn-primary")
let input = document.getElementById("citySearch")
let coordinates = document.querySelector(".coordinates")
