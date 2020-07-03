$(document).ready(function() {
    // If the user is on mobile, set the textbox to readonly.
    if (window.matchMedia('(max-width: 767px)').matches) {
        $('#textbox').attr('readonly', true);
    }

    registerOptions();
    intro();
});