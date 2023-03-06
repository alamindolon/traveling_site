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



  function displayService(service)
  {
    const mainSection = document.getElementById('main_section');

    const stringfiledobj = JSON.stringify(service);
    const div = document.createElement('div');

    div.innerHTML = `
    <div class="card mt-3 mx-auto" style="max-width: 880px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${service.imageurl} class="img-fluid rounded-start h-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body text-center mt-5">
          <h5 class="card-title">Transport Mood : ${service.vehicle}</h5>
          <p class="card-text">${service.description}</p>
          <p class="card-text"><small class="text-muted ">Capacity : ${service.capacity}</small> 
          <small class="text-muted px-3">FarePerkilo : ${service.farePerkilo}</small>
          </p>

              <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick = 'handleBooking(${stringfiledobj})' data-bs-target="#exampleModal">
      Launch demo modal
    </button>

        </div>
      </div>
    </div>
  </div>

    
    `

    mainSection.appendChild(div);
  }
  displayService(busobject);
  displayService(carobject);
  displayService(bikeobject);

  function handleBooking(obj)
  {
    const modelBody = document.getElementById('model_body');
    const stringfilesubdobj = JSON.stringify(obj);
     modelBody.innerHTML = `
     
     <div class="card mx-auto" style="width: 18rem;">
  <img src=${obj.imageurl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Model : ${obj.vehicle}</h5>
    
    <p class="card-text">Description: ${obj.description}</p>

    <p class="card-text"><small class="text-muted px-4" > Fare Per kilo: ${obj.farePerkilo}</small>
    <small class="text-muted "> Capacity: ${obj.capacity}</small></p>
    
    <div class="d-flex-colum ">
    <p class="card-text">Fare :<small class="text-muted " id= 'fare'></p>

    <p class="card-text">Tax :<small class="text-muted " id = 'tax'> </p>
   

    <p class="card-text">Total Cost : <small class="text-muted " id = 'total_cost'> </p>
    </div>
    </div>

    <div class="d-flex-colom ">
              <input class="form-control mt-2" id = "distance_input"
            type="number" placeholder="how go to Kilo?" aria-label="Search">
              <input class="form-control mt-2" id = "quantity_input" type="number" placeholder="How much veicle?" aria-label="Search">
              <button class="btn btn-outline-success mt-2" type="submit" onclick = 'calculatorCost(${stringfilesubdobj})'>Search</button>
            </div>
  </div>
</div>
     `
  }

  function calculatorCost(obj)
  {
    
    const quantity = document.getElementById('quantity_input').value;
    const distance  = document.getElementById('distance_input').value;
    console.log(obj);

    const farDiv  = document.getElementById('fare');
    farDiv.innerHTML = quantity * distance * obj.farePerkilo;



  }