"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let ItemOne = new Collection();
ItemOne.add({ itemType: "Book", title: "OOP", isbn: 150150 });
ItemOne.add({ itemType: "Book", title: "Database", isbn: 150170 });
console.log(ItemOne);
//# sourceMappingURL=Generics&Interfaces.js.map