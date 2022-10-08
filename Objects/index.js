// data is orginized into objects   functionality  and propertys of data propory and method , sep list in curly braces.

let dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black' ,
    dvdName: 'Mulan' ,
    printDVDName: function() {
        console.log(this.dvdName); //this keyword of that object calls itself....
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();