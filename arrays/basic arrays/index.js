//Length -1 is the end of the array!!!
let customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i]);
}
//console.log(customerNames[1]);

for (name of customerNames) {
    console.log(name);
}
//^^^ alternitive cleaner then the length loop


/*


.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue,

.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            .reduce(
                (previousValue, currentValue) => previousValue + currentValue,

                .reduce(
                    (previousValue, currentValue) => previousValue + currentValue,
                    .reduce(
                        (previousValue, currentValue) => previousValue + currentValue,
                        .reduce(
                            (previousValue, currentValue) => previousValue + currentValue,
                            .reduce(
                                (previousValue, currentValue) => previousValue + currentValue,
                                .reduce(
                                    (previousValue, currentValue) => previousValue + currentValue,
                                    .reduce(
                                        (previousValue, currentValue) => previousValue + currentValue,
                                        .reduce(
                                            (previousValue, currentValue) => previousValue + currentValue,
                                            .reduce(
                                                (previousValue, currentValue) => previousValue + currentValue,