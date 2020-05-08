jQuery(document).ready(function() {
  // Slaider
  $(".whatWeDo__slider, .work__slider").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
  });
  $("input:checkbox")
    .not(this)
    .prop("checked", this.checked);

  // Modal
  $(".header__hamburger").click(function() {
    $(".header__nav_min")
      .fadeOut()
      .toggle();
  });
  $(document).click(function(event) {
    if (
      $(event.target).closest(".header__nav_min").length ||
      $(event.target).closest(".header__hamburger").length
    )
      return;
    $(".header__nav_min").fadeOut();
    event.stopPropagation();
  });

  // Filter
  let btns = $(".tabs__btn");
  btns.on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    let cards = $(".tabs__card");
    cards.removeClass("active");
    let btnText = $(this)
      .text()
      .toLowerCase();
    let final = cards.filter(function() {
      if (btnText === "all") {
        return cards;
      } else {
        return $(this).data("category") === btnText;
      }
    });
    final.each(function() {
      if (btnText === "all") {
        $(this).addClass("active");
      } else {
        $(this)
          .addClass("active")
          .removeClass("vis");
        console.log(btnText);
      }
    });

    // final.each(function() {
    //   $(this)
    //     .addClass("active")
    //     .removeClass("vis");
    // });
  });

  let more = $(".filter__more_files");
  more.on("click", function() {
    let cards = $(".tabs__card");
    cards
      .addClass("active")
      .removeClass("vis")
      .toggleClass("vis");
  });

  // Accodreon
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
});
