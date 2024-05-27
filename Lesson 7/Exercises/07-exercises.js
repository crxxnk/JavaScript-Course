function greet(name) {
    console.log(`Hello ${name}`)
    if (name === undefined) {
        console.log('Hey there!')
    }
}

greet('Alex');
greet('Simon');
greet('George');
greet();

//Convert to Fahrenheit

function convertToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}

console.log(convertToFahrenheit(20));

//Comvert to Celsius

function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(convertToCelsius(48));

//Convert Temperature

function convertTemperature(degrees, unit) {
    if (unit === 'F') {
        let celsius = (degrees - 32) * 5 / 9;
        return celsius;
    } else if (unit === 'C') {
            let fahrenheit = degrees * 9 / 5 + 32;
            return fahrenheit;
        }
    }

console.log(convertTemperature(25, 'C'))

//Convert Length

function convertLength (length, from, to) {
    if (from === 'miles' && to === 'km') {
        let distance = length * 1.6;
        return distance;
    } else if (from === 'km' && to === 'miles') {
        let distance = length * 0.62
        return distance;
    } else if (from === 'km' && to ==='ft') {
        let distance = length * 3281;
        return distance;
    } else if (from === 'miles' && to === 'ft') {
        let distance = length * 5280;
        return distance;
    } else if (from === 'ft' && to === 'km') {
        let distance = length * 0.0003;
        return distance;
    } else if (from === 'ft' && to === 'miles') {
        let distance = length * 0.0002;
        return distance;
    } else if (from !== 'km' || from !== 'miles' || from !== 'ft' || to !== 'km' || to !== 'miles' 
        || to !== 'ft') {
        console.log('Value is invalid')
    }
}

console.log(`${convertLength(50, 'miles', 'km')} km`)
console.log(`${convertLength(100, 'km', 'miles')} miles`)
console.log(`${convertLength(2, 'km', 'ft')} ft`)
console.log(`${convertLength(2, 'miles', 'ft')} ft`)
console.log(`${convertLength(1000, 'ft', 'km')} km`)
console.log(`${convertLength(1000, 'ft', 'miles')} miles`)
