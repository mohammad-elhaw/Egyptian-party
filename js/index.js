/// <reference types="../@types/jquery"/>

let element = $(".left-menu");
$(".close-btn").on("click", ()=>{
    element.css("cssText", `width : 0;transition: all 1s`);
});

$(".openNav").on("click", ()=>{
    
    if(element.width() != 0)
        element.css("cssText", `width : 0;transition: all 1s`);
    else
        element.css("cssText", `width: 250px; transition: all 1s`);
});



$(window).on("scroll", ()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll > 1) $(".openNav").hide(200);
    else $(".openNav").show(200);
});

$(function(){
    let pos = $(".openNav").offset().top;
    if(!pos == 332 || !pos == 340.5) $(".openNav").css("display", "none");
});



$("a[href^= '#']").on("click", function(e){
    e.preventDefault();
    let secId = $(e.target).attr("href");
    let secOff = $(secId).offset().top;
    $("html, body").animate({scrollTop : secOff}, 1000);
});



// singers

$("#singers h2").on("click", (e)=>{
    $("#singers p").not($(e.target).next()).slideUp(500);
    $(e.target).next().slideToggle(500);
});


// counter

$(function(){
    countDown("20 october 2025 9:59:00");
});


function countDown(eventDate){
    let futureDate = new Date(eventDate).getTime()/1000;

    let now = new Date().getTime()/1000;

    let diff = futureDate - now;
    let days = Math.floor(diff / (24*60*60));
    let hours = Math.floor((diff - days*24*60*60)/ 3600);
    let minutes = Math.floor((diff-days*24*60*60-hours *3600)/60);
    let seconds = Math.floor(diff-days*24*60*60-hours*3600-minutes*60);

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} H`);
    $(".minutes").html(`${minutes} M`);
    $(".seconds").html(`${seconds} S`);

    setInterval(()=>countDown(eventDate), 1000);
}


// contact


$("textarea").on("keyup",function(){
    let length = $(this).val().length;
    let amountLength = 100 - length;
    $(".chars").text(amountLength);
});