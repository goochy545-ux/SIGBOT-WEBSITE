// Simple Scrollytelling Logic
        const steps = document.querySelectorAll('.step');
        const screens = document.querySelectorAll('.app-screen');
        const phone = document.querySelector('.iphone-bezel');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Remove active from all screens
                    screens.forEach(s => s.classList.remove('active'));
                    // Add active to target screen
                    const target = entry.target.dataset.screen;
                    const targetScreen = document.querySelector(`.${target}`);
                    if (targetScreen) targetScreen.classList.add('active');
                }
            });
        }, {
            threshold: 0.6 // Trigger when 60% of step is visible
        });

        steps.forEach(step => observer.observe(step));
