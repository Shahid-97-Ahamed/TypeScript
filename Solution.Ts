function formatValue(value:string | number | boolean):string | number | boolean{
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    if(typeof value === "number"){
        return value * 10;
    }
    return !value;
}

