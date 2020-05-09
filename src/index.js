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
    cards.addClass("active").removeClass("vis");
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

// jQuery(document).ready(function($) {
//   // инициализация массива со всеми категориями
//   let cats = [1, 2, 3];

//   cardsIteration();

//   $(".filter__btn").on("click", function() {
//     // по клику делаем массив пустым
//     cats = [];

//     // подсвечиваем кнопку
//     $(this)
//       .addClass("active")
//       .siblings()
//       .removeClass("active");

//     // добавляем индекс кнопки в массив
//     cats.push($(this).index());
//     cardsIteration();
//   });

//   // удаляем актив со всех карточек и добавляем актив
//   // тем, которые есть в массиве
//   function cardsIteration() {
//     $(".filter__card").each(function() {
//       $(this).removeClass("active");
//       if (cats.includes(0)) {
//         $(this).addClass("active");
//       } else if (cats.includes($(this).data("cat"))) {
//         $(this).addClass("active");
//       }
//     });
//   }
// });

let strArr = ["house", "hours"];

function HDistance(strArr) {
  let oneString = strArr[0];
  let twoString = strArr[1];

  let quantity = 0;

  for (i = 0; i < oneString.length; i++) {
    if (oneString[i] !== twoString[i]) {
      quantity++;
    }
  }

  return quantity;
}

let differences = HDistance(strArr);

console.log("Total differences: " + differences);
