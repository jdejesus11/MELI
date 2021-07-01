export  function setDecimalsMask(decimals){
    if (decimals || decimals == 0)
       return "00"
    
    if (decimals > 0 && decimals < 10)
        return "0" + decimals;
    

    return String(decimals);
 }

