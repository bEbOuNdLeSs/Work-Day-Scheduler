// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

//Hour Varaibles
var nineAM = $("#9am");
var tenAM = $("#10am");
var elevenAM = $("#11am");
var twelvePM = $("#12pm");
var onePM = $("#13pm");
var twoPM = $("#14pm");
var threePM = $("#15pm");
var fourPM = $("#16pm");
var fivePM = $("#17pm");
var sixPM = $("#18pm");
var sevenPM = $("#19pm");
var eightPM = $("#20pm");
var ninePM = $("#21pm");
var tenPM = $("#22pm");
var elevenPM = $("#23pm");
var twelveAM = $("#24am");

var hour = moment().hours();
var userInput;
var hourSpan;

//Displaying the date and time 
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                    + momentNow.format('dddd')
                    .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {
    console.log("Current Hour " + hour);

    var init9 = JSON.parse(localStorage.getItem("09:00 AM"));
    nineAM.val(init9);
  
    var init10 = JSON.parse(localStorage.getItem("10:00 AM"))
    tenAM.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00 AM"))
    elevenAM.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00 PM"))
    twelvePM.val(init12);
    
    var init1 = JSON.parse(localStorage.getItem("01:00 PM"))
    onePM.val(init1);
    
    var init2 = JSON.parse(localStorage.getItem("02:00 PM"))
    twoPM.val(init2);
    
    var init3 = JSON.parse(localStorage.getItem("03:00 PM"))
    threePM.val(init3);
   
    var init4 = JSON.parse(localStorage.getItem("04:00 PM"))
    fourPM.val(init4);
    
    var init5 = JSON.parse(localStorage.getItem("05:00 PM"))
    fivePM.val(init5);
    
    var init6 = JSON.parse(localStorage.getItem("06:00 PM"))
    sixPM.val(init6);
    
    var init7 = JSON.parse(localStorage.getItem("07:00 PM"))
    sevenPM.val(init7);

    var init8 = JSON.parse(localStorage.getItem("08:00 PM"))
    eightPM.val(init8);

    var init9 = JSON.parse(localStorage.getItem("09:00 PM"))
    ninePM.val(init9);

    var init10 = JSON.parse(localStorage.getItem("10:00 PM"))
    tenPM.val(init10);

    var init11 = JSON.parse(localStorage.getItem("11:00 PM"))
    elevenPM.val(init11);

    var init12A = JSON.parse(localStorage.getItem("12:00 AM"))
    twelveAM.val(init12A);
} 

function background () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        console.log(timeTest);
        console.log(hour);

        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
    }
    });
}

$(document).ready(function(){
    initPage()
    background()
  
    // Save to local storage
    $(".saveBtn").on("click", function(){
      userInput = $(this).siblings(".form-control").val().trim();
      console.log(userInput);
      hourSpan = $(this).siblings(".input-group-prepend").text().trim();
      console.log(hourSpan);
      localStorage.setItem(hourSpan, JSON.stringify(userInput));
  
    })
    // Reeset day button
    $("#resetBtn").on("click", function(){
      localStorage.clear();
      initPage()
    }) 
  
  });