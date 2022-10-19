// const state = {};
// const carouselList = document.querySelector('.carousel__list');
// const carouselItems = document.querySelectorAll('.carousel__item');
// const elems = Array.from(carouselItems);

// carouselList.addEventListener('click', function (event) {
//   var newActive = event.target;
//   var isItem = newActive.closest('.carousel__item');

//   if (!isItem || newActive.classList.contains('carousel__item_active')) {
//     return;
//   };
  
//   update(newActive);
// });

// const update = function(newActive) {
//   const newActivePos = newActive.dataset.pos;

//   const current = elems.find((elem) => elem.dataset.pos == 0);
//   const prev = elems.find((elem) => elem.dataset.pos == -1);
//   const next = elems.find((elem) => elem.dataset.pos == 1);
//   const first = elems.find((elem) => elem.dataset.pos == -2);
//   const last = elems.find((elem) => elem.dataset.pos == 2);
  
//   current.classList.remove('carousel__item_active');
  
//   [current, prev, next, first, last].forEach(item => {
//     var itemPos = item.dataset.pos;

//     item.dataset.pos = getPos(itemPos, newActivePos)
//   });
// };

// const getPos = function (current, active) {
//   const diff = current - active;

//   if (Math.abs(current - active) > 2) {
//     return -current
//   }

//   return diff;
// }
// $.global = new Object();

// $.global.item = 1;
// $.global.total = 0;

// $(document).ready(function () {
//   var WindowWidth = $(window).width();
//   var SlideCount = $("#slides li").length;
//   var SlidesWidth = SlideCount * WindowWidth;

//   $.global.item = 0;
//   $.global.total = SlideCount;

//   $(".slide").css("width", WindowWidth + "px");
//   $("#slides").css("width", SlidesWidth + "px");

//   $("#slides li:nth-child(1)").addClass("alive");

//   $("#left").click(function () {
//     Slide("back");
//   });
//   $("#right").click(function () {
//     Slide("forward");
//   });
// });

// function Slide(direction) {
//   if (direction == "back") {
//     var $target = $.global.item - 1;
//   }
//   if (direction == "forward") {
//     var $target = $.global.item + 1;
//   }

//   if ($target == -1) {
//     DoIt($.global.total - 1);
//   } else if ($target == $.global.total) {
//     DoIt(0);
//   } else {
//     DoIt($target);
//   }
// }

// function DoIt(target) {
//   var $windowwidth = $(window).width();
//   var $margin = $windowwidth * target;
//   var $actualtarget = target + 1;

//   $("#slides li:nth-child(" + $actualtarget + ")").addClass("alive");

//   $("#slides").css("transform", "translate3d(-" + $margin + "px,0px,0px)");

//   $.global.item = target;

//   $("#count").html($.global.item + 1);
// }