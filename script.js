//your JS code here. If required.
// Create the student object with a property called name
let student = {
    name: "John Doe"
};

// Add a method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Test the getKeys method on the student object
console.log(student.getKeys()); // Output: ["name"]
