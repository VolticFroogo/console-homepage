import { message } from "./output";
import { CONSOLE_PREFIX, Margin } from "./model";
import { updateAgeElements } from "./age";
import { contact } from "./contact";
import { technology } from "./technologies";
import { projects } from "./projects";

class Command {
    name: string;
    description: string;
    func: (cmd: string) => void;
}

export const commands: Command[] = [
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

export function command(cmd: string): void {
    message(CONSOLE_PREFIX + cmd);
    (<HTMLInputElement>document.getElementById('textbox')).value = '';

    const found = commands.some(command => {
        if (!cmd.startsWith(command.name))
            return false;

        command.func(cmd);
        return true;
    });

    if (!found) {
        message('Unknown command \'' + cmd + '\'.');
        message('Try typing \'help\' into the console for a list of commands, or simply click on one of the options below.', Margin.BOTTOM);
    }
}

export function registerCommands(): void {
    const options = document.getElementById('options');

    commands.forEach(command => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(command.name));

        options.append(li);
    });
}

function help(): void {
    message('Commands:', Margin.BOTTOM);

    commands.forEach(command => {
       message('- ' + command.name + ': ' + command.description);
    });

    message(' ', Margin.BOTTOM);
}

function who(): void {
    message('I am Harry (or Froogo), a <span class="age"></span> year old software developer residing in The United Kingdom. ' +
        'If you\'re interested in the kind of technologies I use, try the \'technology\' command. ' +
        'As you can see with this site, I mostly make useless stuff. ' +
        'If you want to see some of my projects, try the \'projects\' command.', Margin.BOTTOM);

    updateAgeElements();
}

function github(): void {
    message('Check out my GitHub <a target="_blank" href="https://github.com/VolticFroogo">@VolticFroogo</a>.');
    message('To take a look at some of my projects on here, try the \'projects\' command.', Margin.BOTTOM);
}

function clear(): void {
    document.getElementById('messages').innerHTML = '';
}