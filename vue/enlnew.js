let btn1 =0;
let btn2 =100;
function formatDate(date) {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    return day + "/" + month + "/" + year;
}

//Usage example:
//alert(formatDate(new Date()));
let datef = formatDate(new Date());
