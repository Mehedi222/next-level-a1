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






interface user {
    id: number | string;
    name: string;
    email: string;
    isActive: boolean;
}
function filterActiveUsers(users: user[]): user[] {
    const activeUsers: user[] = users.filter(u => u.isActive);
    return activeUsers;
}
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));


interface Book {
    title: string;
    author: string;
    PublishedYear: number;
    isAvailable: boolean;
}
function printBookDetails(books: Book): void {
    const availability = books.isAvailable ? "yes" : "No";
    console.log(`Title: ${books.title}, Author: ${books.author}, Published Year: ${books.PublishedYear}, Available: ${availability}`);
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    PublishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);
