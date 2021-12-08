
const Employee = require('../lib/Employee')
describe('Employee',()=>{
    test('Employee testing to get the class name Employee',()=>{
        var testEmployee = new Employee('Abe', 1, 'email')
        expect(typeof(testEmployee)).toBe('object')
    })
})