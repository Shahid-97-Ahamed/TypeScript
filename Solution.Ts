function formatValue(value:string | number | boolean):string | number | boolean{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    if(typeof value === "number"){
        return value * 10;
    }
    return !value;
}





function getLength(value:string | any[]):number{
    if(typeof value === "string"){
        return value.length;
    }
    if(Array.isArray(value)){
        return value.length;
    }

    return 0;
}





class Person {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name =name;
        this.age =age;
    }

    getDetails():string{
        return `'Name:${this.name}, Age:${this.age}'`;
    }
}




interface RatedItem{
    title:string;
    rating:number;
}

function filterByRating(items:RatedItem[]):RatedItem[]{
    return items.filter((item)=> item.rating >= 4);
}




interface User {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

function filterActiveUsers(users: User[]):User[]{

    return users.filter((user)=>user.isActive === true);

}




interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}

function printBookDetails(book:Book):void{

    const status = book.isAvailable? "Yes" : "No";

    console.log(`Title: ${book.title}, Author:${book.author},Published:${book.publishedYear},Available:${status}`);

}




function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[]{
    const result:(string|number)[]=[];

    for(const item of arr1){
        if(!result.includes(item)){
            result.push(item);
        }
    }

    for(const item of arr2){
        if(!result.includes(item)){
            result.push(item);
        }
    }

    return result;
}




interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?:number;
}

function calculateTotalPrice(products:Product[]):number{
    if(products.length===0) return 0;

    return products
    .map((item)=>{
        const total =item.price*item.quantity;
        if(item.discount){
            return total -(total*item.discount) / 100;
        }

        return total;
    })
    .reduce((acc, val)=> acc +val,0);
}

