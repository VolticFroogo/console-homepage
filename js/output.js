function registerOptions() {
    const options = document.getElementById('options');

    commands.forEach(function(command) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(command.name));

        options.append(li);
    });
}

function appendMessage(li, margin) {
    // Apply classes using the bitmask specified in margin.
    if (margin & margins.BOTTOM)
        li.classList.add('marginBottom');

    if (margin & margins.TOP)
        li.classList.add('marginTop');

    // Append the li to the messages ul.
    const messages = document.getElementById('messages');
    messages.append(li);

    // Scroll to the bottom of the ul.
    messages.scrollTop = messages.scrollHeight;
}

function message(message, margin = 0) {
    // Create the li with the specified message.
    let li = document.createElement('li');
    li.innerHTML = message;

    appendMessage(li, margin);
}

function messageURL(message, url, margin = 0) {
    let a = document.createElement('a');
    a.innerHTML = message;
    a.target = '_blank';
    a.href = url;

    // Create the li with the specified message.
    let li = document.createElement('li');
    li.appendChild(a);

    appendMessage(li, margin);
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

    document.getElementById('text').hidden = false;
    document.getElementById('options').hidden = false;
    document.getElementById('textbox').focus();
}

async function check(name) {
    message('Checking ' + name + '...');

    const time = getRandomInt(200, 1000);
    await sleep(time);

    message('OK! Verified in ' + time + 'ms.', margins.BOTTOM);
    await sleep(200);
}