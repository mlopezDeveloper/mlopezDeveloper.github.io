let baslik = document.title;
window.onblur = () =>
	document.title = "Te sigo viendo...";
window.onfocus = () =>
	document.title = "Portafolio";

    const nav = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('barra-color');
        } else {
            nav.classList.remove('barra-color');
        }
    });

