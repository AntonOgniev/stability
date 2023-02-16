const vh = window.innerHeight; 
$(function () {
   $(window).scroll(function () {
    if ($(this).scrollTop() > vh) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, window);
  });
});
