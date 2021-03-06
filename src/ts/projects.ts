import { message, messageURL } from "./output";
import { Margin } from "./model";

class Project {
    name: string;
    description: string;
    source: Source[];
}

class Source {
    name: string;
    url: string;
}

const projectList: Project[] = [
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
        name: 'await-ws',
        description: 'Simplify WebSockets by allowing you to await upon requests.',
        source: [
            {
                name: 'Go',
                url: 'https://github.com/VolticFroogo/await-ws-go',
            },
            {
                name: 'Dart',
                url: 'https://github.com/VolticFroogo/await-ws-dart',
            }
        ],
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

export function projects(): void {
    message('Projects:', Margin.BOTTOM);

    projectList.forEach(project => {
        message('- ' + project.name + ': ' + project.description);

        if (project.source !== undefined)
            project.source.forEach(source => messageURL(source.name + ' source code', source.url));
        else
            message('Closed source :(');

        message(' ', Margin.BOTTOM);
    });

    message('To find my GitHub with more of my projects, try the \'github\' command.', Margin.BOTTOM);
}