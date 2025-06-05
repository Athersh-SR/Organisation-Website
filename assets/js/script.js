 $(document).ready(function () {
    $('.nav-links li').click(function () {
      $('.nav-links li').removeClass('active'); 
      $(this).addClass('active');
    });
  });
