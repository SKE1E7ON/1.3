const buttons = document.querySelectorAll('.nav_panel button');
        const secondButton = buttons[1];

        // Устанавливаем фокус на вторую кнопку при загрузке страницы
        window.onload = function() {
            secondButton.focus();
        };

        // Перехватываем клик на документе и возвращаем фокус на вторую кнопку
        document.addEventListener('click', function(event) {
            if (!secondButton.contains(event.target)) {
                secondButton.focus();
            }
        });