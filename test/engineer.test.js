const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Jordan', 123, 'kiserry21@gmail.com', 'kiserry21');

    expect(engineer.name).toBe('Jordan');
    expect(engineer.id).toBe(123);
    expect(engineer.email).toBe('kiserry21@gmail.com');
    expect(engineer.github).toBe('kiserry21');
});

test('create a github object', () => {
    const engineer = new Engineer('Jordan', 123, 'kiserry21@gmail.com', 'kiserry21');

    expect(engineer.getGithub()).toEqual('kiserry21');
});

test('create a role object', () => {
    const engineer = new Engineer('Jordan', 123, 'kiserry21@gmail.com', 'kiserry21');

    expect(engineer.getRole()).toEqual('Engineer');
});