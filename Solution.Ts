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

