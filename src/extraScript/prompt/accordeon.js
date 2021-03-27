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
          <input type="text" aria-label="First name" class="form-control" onChange = {(e) => onChange(e.target.value)}/>
          <input type="text" aria-label="Last name" class="form-control"/>
        </div><br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="email" class="form-control" placeholder="Enter your email adresse" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">$</span>
            <input type="email" class="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="email" class="form-control" placeholder="Adress" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>

        <br></br><br></br>

       <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Zip Code" aria-label="Username"/>
          <span class="input-group-text">@</span>
          <input type="text" class="form-control" placeholder="City" aria-label="Server"/>
      </div>
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
                    {title=="Personal_details" ? <Personal_details onChange={onChange}/> : title}
                  </div>
                </div>
            </div>
        </div>
    );
}