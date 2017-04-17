$(document).ready(function() {
  $(".paragraph").click(function() {
    $(".paragraph").removeClass("highlight");
    $(this).addClass("highlight");
  });
});
