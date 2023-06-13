// Tuple
/*
-- Is Another Sort of array type
-- we knows exactly how many element it contains
-- we knows which types it ccontains at specific positions
*/

let article: [number, string, boolean] = [11, "Title One", true];
// let article: readonly [number, string, boolean] = [11, "Title One", true];
article = [12, "Title Two", false];

//article.push(100);
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);