 
 
 
 
 
//  First Problem ( Convert Kilometer To Meter )
 
 
 function kilometerToMeter(kilometer){
    var distance =kilometer *1000 ;  // [1 kilometer =1000 meter]
    return distance ;
 }
kilometerToMeter();




// 2nd Problem ( Budget Calculator - Calculate 3 differets type of gadgets with their specific price)

 function budgetCalculator ( watch, phone, laptop ) {
    var watchPrice = watch * 50 ;    
    var phonePrice = phone * 100 ;                             
    var laptopPrice = laptop * 500 ;
    var gadgetsPrice = watchPrice + phonePrice + laptopPrice ;
    return gadgetsPrice ;
 }
budgetCalculator();




// 3rd Problem (Hotel Cost)



function hotelCost(totalDays){
    
    if(totalDays<=10){
       totalCost = totalDays * 100 ;
    } 
    else if ( totalDays <= 20 ) {
        var firstTenDays = 10 * 100 ;
        var remainingDays = totalDays - 10 ;
        var afterTenDays = remainingDays * 80 ;
       totalCost = firstTenDays + afterTenDays ;
    } 
    else {
        var firstTenDays = 10 * 100 ;
        var afterTenDays = 10 * 80 ;
        var remainingDays = totalDays - 20 ;
        var afterTwentyDays = remainingDays * 50 ;
        totalCost = firstTenDays + afterTenDays + afterTwentyDays ;
    }
    return totalCost;
} 
hotelCost(); 




// Fourth problem ( MegaFriend )

function megaFriend(largestName){
    var names = '';
    for ( var i=0; i < largestName.length; i++ ) {
        var currentName = largestName[i];
        if( currentName.length > names.length ) {
        names = largestName[i];
        }
    }
    return names;
 }
 megaFriend();
