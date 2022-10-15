/*const navToggleBtn = document.querySelector("#menubtn");
const header = document.querySelector("#customSelect");

navToggleBtn.addEventListener("click", function (){
   header.classList.toggle("active");
});*/

$(function() {
    $("#menubtn").on("click", function(a) {
      $("#customSelect").toggleClass("active");
      a.stopPropagation()
    });
    $(document).on("click", function(a) {
      if ($(a.target).is("#customSelect") === false) {
        $("#customSelect").removeClass("active");
      }
    });
  });
  $(function() {
    $("#companybtn").on("click", function(a) {
      $("#companySelect").toggleClass("open");
      a.stopPropagation()
    });
    $(document).on("click", function(a) {
      if ($(a.target).is("#companySelect") === false) {
        $("#companySelect").removeClass("open");
      }
    });
  });