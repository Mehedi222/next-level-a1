function formatValue(value: number | string | boolean): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return String(value * 10);
    } else if (typeof value === "boolean") {
        return value ? "TRUE" : "FALSE";
    } else {
        return "UNKNOWN TYPE";
    }
}
console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));
console.log(formatValue(false));


function getLength(input: string | any[]): number {
    if (Array.isArray(input)) {
        return input.length;
    } else if (typeof input === "string") {
        return input.length;
    } else {
        return 0;
    }
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));




class person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new person('Alice', 25);
console.log(person2.getDetails());



interface Item {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));


