document.addEventListener('DOMContentLoaded', () => {
    // Функция для рендеринга элементов галереи
    const renderGallery = (items, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Контейнер с ID "${containerId}" не найден для галереи.`);
            return;
        }
        container.innerHTML = ''; // Очищаем предыдущее содержимое

        if (items.length === 0) {
            container.innerHTML = '<p>Проекты в этой категории пока отсутствуют.</p>';
            return;
        }

        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('portfolio-item');
            galleryItem.setAttribute('data-category', item.category); // Для фильтрации

            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}">
                <div class="portfolio-item-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.src}" target="_blank" class="btn btn-link">Посмотреть фото</a>
                </div>
            `;
            container.appendChild(galleryItem);
        });
    };

    // Загрузка галереи для предварительного просмотра на главной странице
    const homepageGalleryContainer = document.getElementById('vk-gallery-preview');
    if (homepageGalleryContainer) {
        fetchGalleryItems().then(items => {
            // Берем только первые 3-4 элемента для предварительного просмотра
            const previewItems = items.slice(0, 4);
            renderGallery(previewItems, 'vk-gallery-preview');
        }).catch(error => {
            console.error("Ошибка загрузки галереи для главной страницы:", error);
            if (homepageGalleryContainer) {
                homepageGalleryContainer.innerHTML = '<p>Не удалось загрузить проекты. Пожалуйста, попробуйте позже.</p>';
            }
        });
    }

    // Загрузка полной галереи для страницы портфолио
    const fullGalleryContainer = document.getElementById('vk-gallery-full');
    if (fullGalleryContainer) {
        let allGalleryItems = []; // Храним все элементы для фильтрации

        fetchGalleryItems().then(items => {
            allGalleryItems = items; // Сохраняем полученные элементы
            renderGallery(allGalleryItems, 'vk-gallery-full'); // Рендерим все изначально

            // Добавляем логику фильтрации
            const filterButtons = document.querySelectorAll('.portfolio-categories .btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    event.target.classList.add('active');

                    const filterCategory = event.target.getAttribute('data-filter');
                    const filtered = filterCategory === 'all'
                        ? allGalleryItems
                        : allGalleryItems.filter(item => item.category === filterCategory);
                    renderGallery(filtered, 'vk-gallery-full');
                });
            });
        }).catch(error => {
            console.error("Ошибка загрузки полной галереи:", error);
            if (fullGalleryContainer) {
                fullGalleryContainer.innerHTML = '<p>Не удалось загрузить проекты. Пожалуйста, попробуйте позже.</p>';
            }
        });
    }
});