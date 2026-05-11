document.addEventListener('DOMContentLoaded', () => {
    console.log("F1 Ultra 2026 Site Loaded Successfully");

    // Form submission alert
    const form = document.getElementById('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            console.log("Newsletter signup processed.");
        });
    }
});
