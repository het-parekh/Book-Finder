import book1 from '../../Assets/Images/book1.png'
import book2 from '../../Assets/Images/book2.png'
import book3 from '../../Assets/Images/book3.png'


const particleParams={
    "fullScreen": {
        "enable": false,
        "zIndex": 1
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "interactivity": {
        "events": {

            "onDiv": {
                "elementId": "repulse-div",
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                    "enable": false,
                    "force": 60,
                    "smooth": 10
                }
            },
            "resize": true
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 35,
                "speed": 1
            },
            "connect": {
                "distance": 80,
                "lineLinked": {
                    "opacity": 0.5
                },
                "radius": 60
            },
            "grab": {
                "distance": 400,
                "lineLinked": {
                    "opacity": 1
                }
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            }
        }
    },
    "particles": {
        "color": {
            "value": "#ffffff"
        },
        "move": {
            "attract": {
                "enable": false,
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "out",
            "random": false,
            "speed": 2,
            "straight": false
        },
        "number": {
            "density": {
                "enable": true,
                "area": 800
            },
            "limit": 0,
            "value": 40
        },
        "opacity": {
            "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
            },
            "random": true,
            "value": 1
        },
        "rotate": {
            "animation": {
                "enable": true,
                "speed": 5,
                "sync": false
            },
            "direction": "random",
            "random": true,
            "value": 0
        },
        "shape": {
            "image": [
                {
                    "src": book1,
                    "width": 32,
                    "height": 32
                },
                {
                    "src": book2,
                    "width": 32,
                    "height": 32
                },

                {
                    "src": book3,
                    "width": 32,
                    "height": 32
                },
                
            ],
            "polygon": {
                "sides": 5
            },
            "stroke": {
                "color": "#000000",
                "width": 0
            },
            "type": "image"
        },
        "size": {
            "animation": {
                "enable": false,
                "minimumValue": 0.1,
                "speed": 40,
                "sync": false
            },
            "random": false,
            "value": 16
        }
    },
    "background": {
        "color": "#fff",
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover",
    }
}

export default particleParams
