const citiesContainers = [...document.querySelectorAll('.Cities-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

citiesContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
});

$(window).scroll(function(){
  $("navLinks").css({"margin-top": ($(window).scrollTop()) + "px", "margin-left":($(window).scrollLeft()) + "px"});
});
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);





