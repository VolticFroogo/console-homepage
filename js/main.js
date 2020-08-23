document.addEventListener('DOMContentLoaded', () => {
    // If the user is on mobile, set the textbox to readonly.
    if (window.matchMedia('(max-width: 767px)').matches)
        document.getElementById('textbox').readOnly = true;

    requestAnimationFrame(updateAge);

    registerOptions();
    intro();
});