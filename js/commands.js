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
        name: 'technology',
        description: 'Get to know some of the technologies I use.',
        func: technology,
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
        name: 'contact',
        description: 'Find out a few ways to contact me.',
        func: contact,
    },
    {
        name: 'clear',
        description: 'Clear the console.',
        func: clear,
    },
];

function help() {
    message('Commands:', margins.BOTTOM);

    commands.forEach(command => {
       message('- ' + command.name + ': ' + command.description);
    });

    message(' ', margins.BOTTOM);
}

function who() {
    message('I am Harry (or Froogo), a <span class="age"></span> year old software developer residing in The United Kingdom. ' +
        'If you\'re interested in the kind of technologies I use, try the \'technology\' command. ' +
        'As you can see with this site, I mostly make useless stuff. ' +
        'If you want to see some of my projects, try the \'projects\' command.', margins.BOTTOM);

    updateAgeElements();
}

function github() {
    message('Check out my GitHub <a target="_blank" href="https://github.com/VolticFroogo">@VolticFroogo</a>.');
    message('To take a look at some of my projects on here, try the \'projects\' command.', margins.BOTTOM);
}

function clear() {
    document.getElementById('messages').innerHTML = '';
}