document.addEventListener('DOMContentLoaded', () => {
    // Это заглушка для более сложной интеграции чат-бота.
    // В реальном сценарии это включало бы:
    // 1. Бэкенд-сервис для обработки логики чат-бота (например, Dialogflow, собственный NLP).
    // 2. Правильный пользовательский интерфейс для чат-бота (например, плавающая кнопка, окно чата).
    // 3. Вызовы API для отправки сообщений пользователя и получения ответов бота.

    // Пока мы реализуем очень простое всплывающее окно "быстрого контакта" или нечто подобное.

    // Пример: Простая кнопка, которая вызывает контактную форму или базовое сообщение.
    // Предположим, у вас есть такая кнопка в HTML (например, в подвале или в фиксированной позиции):
    // <button id="openChatbot" class="btn btn-primary fixed-bottom-right">Задать вопрос</button>
    // И простой модальный/div для контента чат-бота:
    // <div id="chatbotModal" class="chatbot-modal">
    //     <div class="chatbot-modal-content">
    //         <span class="close-button">&times;</span>
    //         <h3>Напишите нам!</h3>
    //         <p>Оставьте ваш вопрос или заявку, и мы скоро свяжемся с вами.</p>
    //         <form class="chatbot-form">
    //             <input type="text" placeholder="Ваше имя" required>
    //             <input type="email" placeholder="Ваш Email или телефон" required>
    //             <textarea placeholder="Ваш вопрос" rows="4" required></textarea>
    //             <button type="submit" class="btn btn-primary">Отправить</button>
    //         </form>
    //     </div>
    // </div>

    const openChatbotBtn = document.getElementById('openChatbot'); // Предполагается, что эта кнопка существует
    const chatbotModal = document.getElementById('chatbotModal'); // Предполагается, что это модальное окно существует
    const closeChatbotBtn = chatbotModal ? chatbotModal.querySelector('.close-button') : null;
    const chatbotForm = chatbotModal ? chatbotModal.querySelector('.chatbot-form') : null;

    if (openChatbotBtn && chatbotModal) {
        openChatbotBtn.addEventListener('click', () => {
            chatbotModal.style.display = 'block';
        });

        if (closeChatbotBtn) {
            closeChatbotBtn.addEventListener('click', () => {
                chatbotModal.style.display = 'none';
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target === chatbotModal) {
                chatbotModal.style.display = 'none';
            }
        });

        if (chatbotForm) {
            chatbotForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Ваш вопрос отправлен! Мы ответим в ближайшее время.');
                chatbotForm.reset();
                chatbotModal.style.display = 'none';
            });
        }
    } else {
        // console.log("Элементы чат-бота не найдены. Функционал чат-бота пропущен.");
        // Это нормально, если вы не планируете использовать плавающий чат-бот.
        // Файл включен для возможного расширения в будущем.
    }
});

// Добавьте базовые стили для модального окна чат-бота (если вы используете эту примерную структуру)
/*
// Обычно это помещается в components.css или отдельный chatbot.css
.chatbot-modal {
    display: none; // Скрыто по умолчанию
    position: fixed;
    z-index: 1001; // Выше других элементов
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.5); // Полупрозрачный черный фон
}

.chatbot-modal-content {
    background-color: #fefefe;
    margin: 15% auto; // 15% сверху и по центру
    padding: 20px;
    border: 1px solid #888;
    width: 80%; // Может быть фиксированной ширины или адаптивной
    max-width: 500px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.chatbot-modal-content h3 {
    text-align: center;
    color: #212529;
    margin-bottom: 20px;
}

.chatbot-modal-content .close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.chatbot-modal-content .close-button:hover,
.chatbot-modal-content .close-button:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.chatbot-form input,
.chatbot-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    box-sizing: border-box; // Включаем padding в ширину
}

.chatbot-form button {
    width: 100%;
}
*/