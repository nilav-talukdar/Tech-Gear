import '../scss/styles.scss';
import '../../css/style.css';
import * as bootstrap from 'bootstrap';

const brandName = document.querySelector('.navbar-brand');
brandName.addEventListener('click', () => {
    window.location.reload();
});