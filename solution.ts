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




