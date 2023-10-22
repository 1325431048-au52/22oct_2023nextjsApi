// Import Area


// Definition Area
 export async function GET(){
    //await
    const min=124;
    const max=126;
    var stockPrice = (Math.random() * (max - min) + min).toFixed(2);
    stockPrice =parseFloat(stockPrice);
    //Every function return something
    return Response.json({

        // Property: value
        Price: stockPrice 
    });
    
     
}


// Export Area
