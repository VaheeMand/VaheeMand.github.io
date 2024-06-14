document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const appList = document.querySelector('.app-list');

        // Убедитесь, что data является массивом
        if (!Array.isArray(data)) {
            console.error('Данные не являются массивом');
            return;
        }

        data.forEach(app => {
            // Проверка наличия поля author в каждом объекте приложения
            if (!app.author) {
                console.error('Отсутствует информация об авторе для', app.name);
                return;
            }

            const appItem = document.createElement('div');
            appItem.className = 'app-item';

            const icon = document.createElement('img');
            icon.src = app.icon;
            icon.className = 'app-icon';
            appItem.appendChild(icon);

            const details = document.createElement('div');
            details.className = 'app-details';

            const name = document.createElement('div');
            name.className = 'app-name';
            name.textContent = app.name;
            details.appendChild(name);

            const author = document.createElement('div');
            author.className = 'app-author';
            author.textContent = app.author;
            details.appendChild(author);

            const description = document.createElement('div');
            description.className = 'app-description';
            description.textContent = app.descriptionTitle;
            details.appendChild(description);

            appItem.appendChild(details);

            const moreButton = document.createElement('a');
            moreButton.className = 'more-button';
            moreButton.textContent = 'Подробнее...';
            moreButton.href = `app.html?id=${app.id}`;
            appItem.appendChild(moreButton);

            appList.appendChild(appItem);
        });
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));
});
