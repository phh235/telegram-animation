// avatar
window.addEventListener("scroll", function () {
  var avatar = document.getElementById("avatar");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    // Điều kiện để áp dụng hiệu ứng khi cuộn đến vị trí nhất định
    avatar.classList.add("zoomed");
  } else {
    avatar.classList.remove("zoomed");
  }
});
// name
window.addEventListener("scroll", function () {
  var name = document.getElementById("name");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    // Điều kiện để áp dụng hiệu ứng khi cuộn đến vị trí nhất định
    name.classList.add("zoomed");
  } else {
    name.classList.remove("zoomed");
  }
});
// theme
const body = document.querySelector("body");
const h3 = document.querySelector("#name");
function changeColor() {
  if (body.style.backgroundColor == "rgb(22, 31, 56)") {
    body.style.backgroundColor = "white";
    body.style.transition = ".5s";
    h3.style.color = "#000";
  } else {
    body.style.backgroundColor = "rgb(22, 31, 56)";
    body.style.transition = ".5s";
    h3.style.color = "white";
  }
}
// window.addEventListener("scroll", function () {
      //   var scrollPosition = window.scrollY || window.pageYOffset;
      //   var documentHeight =
      //     document.documentElement.scrollHeight -
      //     document.documentElement.clientHeight;
      //   var timeline = document.getElementById("timeline");
      //   var timelineWidth = timeline.offsetWidth;
      //   var timelinePosition = (scrollPosition / documentHeight) * 100;

      //   timeline.style.width = timelinePosition + "%";
      // });

      // window.addEventListener("scroll", function () {
      //   var avatar = document.getElementById("avatar");
      //   var scrollPosition = window.scrollY;
      //   var maxScroll = 1000; // Điểm cuộn tối đa để kích hoạt hiệu ứng (thay đổi theo ý muốn)

      //   if (scrollPosition <= maxScroll) {
      //     var scale = 1 - scrollPosition / maxScroll;
      //     var translateY = 320 - scrollPosition * 0.32; // Tính toán giá trị translateY dựa trên scrollPosition (thay đổi theo ý muốn)

      //     // Đảm bảo giá trị translateY không nhỏ hơn 0
      //     translateY = Math.max(translateY, 0);

      //     avatar.style.transform =
      //       "scale(" + scale + ") translateY(" + translateY + "px)";
      //   }
      // });F