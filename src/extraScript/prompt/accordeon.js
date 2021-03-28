import React , {useState, useEffect , createContext} from 'react';

  
function Personal_details({onChange = f => f}){
  return(
    
    <div className="row">
      <div className="col-4">
         <form className="md-form">
          <div className="file-field">
            <div className="mb-4">
              <img id="img" style={{width:"100px" , borderRadius:"50%"}} src={`https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg`}
                />
            </div>
            <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                  <input className="form-control form-control-sm" id="formFileSm" type="file"/>
            </div>
          </div>
        </form>
      </div>

      <div className="col-8">
        <div class="input-group">
           <span class="input-group-text">First and last name</span>
          <input id="name" type="text" aria-label="First name" class="form-control" onChange = {(e) => onChange(e.target.id)}/>
          <input id="l_name" type="text" aria-label="Last name" class="form-control" onChange = {(e) => onChange(e.target.id)}/>
        </div><br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="email" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Enter your email adresse" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">$</span>
            <input id="phone" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="adress" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Adress" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br>

       <div class="input-group mb-3">
          <input id="zip" onChange={(e) => onChange(e.target.id)} type="text" class="form-control" placeholder="Zip Code" aria-label="Username"/>
          <span class="input-group-text">@</span>
          <input id="city" onChange={(e) => onChange(e.target.id)} type="text" class="form-control" placeholder="City" aria-label="Server"/>
      </div><br></br>

      <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="lin" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Linked Account ?" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="git" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Git hub Account ?" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="port" onChange={(e) => onChange(e.target.id)} type="email" class="form-control" placeholder="Port Folio ?" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

       <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Birth Date</span>
            <input id="bd" onChange={(e) => onChange(e.target.id)} type="date" class="form-control" placeholder="Git hub Account ?" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div><br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Drivers Licence</span>
            <input id="dl" onChange={(e) => onChange(e.target.id)} type="text" class="form-control" placeholder="Any Drivers Licence ?" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
      </div>
    </div>
   
  );
}


function Language(){
  return(
    <div className="row">

      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input id="port" type="email" class="form-control" placeholder="Enter a language" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <label for="customRange2" class="form-label">Example range</label>
          <input type="range" class="form-range" min="0" max="5" id="customRange2"></input>

          <button type="button" class="btn btn-primary">Add a Language</button>
      </div>

      <div className="col-6"></div>
      
    </div>
  );
}

function Hobbies(){
  return(
    <div className="row">
      <div className="col-8">
        <div class="input-group input-group-lg">
          <span class="input-group-text" id="inputGroup-sizing-lg">Enter a Hobby</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div><br></br><br></br>
        <button type="button" class="btn btn-primary">Add a Hobby</button>
      </div>
    </div>
  );
}






export default function Accordeon({title , id,col , expand , onChange = f => f}){
    return(
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={id}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${col}`} aria-expanded={expand} aria-controls={col}>
                    {title}
                  </button>
                </h2>
                <div id={col} className="accordion-collapse collapse show" aria-labelledby={id} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {title=="Personal_details" ? <Personal_details onChange={onChange}/> : 
                    (title == "Language" ? <Language /> : (title == "Hobbies" ? <Hobbies /> : title))}
                  </div>
                </div>
            </div>
        </div>
    );
}