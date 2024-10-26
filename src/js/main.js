import '../scss/styles.scss';
import '../../css/style.css';
import * as bootstrap from 'bootstrap';
import Typewriter from 'typewriter-effect/dist/core';

const brandName = document.querySelector('.navbar-brand');
brandName.addEventListener('click', () => {
    window.location.reload();
});

/* new Typewriter('#type', {
    strings: ['the Future of Tech'],
    loop: true,
    autoStart: true,
    delay: 50,
  }); */
