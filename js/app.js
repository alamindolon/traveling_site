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
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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