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

  //-------------footer-instagram------------------------
  let viweMore = $(".footer__viewMore");
  viweMore.on("click", function() {
    let instLogo = $(".footer__inst__logo");
    instLogo.toggleClass("active");
  });

  //-------------footer-date------------------------
  let date = new Date().getFullYear();
  $("#date").text(new Date().getFullYear());
});
