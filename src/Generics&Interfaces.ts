interface Book {
    itemType: string;
    title: string;
    isbn: number;
}

interface Game {
    itemType: string;
    title: string;
    style: string;
    price: number;
}

class Collection<T>{
    public data: T[] = [];
    add(item: T): void {
        this.data.push(item);
    }
}

let ItemOne = new Collection<Book>();
ItemOne.add({ itemType: "Book", title: "OOP", isbn: 150150 });
ItemOne.add({ itemType: "Book", title: "Database", isbn: 150170 });
console.log(ItemOne);