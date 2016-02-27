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
  $('.helloWorld').click(function() {
    $.featherlight({iframe: 'https://www.youtube.com/embed/VG9n_hZ9BJQ?rel=0', iframeMaxWidth: '80%', iframeWidth: 500,
    iframeHeight: 300, allowfullscreen: 'allowfullscreen'})
  })


})
