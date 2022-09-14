module.exports = {
    
    isNumber (input) {
        if (!(isNaN(parseInt(input)))) return true;
            console.log('\nPlease enter a valid number.');
        return false;
    },

    isNeeded (input) {
        if (input) return true; 
        console.log('\nThis field is required.');
        return false
    }
}