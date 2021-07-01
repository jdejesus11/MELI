module.exports = {
    getDecimalFromPrice: function(price){
        let decimalSeparator = "."
        if (!price)
            return [price,'00'];
        
        let data = price.split(decimalSeparator);
        if (data.length > 1){
            let value = data.slice(0,data.length-1).join("");
            let decimals = data[data.length -1];
            return [value,decimals];
        }
            
        return [price,"00"];
    }
}