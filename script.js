/* for mobile */

var mobileAdd = document.getElementById("mobile-add");
var mobileCount = document.getElementById('mobile-count');
var mobilePrice = document.getElementById('mobile-price');
var mobileQuantitySubtract = document.getElementById('mobile-subtract');

/* for case */

var caseAdd = document.getElementById('case-add');
var caseCount = document.getElementById('case-count');
var casePrice = document.getElementById('case-price');
var caseQuantitySubtract = document.getElementById('case-subtract');

/* for sub total */
var subtotal = document.getElementById
('subTotal');

/* for tax */
var tax = document.getElementById("tax");

/* for grand total */
var grandTotal = document.getElementById("grandTotal");


/* For both case and mobile price and quantity increment  */

function productPrice(addition,count,price,priceField, subField, mobileTotal, caseTotal)
{
    addition.addEventListener('click', function(){

        var input = parseInt(count.value);
    
        var increment = input+1;
    
        count.value = increment;
    
        var totalPrice = increment *price;
    
        priceField.innerText = totalPrice;

        inTotal(mobileTotal,caseTotal,subField, tax, grandTotal)
    })
}


productPrice(mobileAdd, mobileCount, 1219, mobilePrice, subtotal, mobilePrice, casePrice); /* For mobile price & quantity increment */
 

productPrice(caseAdd,caseCount, 59, casePrice, subtotal, mobilePrice, casePrice); /* For case price & quantity increment */


/* For both case and mobile price and quantity decrement  */

function productReducedPrice(subtract,count,price,priceField, subField, mobileTotal, caseTotal)
{
    subtract.addEventListener('click', function(){

        var input = parseInt(count.value);
    
        var decrement = input-1;
    
        count.value = decrement;
    
        var totalPrice = decrement *price;
    
        priceField.innerText = totalPrice;

        inTotal(mobileTotal,caseTotal,subField, tax, grandTotal)

    })
}

productReducedPrice(mobileQuantitySubtract, mobileCount, 1219, mobilePrice, subtotal, mobilePrice, casePrice);


productReducedPrice(caseQuantitySubtract, caseCount, 59, casePrice, subtotal, mobilePrice, casePrice);


/* For grand total amount */

function inTotal(mobileTotal,caseTotal,subField, tax, grandTotal)
{
    var mobileTotalPrice = parseInt(mobileTotal.innerText);
    var caseTotalPrice = parseInt(caseTotal.innerText);

    var subtotalPrice = mobileTotalPrice + caseTotalPrice;

    subField.innerText = subtotalPrice;


    var taxAmount = Math.round(subtotalPrice * 0.15);

    tax.innerText = taxAmount;

    grandAmount = subtotalPrice + taxAmount;

    grandTotal.innerText = grandAmount;

}