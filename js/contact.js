const contactMethods = [
    {
        name: 'email',
        value: 'harry@froogo.co.uk',
        href: 'mailto:harry@froogo.co.uk',
    },
    {
        name: 'discord',
        value: 'Froogo#5239',
    },
    {
        name: 'steam',
        value: 'Froogo',
        href: 'https://steamcommunity.com/id/Froogo',
    },
];

function contact() {
    message('Communication methods:', margins.BOTTOM);

    contactMethods.forEach(function(method) {
        // Send message in format: 'name: value', but make the value an 'a' tag with href if href is defined.
        message(method.name + ': ' +
            (method.href === undefined ? method.value :
            '<a target="_blank" href="' + method.href + '">' + method.value + '</a>'));
    });

    message(' ', margins.BOTTOM);
}