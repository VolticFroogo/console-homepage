function registerOptions() {
    commands.forEach(function(command) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(command.name));

        $('#options').append(li);
    });
}

function message(message, margin = 0) {
    // Create the ul with the specified message.
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(message));

    // Apply classes using the bitmask specified in margin.
    if (margin & margins.BOTTOM)
        li.className += ' marginBottom';

    if (margin & margins.TOP)
        li.className += ' marginTop';

    // Append the li to the messages ul.
    const messages = $('#messages');
    messages.append(li);

    // Scroll to the bottom of the ul.
    const messagesDOM = messages[0];
    messagesDOM.scrollTop = messagesDOM.scrollHeight;
}

async function intro() {
    message('Initialising virtual machine...', margins.BOTTOM);
    await sleep(1000);

    message('Booting into FroogOS v1.8.9...', margins.BOTTOM);
    await sleep(1000);

    await check('CPU');
    await check('RAM');
    await check('HDD');

    message('Welcome to FroogOS v1.8.9.');
    message('Type \'help\' into the console for a list of commands, or simply click on one of the options below.');
    message(' ', margins.BOTTOM);

    $('#text').show();
    $('#options').show();
    $('#textbox').focus();
}

async function check(name) {
    message('Checking ' + name + '...');

    const time = getRandomInt(200, 1000);
    await sleep(time);

    message('OK! Verified in ' + time + 'ms.', margins.BOTTOM);
    await sleep(200);
}