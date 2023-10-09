// Code your solution in this file!
const distanceFromHqInBlocks = (pickUpLocation) => {
    const headQuarters = 42;
    const distance = Math.abs(headQuarters - pickUpLocation);
    return distance;
}
//console.log(distanceFromHqInBlocks(60));
const distanceFromHqInFeet = (pickUpLocation) => {
    
     const feet = distanceFromHqInBlocks(pickUpLocation) * 264;
     return feet;
}
//console.log(distanceFromHqInFeet(10))

const distanceTravelledInFeet = (start, finish)=> {
    const distance = Math.abs((finish - start) * 264);
    return distance;
}
//console.log(distanceTravelledInFeet(41, 23))

const calculatesFarePrice = (start, finish) => {
    const travel = distanceTravelledInFeet(start, finish);
    if (travel <= 400){
        return 0;
    }else if (travel <= 2000){
        return (0.02 * travel).toFixed(2);
    }else if(travel <= 2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}


