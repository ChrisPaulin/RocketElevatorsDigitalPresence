var theForm = document.forms["quoteform"];

var productLinesPrices = new Array();

product_Lines_Price["pl_1"] = 7565;
product_Lines_Price["pl_2"] = 12345;
product_Lines_Price["pl_3"] = 15400;



var installationFeesPrice = new Array();

installation_Fees_Price["if_1"] = 0.10;
installation_Fees_Price["if_2"] = 0.13;
installation_Fees_Price["if_3"] = 0.16;

g

















function productlinesPrice()
{
    var standardPrice=7565;
    //Get a reference to the form id="p_1"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="pl_1"
    var standardPrice = theForm.elements["pl_1"];

    //If they checked the button set standardPrice to 7565
    if(pl_1.checked==true)
    {
        standardPrice=7565;
    }
    //finally we return the standardPrice
    return standardPrice;
{
    var premiumPrice=12345;
    //Get a reference to the form id="p_2"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="pl_2"
    var standardPrice = theForm.elements["pl_2"];

    //If they checked the button set premiumPrice to 12345$
    if(pl_2.checked==true)
    {
        premiumPrice=12345;
    }
    //finally we return the premiumPrice
    return premiumPrice;
}
{
    var exceliumPrice=15400;
    //Get a reference to the form id="p_3"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="pl_3"
    var exceliumPrice = theForm.elements["pl_3"];

    //If they checked the button set exceliumPrice to 15400$
    if(pl_3.checked==true)
    {
        exceliumPrice=15400;
    }
    //finally we return the exceliumPrice
    return exceliumPrice;
}
}



function installationFeesPrice()
{
    var standardFeesPercent=0.10;
    //Get a reference to the form id="if_1"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="if_1"
    var standardPrice = theForm.elements["if_1"];

    //If they checked the button set standardPrice to 10%
    if(if_1.checked==true)
    {
        standardFeesPercent=0.10;
    }
    //finally we return the standardPrice
    return standardFeesPercent;
}



    var standardFeesPercent=0.13;
    //Get a reference to the form id="if_1"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="if_2"
    var standardPrice = theForm.elements["if_2"];

    //If they checked the button set standardPrice to 10%
    if(if_2.checked==true)
    {
        standardFeesPercent=0.13;
    }
    //finally we return the standardPrice
    return standardFeesPercent;



{
    var standardFeesPercent=0.16;
    //Get a reference to the form id="if_3"
    var theForm = document.forms["quoteform"];
    //Get a reference to the radiobutton1 id="if_3"
    var standardPrice = theForm.elements["if_3"];

    //If they checked the button set standardPrice to 16%
    if(if_3.checked==true)
    {
        exceliumFeesPercent=0.16;
    }
    //finally we return the standardPrice
    return exceliumFeesPercent;
};





