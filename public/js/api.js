/**
 * Этот файл предназначен для имитации API-запросов к внешним сервисам,
 * таким как VK, для получения данных о галерее, блоге и отзывах.
 *
 * В реальном приложении:
 * - Вам потребуется использовать реальные VK API (или другие API) ключи и методы.
 * - Запросы должны будут идти через ваш сервер (бэкенд), чтобы скрыть API ключи
 * и избежать проблем с CORS.
 * - Здесь мы используем setTimeout для имитации задержки загрузки данных.
 */

// Имитация данных для галереи (портфолио)
const mockGalleryItems = [
    {
        id: 1,
        src: '../assets/img/portfolio/project1.jpg', // Путь обновлен
        alt: 'Построенный дом 1',
        category: 'houses',
        title: 'Загородный дом в Белом Яре',
        description: 'Проект одноэтажного дома с мансардой.'
    },
    {
        id: 2,
        src: '../assets/img/portfolio/project2.jpg', // Путь обновлен
        alt: 'Построенная баня',
        category: 'banyas',
        title: 'Уютная баня из бруса',
        description: 'Классическая баня с парной и комнатой отдыха.'
    },
    {
        id: 3,
        src: '../assets/img/portfolio/project3.jpg', // Путь обновлен
        alt: 'Ремонт квартиры',
        category: 'renovation',
        title: 'Комплексный ремонт квартиры',
        description: 'Капитальный ремонт с перепланировкой.'
    },
    {
        id: 4,
        src: '../assets/img/portfolio/project4.jpg', // Путь обновлен
        alt: 'Построенный дом 2',
        category: 'houses',
        title: 'Двухэтажный коттедж',
        description: 'Современный коттедж с панорамными окнами.'
    },
    {
        id: 5,
        src: '../assets/img/portfolio/project5.jpg', // Путь обновлен
        alt: 'Отделка офиса',
        category: 'renovation',
        title: 'Отделка коммерческого помещения',
        description: 'Отделка офисного пространства под ключ.'
    },
    {
        id: 6,
        src: '../assets/img/portfolio/project6.jpg', // Путь обновлен
        alt: 'Баня с террасой',
        category: 'banyas',
        title: 'Баня с просторной террасой',
        description: 'Проект бани для большой семьи.'
    }
];

// Имитация данных для блога
const mockBlogPosts = [
    {
        id: 1,
        title: 'Как выбрать материал для строительства дома?',
        excerpt: 'Рассматриваем преимущества и недостатки различных материалов: брус, кирпич, каркас.',
        date: '2025-05-10',
        imageUrl: '../assets/img/blog/blog1.jpg', // Путь обновлен
        link: 'blog-post-1.html' // В реальном проекте это может быть ссылка на статью в ВК/Яндекс Дзен
    },
    {
        id: 2,
        title: '5 советов по ремонту ванной комнаты',
        excerpt: 'На что обратить внимание при планировании ремонта в ванной.',
        date: '2025-04-22',
        imageUrl: '../assets/img/blog/blog2.jpg', // Путь обновлен
        link: 'blog-post-2.html'
    },
    {
        id: 3,
        title: 'Особенности строительства фундамента на глинистых почвах',
        excerpt: 'Разбираемся в типах фундамента для сложных грунтов.',
        date: '2025-03-15',
        imageUrl: '../assets/img/blog/blog3.jpg', // Путь обновлен
        link: 'blog-post-3.html'
    }
];

// Имитация данных для отзывов
const mockReviews = {
    vk: [
        {
            id: 1,
            author: 'Анна К.',
            text: 'Заказывали строительство бани. Сделали быстро и качественно! Очень довольны результатом.',
            date: '2025-05-20',
            link: 'https://vk.com/wall-yourcommunity_123' // Ссылка на оригинальный отзыв в ВК
        },
        {
            id: 2,
            author: 'Иван П.',
            text: 'Отличная компания! Помогли с ремонтом квартиры, все работы выполнены профессионально.',
            date: '2025-04-10',
            link: 'https://vk.com/wall-yourcommunity_124'
        }
    ],
    ok: [
        {
            id: 1,
            author: 'Ольга С.',
            text: 'Построили дом нашей мечты! Благодарны за индивидуальный подход и внимание к деталям.',
            date: '2025-05-01',
            link: 'https://ok.ru/group/yourgroup/topic/12345' // Ссылка на оригинальный отзыв в ОК
        },
        {
            id: 2,
            author: 'Дмитрий В.',
            text: 'Качественная внутренняя отделка, всё в срок. Рекомендую!',
            date: '2025-03-25',
            link: 'https://ok.ru/group/yourgroup/topic/12346'
        }
    ]
};


/**
 * Имитирует загрузку изображений для галереи.
 * @param {string} [category='all'] - Категория для фильтрации (например, 'houses', 'banyas', 'renovation', 'all').
 * @returns {Promise<Array>} - Промис, который разрешается массивом объектов изображений.
 */
function fetchGalleryItems(category = 'all') {
    return new Promise(resolve => {
        setTimeout(() => { // Simulate network delay
            const filteredItems = category === 'all'
                ? mockGalleryItems
                : mockGalleryItems.filter(item => item.category === category);
            resolve(filteredItems);
        }, 500); // 0.5 second delay
    });
}

/**
 * Имитирует загрузку постов для блога.
 * @returns {Promise<Array>} - Промис, который разрешается массивом объектов постов.
 */
function fetchBlogPosts() {
    return new Promise(resolve => {
        setTimeout(() => { // Simulate network delay
            resolve(mockBlogPosts);
        }, 500);
    });
}

/**
 * Имитирует загрузку отзывов.
 * @returns {Promise<Object>} - Промис, который разрешается объектом с отзывами из разных источников.
 */
function fetchReviews() {
    return new Promise(resolve => {
        setTimeout(() => { // Simulate network delay
            resolve(mockReviews);
        }, 500);
    });
}

// Экспорт функций для использования в других файлах JS
// (В данном случае они не экспортируются, а используются напрямую,
// так как это имитация и функции вызываются глобально или через другие скрипты.
// Для более модульной структуры можно использовать export/import.)