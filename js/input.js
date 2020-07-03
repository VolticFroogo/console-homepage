$('#textbox').blur(function() {
    this.focus();
});

$('#textbox').keydown(function(event) {
    // If they didn't press enter, return.
    if (event.keyCode !== 13)
        return;

    const textbox = $('#textbox');
    const cmd = textbox.val();

    message(CONSOLE_PREFIX + cmd);
    textbox.val('');

    command(cmd);
});

function command(cmd) {
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