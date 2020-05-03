// to Configure https://vincentgarreau.com/particles.js/
const particlesConfig={
    "particles": {
      "number": {
        "value": 99,
        "density": {
          "enable": true,
          "value_area": 946.9771699587272
        }
      },
      "color": {
        "value": "#72cd34"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#061a5c"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "img/github.svg",
          "width": 200,
          "height": 200
        }
      },
      "opacity": {
        "value": 0.9311942171260817,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7.891476416322726,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 192.40944730386272,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1.4430708547789706
      },
      "move": {
        "enable": true,
        "speed": 14.430708547789706,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },

    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        onresize: {
          enable: true,
          density_auto: true,
          density_area: 400 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true

}
export default particlesConfig;