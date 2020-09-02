import { Margin } from "./model";
import { getRandomInt, sleep } from "./helper";

function appendMessage(li: HTMLLIElement, margin: Margin): void {
    // Apply classes using the bitmask specified in margin.
    if (margin & Margin.BOTTOM)
        li.classList.add('marginBottom');

    if (margin & Margin.TOP)
        li.classList.add('marginTop');

    // Append the li to the messages ul.
    const messages = document.getElementById('messages');
    messages.append(li);

    // Scroll to the bottom of the ul.
    messages.scrollTop = messages.scrollHeight;
}

export function message(message: string, margin: Margin = Margin.NONE): void {
    // Create the li with the specified message.
    let li = document.createElement('li');
    li.innerHTML = message;

    appendMessage(li, margin);
}

export function messageURL(message: string, url: string, margin: Margin = Margin.NONE): void {
    let a = document.createElement('a');
    a.innerHTML = message;
    a.target = '_blank';
    a.href = url;

    // Create the li with the specified message.
    let li = document.createElement('li');
    li.appendChild(a);

    appendMessage(li, margin);
}

export async function intro(): Promise<void> {
    message('Initialising virtual machine...', Margin.BOTTOM);
    await sleep(1000);

    message('Booting into FroogOS v1.8.9...', Margin.BOTTOM);
    await sleep(1000);

    await check('CPU');
    await check('RAM');
    await check('HDD');

    message('Welcome to FroogOS v1.8.9.');
    message('Type \'help\' into the console for a list of commands, or simply click on one of the options below.');
    message(' ', Margin.BOTTOM);

    document.getElementById('text').hidden = false;
    document.getElementById('options').hidden = false;
    document.getElementById('textbox').focus();
}

async function check(name: string): Promise<void> {
    message('Checking ' + name + '...');

    const time = getRandomInt(200, 1000);
    await sleep(time);

    message('OK! Verified in ' + time + 'ms.', Margin.BOTTOM);
    await sleep(200);
}