function makeLogger(loglevel) {
    return function log(message) {
        console[loglevel](message);
    }
}

let level = 'warn';
const worryUser = makeLogger(level);
worryUser('This is a warning message');

// Key benefits of closures:

// Maintain private variables
// Remember values from their creation context
// Create specialized functions
// Avoid global variables
// Share scope between functions

// Common misconceptions:

// ❌ "Closure is just a function"
// ❌ "Closure is the same as scope"
// ✅ "Closure is a function + its lexical environment"

// When NOT to use closures:

// When you don't need to maintain state
// When the logic doesn't require private variables
// When simpler solutions (like regular functions or objects) would work better

