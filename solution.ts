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







function contains(array: (number | string)[], value: number | string): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
function getUniqueValues(array1: (number | string)[], array2: (number | string)[]): (number | string)[] {
    const uniqueValues: (number | string)[] = [];;
    for (let i = 0; i < array1.length; i++) {
        const value = array1[i];
        if (!contains(uniqueValues, value)) {
            uniqueValues.push(value);
        }
    }
    for (let i = 0; i < array2.length; i++) {
        const value = array2[i];
        if (!contains(uniqueValues, value)) {
            uniqueValues.push(value);
        }
    }

    return uniqueValues;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));







interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


function calculateTotalPrice(products: Product[]): number {
    const totalPrice = products.reduce((total, product) => {
        let producTotal: number;
        if (typeof product.discount === "number" && product.discount > 0) {
            const discountMultiplier = 1 - product.discount / 100;
            producTotal = (product.price * product.quantity) * discountMultiplier;
        } else {
            producTotal = product.price * product.quantity;
        }
        return total + producTotal;
    }, 0);
    return totalPrice;
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));