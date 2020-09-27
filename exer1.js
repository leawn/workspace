let myName = "Leon";
const BIRTH_DATE = 1999;

const heyThere = (name) => {
    console.log(`Hey there, ${name}`);
}

const range = (start = 15, end = 30) => {
    let newOne = [];
    for (start;start <= end;start++) {
        newOne.push(start); 
    }
    return newOne;
}

const range2 = (start = 15, end = 30) => {
    let newOne2 = [];
    for (start;start <= end;start++) {
        if (start & 1) {
            newOne2.push(start);
        }
    }
    return newOne2;
}

const average = (a, b) => {
    return ((a+b)/2);
}

const square = (x) => {
    return (x^2);
}

const cube = (x) => {
    return (x^3);
}

const calculate = () => {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
        arr.push(average(square(i), cube(i)));
    }
    return arr;
}


const OBJ = {name: "Leon"};

let obj = {name: "NotLeon"};

const createUser = (name, city) => {
    let obj = {};
    obj.name = name;
    obj.city = city;
    return obj;
}


const NEWARR = [{name: 'James', phone: '+123413'},
                {name: 'Tom', phone: '+123411231'},
                {name: 'Jim', phone: '+213123123413'}]

const findPhoneByName = (name) => {
    for (let i = 0; i < NEWARR.length; i++) {
        if (NEWARR[i].name = name) {
            return NEWARR[i].phone;
        }
    }
}

//there was a problem! Now it's fixed