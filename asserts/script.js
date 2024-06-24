// JavaScript for handling scroll animation
document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.animate');
    var windowHeight = window.innerHeight;
  
    elements.forEach(function(element) {
      var positionFromTop = element.getBoundingClientRect().top;
  
      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('show');
      }
    });
});
  