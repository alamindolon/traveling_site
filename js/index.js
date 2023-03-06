var carobject = {
    vehicle: 'car',
    imageurl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    farePerkilo : 4,
    capacity:8,
    description: 'lorem this bus is very comfortable in journey for user'
  }

  var bikeobject = {
    vehicle: 'bike',
    imageurl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    farePerkilo : 2,
    capacity:15,
    description: 'lorem this bus is very comfortable in journey for user'
  }


  var busobject = {
    vehicle: 'bus',
    imageurl: "images/photo-1570125909232-eb263c188f7e.png",
    farePerkilo : 6,
    capacity:3,
    description: 'lorem this bus is very comfortable in journey for user'
  }

const servicesArray = [bikeobject, carobject,busobject];


var value  = "bus"

for (let i = 0; i < servicesArray.length; i++) {
    const element = servicesArray[i];
    if( value === element.vehicle)
    {
        console.log(element);
    }
    
}