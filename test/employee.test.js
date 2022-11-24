const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Mike', 123, 'kiserry21@gmail.com');

    expect(employee.name).toBe('Mike');
    expect(employee.id).toBe(123);
    expect(employee.email).toBe('kiserry21@gmail.com');
});

test('create Employee name object', () => {
    const employee = new Employee('Mike', 123, 'kiserry21@gmail.com');

    expect(employee.getName()).toEqual('Mike');
});

test('create Employee id object', () => {
    const employee = new Employee('Mike', 123, 'kiserry21@gmail.com');

    expect(employee.getId()).toEqual(123);
});

test('create Employee email object', () => {
    const employee = new Employee('Mike', 123, 'kiserry21@gmail.com');

    expect(employee.getEmail()).toEqual('kiserry21@gmail.com');
});