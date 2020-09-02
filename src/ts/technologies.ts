import { message } from "./output";
import { Margin } from "./model";

class Technology {
    name: string;
    description: string;
}

const technologies: Technology[] = [
    {
        name: 'golang',
        description: 'The best (or at least my favourite) backend programming language with by far the best concurrency technology.',
    },
    {
        name: 'mongodb',
        description: 'A document-oriented NoSQL database with great scalable sharding and replication.',
    },
    {
        name: 'java',
        description: 'Everyone knows Java, just a very reliable, scalable OOP language.',
    },
    {
        name: 'javascript / typescript',
        description: 'The globally used website scripting language, upgraded with TypeScript for type safety and stronger typing.',
    },
    {
        name: 'angular',
        description: 'A very efficient and easy TypeScript framework designed with PWAs and SPAs in mind.',
    },
    {
        name: 'flutter / dart',
        description: 'The easiest mobile framework (and language) for great UIs with native performance.',
    }
];

export function technology(): void {
    message('As I am primarily a backend developer, most of what I know revolves around server-side development. ' +
        'I have still had to learn my fair share of client-side technologies, as most of my projects are developed solely by me.', Margin.BOTTOM);

    message('My favourite technologies (which I know and frequently use):', Margin.BOTTOM);

    technologies.forEach(technology => {
        message('- ' + technology.name + ': ' + technology.description);
    });

    message(' ', Margin.BOTTOM);
}