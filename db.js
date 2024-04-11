

const cars =[{
    id:1,
    model:33,
    year:2015,
    value: 60.000
}];

function SelectCars(){
    return cars;
}
function SelectCar(id){
    return cars.find( c => c.id === id);
}

function insertCar(car){
    cars.push(car);
}

function UpdateCar(id, carData){
    const car = cars.find( c => c.id === id);
    if(!car) return;
    car.model = carData.model;
    car.year = carData.year;
    car.value = carData.value;

}

function deleteCar(id){
    const index = cars.findIndex(c => c.id === id);
    cars.splice(index, 1);
}
module.exports = {
    SelectCars,
    SelectCar,
    insertCar,
    UpdateCar,
    deleteCar
}