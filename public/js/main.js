document.addEventListener('DOMContentLoaded', () => {
    // Переключение меню для мобильных устройств
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavUl = document.querySelector('.main-nav ul');

    if (menuToggle && mainNavUl) {
        menuToggle.addEventListener('click', () => {
            mainNavUl.classList.toggle('active');
        });
    }

    // Плавная прокрутка для якорных ссылок (если есть)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Базовая обработка отправки формы (для контактной формы)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Предотвращаем стандартную отправку формы

            // В реальном приложении вы бы отправили эти данные на сервер, используя fetch() или XMLHttpRequest
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.'); // Простое оповещение

            // Здесь можно очистить форму
            this.reset();
        });
    }

    // Опционально: Добавление простой кнопки "Наверх", если необходимо (сначала добавьте кнопку в HTML)
    // const backToTopButton = document.createElement('button');
    // backToTopButton.textContent = '↑ Наверх';
    // backToTopButton.classList.add('back-to-top-btn');
    // document.body.appendChild(backToTopButton);

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY > 300) { // Показываем кнопку после прокрутки на 300px
    //         backToTopButton.style.display = 'block';
    //     } else {
    //         backToTopButton.style.display = 'none';
    //     }
    // });

    // backToTopButton.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
});