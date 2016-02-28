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
    $("html, body").animate({ scrollTop: 0 }, "slow");
    var video = $(this).attr('data-url');
    console.log(video);
    $(".videowrap").fadeIn(400);
    $("#video").attr("src",video);
  })
  //click X
  $(".closebox, .videowrap").click(function(){
    $(".videowrap").fadeOut(400);
    $("#video").attr("src","");
  });
  //esc keydown
  $(document).keydown(function(event){
    if(event.which == 27){
      $(".videowrap").fadeOut(400);
      $("#video").attr("src","");
    }
  });
})
