document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button'); // Select only calculator buttons
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        // Toggle icon
        if (document.body.classList.contains('light-theme')) {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        } else {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            switch(value) {
                case 'clear':
                    display.value = '';
                    break;
                case 'backspace':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        // Avoid showing 'null' by checking for empty or invalid expressions
                        const result = display.value ? eval(display.value) : '';
                        display.value = result !== null ? result : '';
                    } catch(error) {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
            }
        });
    });
});
