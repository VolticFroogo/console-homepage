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
    },
    {
        name: 'projects',
        description: 'Take a look at some of my projects.',
        func: projects,
    },
    {
        name: 'github',
        description: 'Check out my GitHub profile.',
        func: github,
    },
    {
        name: 'clear',
        description: 'Clear the console.',
        func: clear,
    },
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
        'If you want to see some of my projects, try the \'projects\' command.', margins.BOTTOM);
}

function github() {
    messageURL('Check out my GitHub @VolticFroogo.', 'https://github.com/VolticFroogo');
    message('To take a look at some of my projects on here, try the \'projects\' command.', margins.BOTTOM);
}

function clear() {
    $('#messages').empty();
}