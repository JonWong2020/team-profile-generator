const roleTitles = {
    "Engineer": {value: "github", render: "Github"},
    "Intern": {value: "school", render: "School"},
    "Manager": {value: "officeNumber", render: "Office #"}
}

const getGeneratedWorkerInfo = (role, data) => {
    console.log(role, data);
    if (role === 'github') {
        return `<a href="${data}">${data}</a>`;
    } else {
        return data;
    }
}

