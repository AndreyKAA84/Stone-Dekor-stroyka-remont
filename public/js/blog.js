document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts-container');

    if (blogPostsContainer) {
        // Функция для рендеринга статей блога
        const renderBlogPosts = (posts) => {
            blogPostsContainer.innerHTML = ''; // Очищаем существующее содержимое

            if (posts.length === 0) {
                blogPostsContainer.innerHTML = '<p>К сожалению, статьи пока отсутствуют.</p>';
                return;
            }

            posts.forEach(post => {
                const postCard = document.createElement('div');
                postCard.classList.add('blog-post-card');

                postCard.innerHTML = `
                    <img src="${post.imageUrl}" alt="${post.title}">
                    <div class="blog-post-content">
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <a href="${post.link}" class="read-more" target="_blank">Читать далее &rarr;</a>
                        <p class="post-date"><small>Опубликовано: ${new Date(post.date).toLocaleDateString('ru-RU')}</small></p>
                    </div>
                `;
                blogPostsContainer.appendChild(postCard);
            });
        };

        // Загружаем и рендерим статьи блога
        fetchBlogPosts().then(posts => {
            renderBlogPosts(posts);
        }).catch(error => {
            console.error("Ошибка загрузки статей блога:", error);
            blogPostsContainer.innerHTML = '<p>Не удалось загрузить статьи блога. Пожалуйста, попробуйте позже.</p>';
        });
    }
});