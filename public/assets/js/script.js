$(document).ready(function () {
  $(".accordion-header").click(function () {
    // Close other open sections (optional, for true accordion behavior)
    $(".accordion-header").not(this).removeClass("active");
    $(".accordion-content").not($(this).next(".accordion-content")).slideUp("fast");

    // Toggle the clicked section
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle("fast");
  });
});
