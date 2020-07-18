let typing = false;

document.getElementById('textbox').addEventListener('blur', event => {
    event.target.focus();
});

document.getElementById('textbox').addEventListener('keydown', event => {
    if (typing)
        event.preventDefault();

    // If they didn't press enter, return.
    if (event.code !== 'Enter')
        return;

    command(event.target.value);
});

document.getElementById('options').addEventListener('click', async event => {
    if (!event.target.matches('li'))
        return;

    if (typing)
        return;

    typing = true;

    const cmd = event.target.innerText;
    const textbox = document.getElementById('textbox');

    while (textbox.value.length !== 0) {
        textbox.value = textbox.value.slice(0, -1);
        await sleep(50);
    }

    for (let i = 0; i < cmd.length; i++) {
        textbox.value += cmd[i];
        await sleep(100);
    }

    command(cmd);
    typing = false;
});

function command(cmd) {
    message(CONSOLE_PREFIX + cmd);
    document.getElementById('textbox').value = '';

    const found = commands.some(command => {
        if (!cmd.startsWith(command.name))
            return false;

        command.func(cmd);
        return true;
    });

    if (!found) {
        message('Unknown command \'' + cmd + '\'.');
        message('Try typing \'help\' into the console for a list of commands, or simply click on one of the options below.', margins.BOTTOM);
    }
}