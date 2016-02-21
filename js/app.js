$(function() {
  $('.handle').on('click', function() {
    $('nav ul').toggleClass('showing');
  })
  $('li').on('click', function() {
    $('section').removeClass('showMainContent');
    var sectionToShow = $(this).attr('class');
    var sectionToShow = sectionToShow.replace('--call','');
    $('.'+sectionToShow).addClass('showMainContent');
    $('nav ul').toggleClass('showing');
  })
})
