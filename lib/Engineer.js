const Employee = require('./Employee');
const validation = require('../src/validate');

class Engineer extends Employee {

    constructor(github, ...args) {
        super(...args);
        this.github = github;
        this.role = 'Engineer';

        this.promptQuestions.push({
            name: 'github',
            message: 'Enter GitHub username:',
            validate: validation.isNeeded
        })
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer