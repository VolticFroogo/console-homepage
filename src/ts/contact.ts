import { message } from "./output";
import { Margin } from "./model";

class ContactMethod {
    name: string;
    value: string;
    href?: string;
}

const contactMethods: ContactMethod[] = [
    {
        name: 'email',
        value: 'harry@froogo.co.uk',
        href: 'mailto:harry@froogo.co.uk',
    },
    {
        name: 'discord',
        value: 'Froogo#8004',
    },
    {
        name: 'steam',
        value: 'Froogo',
        href: 'https://steamcommunity.com/id/Froogo',
    },
];

export function contact(): void {
    message('Communication methods:', Margin.BOTTOM);

    contactMethods.forEach(method => {
        // Send message in format: 'name: value', but make the value an 'a' tag with href if href is defined.
        message(method.name + ': ' +
            (method.href === undefined ? method.value :
            '<a target="_blank" href="' + method.href + '">' + method.value + '</a>'));
    });

    message(' ', Margin.BOTTOM);
}