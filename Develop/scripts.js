
var currentDateEl = document.getElementById("currentDay");

currentDateEl.innerHTML = moment().format('MMMM Do YYYY')

    $(".saveBtn.9").on("click", function() {
        console.log(textNine.value);
        localStorage.setItem("nine", textNine.value)
    });
    
    $(".saveBtn.10").on("click", function() {
        console.log(textTen.value);
        localStorage.setItem("ten", textTen.value)
    });
    $(".saveBtn.11").on("click", function() {
        console.log(textEleven.value);
        localStorage.setItem("eleven", textEleven.value)
    });
    $(".saveBtn.12").on("click", function() {
        console.log(textTwelve.value);
        localStorage.setItem("twelve", textTwelve.value)
    });
    $(".saveBtn.1").on("click", function() {
        console.log(textOne.value);
        localStorage.setItem("one", textOne.value)
    });
    $(".saveBtn.2").on("click", function() {
        console.log(textTwo.value);
        localStorage.setItem("two", textTwo.value)
    });
    $(".saveBtn.3").on("click", function() {
        console.log(textThree.value);
        localStorage.setItem("three", textThree.value)
    });
    $(".saveBtn.4").on("click", function() {
        console.log(textFour.value);
        localStorage.setItem("four", textFour.value)
    });
    $(".saveBtn.5").on("click", function() {
        console.log(textFive.value);
        localStorage.setItem("five", textFive.value)
    });


    var textNine = document.getElementById("9");
    var textTen = document.getElementById("10");
    var textEleven = document.getElementById("11");
    var textTwelve = document.getElementById("12");
    var textOne = document.getElementById("1");
    var textTwo = document.getElementById("2");
    var textThree = document.getElementById("3");
    var textFour = document.getElementById("4");
    var textFive = document.getElementById("5");

var loadData = function() {
    textNine.value = localStorage.getItem("nine")
    textTen.value = localStorage.getItem("ten")
    textEleven.value = localStorage.getItem("eleven")
    textTwelve.value = localStorage.getItem("twelve")
    textOne.value = localStorage.getItem("one")
    textTwo.value = localStorage.getItem("two")
    textThree.value = localStorage.getItem("three")
    textFour.value = localStorage.getItem("four")
    textFive.value = localStorage.getItem("five")
}

loadData();