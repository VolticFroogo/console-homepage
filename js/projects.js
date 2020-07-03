const projectList = [
    {
        name: 'duopoly',
        description: 'Online real-time Monopoly with a game creatable in one click.',
        source: [
            {
                name: 'API',
                url: 'https://github.com/VolticFroogo/duopoly-api',
            },
            {
                name: 'Web',
                url: 'https://github.com/VolticFroogo/duopoly-web',
            }
        ]
    },
    {
        name: 'osmium forums',
        description: 'The fastest and easiest forum service to use. Zero latency for getting updates on threads due to SPA and WebSockets with server push instead of client pull.',
        source: [
            {
                name: 'API',
                url: 'https://github.com/VolticFroogo/of-api',
            },
            {
                name: 'Web',
                url: 'https://github.com/VolticFroogo/of-web',
            }
        ]
    },
    {
        name: 'cryptopad',
        description: 'A cloud-synchronised, trustless security notepad app using AES-256 (CBC) alongside PBKDF2 on the client for true privacy.',
        source: [
            {
                name: 'API',
                url: 'https://github.com/VolticFroogo/cryptopad-server',
            },
            {
                name: 'Mobile',
                url: 'https://github.com/VolticFroogo/cryptopad-mobile',
            }
        ]
    },
    {
        name: 'console-homepage',
        description: 'This site, just a clean homepage interfaced in a CLI style.',
        source: [
            {
                name: 'Web',
                url: 'https://github.com/VolticFroogo/console-homepage',
            },
        ]
    }
];

function projects() {
    message('Projects:', margins.BOTTOM);

    projectList.forEach(function(project) {
        message('- ' + project.name + ': ' + project.description);

        if (project.source !== undefined)
            project.source.forEach(function(source) {
                messageURL(source.name + ' source code', source.url);
            });
        else
            message('Closed source :(');

        message(' ', margins.BOTTOM);
    });

    message('To find my GitHub with more of my projects, try the \'github\' command.', margins.BOTTOM);
}