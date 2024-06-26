document.addEventListener('scroll', function() {
  const hiddenContent = document.getElementById('content1');
  const rect = hiddenContent.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const Content2 = document.getElementById('content2')
  const Content3 = document.getElementById('content3')
  const Content4 = document.getElementById('content4')
  const rect2 = Content2.getBoundingClientRect();
  const rect3 = Content3.getBoundingClientRect();
  const rect4 = Content4.getBoundingClientRect();

  if (rect.top <= windowHeight && rect.top <= 0) {
    hiddenContent.classList.add('visible');
    Content2.classList.add('visible');
    Content3.classList.add('visible');
    Content4.classList.add('visible');
  } else {
    hiddenContent.classList.add('visible');
    Content2.classList.add('visible');
    Content3.classList.add('visible');
    Content4.classList.add('visible');
  }
});
