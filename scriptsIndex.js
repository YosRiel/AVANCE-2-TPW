document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
    if (dropdownContent.classList.contains('show')) {
      window.scrollTo({
        top: dropdownContent.offsetTop,
        behavior: 'smooth'
      });
    }
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      dropdownContent.classList.remove('show');
    }
  });
});