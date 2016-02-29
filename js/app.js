$(function() {
  $('.handle').on('click', function() {
    $('nav ul').toggleClass('showing');
  })
  $('li').on('click', function() {
    $('section').removeClass('showMainContent');
    var sectionToShow = $(this).attr('class');
    var sectionToShow = sectionToShow.replace('--call', '');
    $('.' + sectionToShow).addClass('showMainContent');
    $('nav ul').toggleClass('showing');
  })
  $('.displayContent').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    var video = $(this).attr('data-url');
    if (video.substring(0, 4) === 'http') {
      $(".videowrap").fadeIn(400);
      $("#video").attr("src", video);
    } else {
      $(".imagewrap").fadeIn(400);
      $('.lowRentBox').attr('src', video).fadeIn(400);
    }
  })
  $(".closebox, .videowrap, .imagewrap").click(function() {
    $(".videowrap, .imagewrap").fadeOut(400);
    $("#video").attr("src", "");
  });
  $(document).keydown(function(event) {
    if (event.which == 27) {
      $(".videowrap, .imagewrap").fadeOut(400);
      $("#video").attr("src", "");
    }
  });
})
