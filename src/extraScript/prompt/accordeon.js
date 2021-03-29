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


function Language({onClick = f => f , onChange=f=>f}){
  return(
    <div className="row">

      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="language" type="email" class="form-control" placeholder="Enter a language" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="range" onChange={e => onChange(e.target.id)}></input>

          <button id="lan_clicked" type="button" class="btn btn-primary" onClick={e => onClick(e.target.id)}>Add a Language</button>
      </div>

      <div className="col-6"></div>
      
    </div>
  );
}

function Hobbies({onChange=f=>f , onClick=f=>f}){
  return(
    <div className="row">
      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="hobby" type="email" class="form-control" placeholder="Enter a hobby" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="range_hobby" onChange={e => onChange(e.target.id)}></input>

          <button id="hob_clicked" type="button" class="btn btn-primary" onClick={e => onClick(e.target.id)}>Add a Hobby</button>
      </div>

      <div className="col-6"></div><br></br>
    </div>
  );
}


function Profile({onChange=f=>f}){
  return(
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Enter Profile description</label>
        <textarea onChange={e => onChange(e.target.id)} class="form-control" id="profile" rows="3"></textarea>
    </div>
    </div>
  );
}



function Education({onChange=f=>f , onClick=f=>f}){
  return(
    <div>
       <div className="col-6">
            <label for="exampleFormControlInput1" class="form-label">Education</label>
            <input id="education" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
       </div>

        <div className="row">
          <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">School</label>
              <input id="school" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
          </div>

          <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">City</label>
              <input id="cit" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
          </div>
        </div>

        <div className="row">
            <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                  <input id="start_date" onChange={e => onChange(e.target.id)} type="date" class="form-control"/>
                </div>
            </div>
      
            <div className="col-6">
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">End Date</label>
                      <input id="end_date" onChange={e => onChange(e.target.id)} type="date" class="form-control"/>
                  </div>

            </div>
        </div>
        
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea id="education_description" onChange={e => onChange(e.target.id)} class="form-control" rows="3"></textarea>
        </div>

        <button id="education_click" onClick={e => onClick(e.target.id)} className="btn btn-primary">Add a formation</button>
    </div>
  );
}
function Employment({onChange=f=>f , onClick=f=>f}){
  return(
    <div>
       <div className="col-6">
            <label for="exampleFormControlInput1" class="form-label">Position</label>
            <input id="position" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
       </div>

        <div className="row">
          <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">Employer</label>
              <input id="employer" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
          </div>

          <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">City</label>
              <input id="employment_city" onChange={e => onChange(e.target.id)} type="text" class="form-control"/>
          </div>
        </div>

        <div className="row">
            <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                  <input id="employment_start_date" onChange={e => onChange(e.target.id)} type="date" class="form-control"/>
                </div>
            </div>
      
            <div className="col-6">
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">End Date</label>
                      <input id="employment_end_date" onChange={e => onChange(e.target.id)} type="date" class="form-control"/>
                  </div>

            </div>
        </div>
        
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea id="employment_description" onChange={e => onChange(e.target.id)} class="form-control" rows="3"></textarea>
        </div>

        <button id="employment_click" onClick={e => onClick(e.target.id)} className="btn btn-primary">Add an Employment</button>
    </div>
  );
}



function Skills({onClick = f => f , onChange=f=>f}){
  return(
    <div className="row">

      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="skill" type="text" class="form-control" placeholder="Enter a Skill" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="skill_range" onChange={e => onChange(e.target.id)}></input>

          <button id="skill_clicked" type="button" class="btn btn-primary" onClick={e => onClick(e.target.id)}>Add a Skill</button>
      </div>

      <div className="col-6"></div>
      
    </div>
  );
}






export default function Accordeon({title , id,col , expand ,onChange = f => f ,onClick = f => f}){
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
                    (title == "Language" ? <Language onChange={onChange} onClick={onClick}/> : (title == "Hobbies" ? <Hobbies onChange={onChange} onClick={onClick}/> : 
                    (title == "Profile" ? <Profile onChange={onChange}/> : (title == "Education"?<Education onChange={onChange} onClick={onClick  }/> : 
                    (title == "Employment"?<Employment onChange={onChange} onClick={onClick}/> : 
                    (title == "Skills"? <Skills onChange={onChange} onClick={onClick}/> : title))))))}
                  </div>
                </div>
            </div>
        </div>
    );
}