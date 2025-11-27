console.log("Console Loaded");

document.querySelector('.mode-switch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
    }
})


document.addEventListener('DOMContentLoaded', () => {
    var options = {
      strings: ['Software Developer', 'Web Developer', 'Front-end developer', 'Tech Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    var typed = new Typed('.typed', options);
  });