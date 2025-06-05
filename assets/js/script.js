$(document).ready(function () {
    $('.nav-links .nav-item a').on('click', function () {
      $('.nav-links .nav-item').removeClass('active');
      $(this).parent().addClass('active');
    });
  });
 const header = document.querySelector(".header");
  let showingSecond = false;

  setInterval(() => {
    showingSecond = !showingSecond;
    header.classList.toggle("show-second", showingSecond);
  }, 5000); 