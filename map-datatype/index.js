const userRoles = new Map();

userRoles.set('John', 'admin');
userRoles.set('Jane', 'editor');
userRoles.set('liam', 'subscriber');

function demonstrateMap() {
    console.log(userRoles.get('John'));
    console.log(userRoles.get('Jane'));
    console.log(userRoles.get('liam'));

    // check if a key exists
    console.log(userRoles.has('John'));

    // get value by a key
    console.log(userRoles.get('John'));

    // size of the map
    console.log(userRoles.size);

    // iterating the map
    for(let [user, role] of userRoles) {
        console.log(`${user} => ${role}`);
    }

    // iterating through keys
    for(let usernames of userRoles.keys()) {
        console.log(keys);
    }

    // iterating through values
    for(let roles of userRoles.values()) {
        console.log(roles);
    }

    // deleteing a key
    userRoles.delete('John');

    // custom object keys
    const memberShip = new Map();

    const alice = {name: 'Alice'};
    const bob = {name: 'Bob'};

    memberShip.set(alice, 'premium');
    memberShip.set(bob, 'regular');
}

demonstrateMap();