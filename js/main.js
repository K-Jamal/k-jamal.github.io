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



  
//we halen de canvas op uit het HTML document met de class naam chart-example
const chart = document.querySelector('.front-end-chart');

//er wordt een nieuwe grafiek gemaakt van het type 'bar'
new Chart(chart, {
    type: 'doughnut',
    data: {
      //de labels komen op de x as
      labels: ['HTML/CSS', 'Bootstrap', 'Javascript'],
      datasets: [{
        label: ' Lines Written',
        // de data komt op de y as
        data: [5000, 2500, 3400],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        // y: {
        //   beginAtZero: true
        // }
      }
    }
});


const backChart = document.querySelector('.back-end-chart');

//er wordt een nieuwe grafiek gemaakt van het type 'bar'
new  Chart(backChart, {
    type: 'pie',
    data: {
      //de labels komen op de x as
      labels: ['PHP', 'Symfony', 'SQL', "Java"],
      datasets: [{
        label: ' Lines Written',
        // de data komt op de y as
        data: [5000, 2500, 3400, 2000],
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        // y: {
        //   beginAtZero: true
        // }
      }
    }
});