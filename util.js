function getRandomValue(array){
    const randomElement=array[Math.floor(Math.random()*array.length)];
    return randomElement;
}

function doSomeHeavyTask(){
    const ms=getRandomValue([100,150,200,300,600,500,1000,1400,1400,2500]);
    const shouldThrowError=getRandomValue([1,2,3,4,5,6,7,8])===8;
    if(shouldThrowError){
        const randomError=getRandomValue([
            "DB Payment Failure",
            "DB Server is Down",
            "Access Denied",
            "Not Found Error",
        ]);
        throw new Error(randomError);
    }
    return new Promise((resolve, reject)=>setTimeout(()=>resolve(ms)));
}

module.exports={doSomeHeavyTask}