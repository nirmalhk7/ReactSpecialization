var rect= require('./rectange')


function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERRORRRRR",err.message)
        }
        else{
            console.log("AAREAAA"+rectangle.area())
        }
    })
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);