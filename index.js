const formatDate = (timeInSecond) => {
    
    function clearHours(h) {
        if(h == 0 || isNaN(h) == true){
            return '';   
        } else {
            return h + 'h ';
        }
    };
    
    function clearMinutes(m) {
        if(m == 0 || isNaN(m) == true) {
           return '';
        } else {
           return m + 'm ';
        }
    };
    
    function clearSeconds(s) {
        if(s == 0) {
            return '';
        } else if(isNaN(s) == true) {
            return 0 + 's';      
        } else {
            return s + 's';
        }
    };
                  
    const hours = Math.floor(timeInSecond / 3600);
    const minutes = Math.floor(timeInSecond % 3600 / 60);
    const second = Math.floor(timeInSecond % 60);
    
    return clearHours(hours) + clearMinutes(minutes) + clearSeconds(second);
}

module.exports = formatDate;