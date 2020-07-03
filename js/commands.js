const commands = [
    {
        name: 'help',
        description: 'View a list of all available commands.',
        func: help,
    },
    {
        name: 'who',
        description: 'Ask who I am.',
        func: who,
    }
];

function help() {
    message('Commands:', margins.BOTTOM);

    commands.forEach(function(command) {
       message('- ' + command.name + ': ' + command.description);
    });

    message(' ', margins.BOTTOM);
}

function who() {
    message('I am Harry (or Froogo), a software developer residing in The United Kingdom. ' +
        'As you can see with this site, I mostly make useless stuff. ' +
        'If you want to see some of my open-source projects, try the \'projects\' command.', margins.BOTTOM);
}