const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
    const intern = new Intern('Mike', 123, 'kiserry21@gmail.com', 'TEC');

    expect(intern.name).toBe('Mike');
    expect(intern.id).toBe(123);
    expect(intern.email).toBe('kiserry21@gmail.com');
    expect(intern.school).toBe('TEC');
});

test('create a school object', () => {
    const intern = new Intern('Mike', 123, 'kiserry21@gmail.com', 'TEC');

    expect(intern.getSchool()).toEqual('TEC');
});

test('create a role object', () => {
    const intern = new Intern('Mike', 123, 'kiserry21@gmail.com', 'TEC');

    expect(intern.getRole()).toEqual('Intern');
});