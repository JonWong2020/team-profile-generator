const validation = require('../src/validate')

class Employee {

    promptQuestions = [
        {
            name: 'name',
            message: 'Enter employee name:',
            validate: validation.isNeeded
        },
        {
            name: 'id',
            message: 'Enter employee ID:',
            validate: validation.isNumber
        },
        {
            name: 'email',
            message: 'Enter employee email:',
            validate: validation.isNeeded
        }
    ]

    // constructor function
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    
    getPrompQuestions() {
        return this.promptQuestions;
    }
    
    // general methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;