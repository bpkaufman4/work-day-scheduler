
var currentDateEl = document.getElementById("currentDay");

currentDateEl.innerHTML = moment().format('MMMM Do YYYY');
currentTime = moment().format('h');

console.log(currentTime);

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

var pastBack = function(time) {
    time.classList.remove("future");
    time.classList.remove("present");
    time.classList.add("past")
};

var presBack = function(time) {
    time.classList.remove("future");
    time.classList.remove("past");
    time.classList.add("present");
};

var futBack = function(time) {
    time.classList.remove("past");
    time.classList.remove("present");
    time.classList.add("future");
};


    if (currentTime === "5") {
    presBack(textFive);
    pastBack(textFour);
    pastBack(textThree);
    pastBack(textTwo);
    pastBack(textOne);
    pastBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "4") {
    futBack(textFive);
    presBack(textFour);
    pastBack(textThree);
    pastBack(textTwo);
    pastBack(textOne);
    pastBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "3") {
    futBack(textFive);
    futBack(textFour);
    presBack(textThree);
    pastBack(textTwo);
    pastBack(textOne);
    pastBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "2") {
    futBack(textFive);
    futBack(textFour);
    futBack(textThree);
    presBack(textTwo);
    pastBack(textOne);
    pastBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "1") {
    futBack(textFive);
    futBack(textFour);
    futBack(textThree);
    futBack(textTwo);
    presBack(textOne);
    pastBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "12") {
    futBack(textFive);
    futBack(textFour);
    futBack(textThree);
    futBack(textTwo);
    futBack(textOne);
    presBack(textTwelve);
    pastBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "11") {
    futBack(textFive);
    futBack(textFour);
    futBack(textThree);
    futBack(textTwo);
    futBack(textOne);
    futBack(textTwelve);
    presBack(textEleven);
    pastBack(textTen);
    pastBack(textNine);
} else if (currentTime === "10") {
    futBack(textFive);
    futBack(textFour);
    futBack(textThree);
    futBack(textTwo);
    futBack(textOne);
    futBack(textTwelve);
    futBack(textEleven);
    presBack(textTen);
    pastBack(textNine);
} else if (currentTime === "9") {
    presBack(textFive);
    futBack(textFour);
    futBack(textThree);
    futBack(textTwo);
    futBack(textOne);
    futBack(textTwelve);
    futBack(textEleven);
    futBack(textTen);
    presBack(textNine);
}