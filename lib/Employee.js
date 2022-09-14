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
    
    // general methods
    
}