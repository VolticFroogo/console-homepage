let typing = false;

$('#textbox').blur(function() {
    this.focus();
});

$('#textbox').keydown(function(event) {
    if (typing)
        event.preventDefault();

    // If they didn't press enter, return.
    if (event.keyCode !== 13)
        return;

    command($('#textbox').val());
});

$('#options').on('click', 'li', async function() {
    if (typing)
        return;

    typing = true;

    const cmd = this.innerText;
    const textbox = $('#textbox');

    while (textbox.val().length !== 0) {
        textbox.val(textbox.val().slice(0, -1));
        await sleep(120);
    }

    for (let i = 0; i < cmd.length; i++) {
        textbox.val(textbox.val() + cmd[i]);
        await sleep(200);
    }

    command(cmd);
    typing = false;
});

function command(cmd) {
    message(CONSOLE_PREFIX + cmd);
    $('#textbox').val('');

    const found = commands.some(function(command) {
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