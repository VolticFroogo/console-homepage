import { updateAge } from './age';
import { intro } from "./output";
import { registerCommands } from "./commands";
import { registerListeners } from "./input";

document.addEventListener('DOMContentLoaded', () => {
    // If the user is on mobile, set the textbox to readonly.
    if (window.matchMedia('(max-width: 767px)').matches)
        (<HTMLInputElement>document.getElementById('textbox')).readOnly = true;

    requestAnimationFrame(updateAge);

    registerCommands();
    registerListeners();
    intro();
});
