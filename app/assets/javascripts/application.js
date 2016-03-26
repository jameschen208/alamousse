// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
// MATERIALIZE JS
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
    $('.slider').slider({indicators: false});
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $(".button-collapse").sideNav();

// SMOOTH SCROLL
$(".brand-logo").click(function() {
  $('html,body').animate({
      scrollTop: target.offset().top},
       'slow');
  });
  $(".about-nav").click(function() {
      $('html,body').animate({
          scrollTop: $("#about").offset().top},
          'slow');
  });

  $(".menu-nav").click(function() {
      $('html,body').animate({
          scrollTop: $("#menu").offset().top},
          'slow');
  });

  $(".contact-nav").click(function() {
      $('html,body').animate({
          scrollTop: $("#contact").offset().top},
          'slow');
  });
});
