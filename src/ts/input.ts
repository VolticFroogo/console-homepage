import { command } from "./commands";
import { sleep } from "./helper";

let typing = false;

export function registerListeners(): void {
    document.getElementById('textbox').addEventListener('blur', event => {
        (<HTMLInputElement>event.target).focus();
    });

    document.getElementById('textbox').addEventListener('keydown', event => {
        if (typing)
            event.preventDefault();

        // If they didn't press enter, return.
        if (event.code !== 'Enter')
            return;

        command((<HTMLInputElement>event.target).value);
    });

    document.getElementById('options').addEventListener('click', async event => {
        if (typing || !(<HTMLElement>event.target).matches('li'))
            return;

        typing = true;

        const textbox = <HTMLInputElement>document.getElementById('textbox');

        while (textbox.value.length !== 0) {
            textbox.value = textbox.value.slice(0, -1);
            await sleep(50);
        }

        const cmd = (<HTMLLIElement>event.target).innerText;

        for (let i = 0; i < cmd.length; i++) {
            textbox.value += cmd[i];
            await sleep(100);
        }

        command(cmd);
        typing = false;
    });
}
