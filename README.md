# arabic-personal-names
A list of Arabic personal names. Useful for generating realistic user profile in tests.


## Installation

```shell
npm install --save arabic-personal-names
```

## Usage
The module is extremely easy to use:

```javascript
var names = require('arabic-personal-names')

console.log(names.male) // array with male first names, sorted alphabetically

console.log(names.female) // array with female first names, alphabetically

console.log(names.last) // array with last names, alphabetically
```

You can also require each array as JSON:

```javascript
var male = require('arabic-personal-names/male.json')

var female = require('arabic-personal-names/female.json')

var last = require('arabic-personal-names/last.json')
```

### Usage with Chance.js
The most common use for this module might be to generate random Arabic names for use in project tests. One possible way to do that is to combine this module with a psuedo-random data generator, like the excellent [Chance](http://chancejs.com) library:

```javascript
var Chance = require('chance'),
    names = require('arabic-personal-names')

var chance = new Chance() // You can also pass a constant seed for reproducible tests

var male = {
  // pick a random male first name
  firstName: chance.pick(names.male),
  // pick a random last name
  lastName: chance.pick(names.last)
}

var female = {
  firstName: chance.pick(names.female),
  lastName: chance.pick(names.last)
};

console.log(male.firstName + ' ' + male.lastName)
// مازن قطان

console.log(female.firstName + ' ' + female.lastName)
// بنان حسين

```
