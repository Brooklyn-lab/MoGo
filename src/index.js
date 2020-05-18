jQuery(document).ready(function() {
  // Body --- overflow: hidden (active hamburger);
  $(".menu__btn").click(function() {
    $("body").toggleClass("lock");
  });

  // --------- Slaider -----------
  $(".whatWeDo__slider, .work__slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
  });
  $("input:checkbox")
    .not(this)
    .prop("checked", this.checked);

  // ---------- Accodreon --------------
  $(".accordion__item").click(function() {
    $(this)
      .toggleClass("in")
      .next()
      .slideToggle();
    $(".accordion__item")
      .not(this)
      .removeClass("in")
      .next()
      .slideUp();
  });

  //-----------------------map------------------------
  $(".map").click(function() {
    $(".map__logo").addClass("invis"), $("#close, .map__items").addClass("vis");
  });

  $("#close").click(function() {
    $(".map__items, #close").removeClass("vis"),
      $(".map__logo").removeClass("invis");
  });

  //-------------footer-instagram------------------------
  let viweMore = $(".footer__viewMore");
  viweMore.on("click", function() {
    let instLogo = $(".footer__inst__logo");
    instLogo.toggleClass("active");
  });

  //-------------footer-date------------------------
  let date = new Date().getFullYear();
  $("#date").text(new Date().getFullYear());

  //----------------btn-up-------------------------
  let btn = $(".footer__btn");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "1000");
  });
});
