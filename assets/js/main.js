/******************************************/
/*    Q29uw6d1IHBhciBBbHpoZSMwMTIyLg==    */
/*                                        */
/*         Conçu par Alzhe#0122.          */
/******************************************/
/* Send Console Logs */
for(let i=0;i<4;i++){console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%cATTENDS ! 🤓","color: #5865f2; font-size: xxx-large");console.log("%cNe rentre aucun code ici, il y a environ 100% de chance qu'il ne soit pas politiquement correct.","color: #5865f2; font-size: medium");console.log("%c","color: #5865f2; font-size: medium");console.log("%cTu veux m'aider à travailler mon site Internet ? À en faire un CMS ?","color: #5865f2; font-size: medium");console.log("%cJe cherche à monter un hébergeur Web, Minecraft, Garry's Mod et NodeJS/Python. ","color: #5865f2; font-size: medium");console.log("%cTu veux m'aider ? Je ne suis pas en capacité de déverser des smics pour toi, mais","color: #5865f2; font-size: medium");console.log("%cje te promet que ton travail sera largement récompensé en temps voulu.","color: #5865f2; font-size: medium");console.log("%c","color: #5865f2; font-size: medium");console.log("%cRejoint-nous : https://discord.gg/alzhe - kyllian@alzhe.me ✨","color: #5865f2; font-size: medium");console.log("%c ","color: #5865f2; font-size: xxx-large");console.log("%cQ29uw6d1IHBhciBBbHpoZSMwMTIyLg== | Conçu par Alzhe#0122.","color: #8a0000; font-size: medium")}/* Block some content stealing */
document.addEventListener("contextmenu",e=>e.preventDefault());document.onkeydown=function(e){if(e.ctrlKey&&e.shiftKey&&e.keyCode=="I".charCodeAt(0)){alert("Je ne pense pas que ce soit possible. 🔐");return false}else if(e.keyCode==123||e.ctrlKey&&e.shiftKey&&e.keyCode=="J".charCodeAt(0)){alert("Cette porte là aussi est fermée. 🤓");return false}else if(e.ctrlKey&&e.keyCode=="U".charCodeAt(0)){alert("Je me sens soudainement espionné. 🕵️");return false}else if(e.ctrlKey&&e.keyCode=="S".charCodeAt(0)){alert("Ce n'est pas à vous de décider. 🤗");return false}};
// if(window.location.host !== 'www.alzhe.host') window.location.replace('https://www.alzhe.host');
"use strict";
$(".main-slider").slick({
    infinite: !0,
    speed: 1e3,
    autoplay: !1,
    autoplaySpeed: 4e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !0,
    arrows: !1,
    fade: !0
}), $(window).on("load", function() {
    var t = $("#d-toggle"),
        e = $(".pricing-price .duration", ".pricing-box");
    t.on("click", function() {
        if ($(".fd", this).toggleClass("active"), $(".button", this).toggleClass("on"), $(".sd", this).toggleClass("active"), e.hasClass("annouly")) {
            e.text("/mois");
            for (var t = 0; t <= 2; t++) $(".pricing-box:eq(" + t + ") .num").text(parseFloat(Number($(".pricing-box:eq(" + t + ") .num").text()) / 12).toFixed(2))
        } else {
            e.text("/an");
            for (var t = 0; t <= 2; t++) $(".pricing-box:eq(" + t + ") .num").text(parseFloat(12 * Number($(".pricing-box:eq(" + t + ") .num").text())).toFixed(2))
        }
        e.toggleClass("annouly")
    }), $("a[href*=\\#]").on("click", function(t) {
        t.preventDefault();
        var e = 0;
        "#" != $(this).attr("href") && (e = $(this.hash).offset().top), $("html,body").animate({
            scrollTop: e
        }, 500)
    });
    var o = $(".photo-holder.photo1", ".text-photo-sc"),
        i = $(".text-holder.text1", ".text-photo-sc"),
        s = $(".photo-holder.photo2", ".text-photo-sc"),
        h = $(".text-holder.text2", ".text-photo-sc");
    $(window).width() > 990 && (o.css("height", i.height()), s.css("height", h.height())), $(window).on("resize", function() {
        return $(window).width() > 990 && (o.css("height", i.height()), s.css("height", h.height())), !1
    })
});
/* Tawk.io */
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64761c8ead80445890f001be/1h1mlv3e7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
/* Protect */
function clicDroit() {
    alert('Copyright © www.alzhe.host 2021-2023');
    return (false);
}
document.oncontextmenu = clicDroit;