
import React , {useState, useEffect , createContext} from 'react';


function getImage(){
  try{
 var file = document.getElementById("fichier").files;

  }catch{return null}
  if(file.length > 0){  
    var fileReader = new FileReader();
    
    fileReader.readAsDataURL(file[0]);

    fileReader.onload = function(event){
      document.getElementById("main_image").setAttribute("src" , event.target.result);
    }

    
  }
}



function Personal_details({onChange = f => f}){
  return(
    
    <div className="row" style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>
      <div className="col-4">
         <form className="md-form">
          <div className="file-field">
            <div className="mb-4">
              <img id="img" style={{width:"100px" , borderRadius:"50%"}} src={`https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg`}
                />
            </div>
            <div className="mb-3">
                  <label htmlFor="formFileSm" className="form-label">Choose a profile image</label>
                  <input className="form-control form-control-sm" id="fichier" type="file"accept="image/*" onChange={() => getImage()}/>
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
    <div className="row" style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>

      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="language" type="email" class="form-control" placeholder="Enter a language" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="range" onChange={e => onChange(e.target.id)}></input>

          <div className="row">
            <div className="col-5">
          <button id="lan_clicked" type="button" class="btn btn-outline-primary" onClick={e => onClick(e.target.id)}>Add a Language</button>

            </div>
            <div className="col-7">
          <button id="delete_lan_clicked" type="button" class="btn btn-outline-danger" onClick={e => onClick(e.target.id)}>Remove this Language</button>

            </div>
          </div>
      </div>

      <div className="col-6"></div>
      
    </div>
  );
}

function Hobbies({onChange=f=>f , onClick=f=>f}){
  return(
    <div className="row" style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>
      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="hobby" type="email" class="form-control" placeholder="Enter a hobby" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="range_hobby" onChange={e => onChange(e.target.id)}></input>

          <div className="row">
            <div className="col-5">
              <button id="hob_clicked" type="button" class="btn btn-outline-primary" onClick={e => onClick(e.target.id)}>Add a Hobby</button>

            </div>
            <div className="col-7">
              <button id="delete_hob_clicked" type="button" class="btn btn-outline-danger" onClick={e => onClick(e.target.id)}>Remove thisHobby</button>

            </div>
          </div>
      </div>

      <div className="col-6"></div><br></br>
    </div>
  );
}


function Profile({onChange=f=>f}){
  return(
    <div style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>
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
    <div style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>
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
        <div className="row">
          <div className="col-3">
              <button id="education_click" onClick={e => onClick(e.target.id)} className="btn btn-outline-primary">Add Education</button>
          </div>
          <div className="col-4">
              <button id="delete_education_click" onClick={e => onClick(e.target.id)} className="btn btn-outline-danger">Remove this Education</button>
          </div>
        </div>
    </div>
  );
}
function Employment({onChange=f=>f , onClick=f=>f , title}){
  return(
    <div style={{boxShadow:"6px 6px 8px black" , padding:"5px" , backgroundColor:"#e6ffff"}}>
       <div className="col-6">
            <label for="exampleFormControlInput1" class="form-label" >Position</label>
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


        <div className="row">
          <div className="col-3">
              <button id="employment_click" onClick={e => onClick(e.target.id)} className="btn btn-outline-primary">Add an Employment</button>
          </div>
          <div className="col-4">
             <button id="delete_employment_click" onClick={e => onClick(e.target.id)} className="btn btn-outline-danger">Delete this employment</button>
          </div>
        </div>
    </div>
  );
}



function Skills({onClick = f => f , onChange=f=>f}){
  return(
    <div className="row" style={{boxShadow:"6px 6px 8px black " , padding:"5px" , backgroundColor:"#e6ffff"}}>

      <div className="col-6">
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input onChange={e => onChange(e.target.id)} id="skill" type="text" class="form-control" placeholder="Enter a Skill" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
          <input type="range" defaultValue="0" class="form-range" min="0" max="5" id="skill_range" onChange={e => onChange(e.target.id)}></input>

          <div className="row">
            <div className="col-4">
              <button id="skill_clicked" type="button" class="btn btn-outline-primary" onClick={e => onClick(e.target.id)}>Add a Skill</button>
            </div>
            <div className="col-6">
              <button id="delete_skill_clicked" type="button" class="btn btn-outline-danger" onClick={e => onClick(e.target.id)}>Remove this Skill</button>
            </div>
          </div>
      </div>

      <div className="col-6"></div>
      
    </div>
  );
}






export default function Accordeon({title , id,col , expand ,onChange = f => f ,onClick = f => f , number}){
    return(
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={id}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${col}`} aria-expanded={expand} aria-controls={col}>
                    {title}
                  </button>
                </h2>
                <div id={col} className="accordion-collapse collapse" aria-labelledby={id} data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    {title=="Personal_details" ? (number.length ? number.map((n) => <Personal_details onChange={onChange}/>) : <Personal_details onChange={onChange}/> ) : 
                    (title == "Language" ? (number.length ? number.map((n) => <Language onChange={onChange} onClick={onClick}/>) : <Language onChange={onChange} onClick={onClick}/> ) : 
                    (title == "Hobbies" ? (number.length ? number.map((n) => <Hobbies onChange={onChange} onClick={onClick}/>):<Hobbies onChange={onChange} onClick={onClick}/> ) : 
                    (title == "Profile" ? (number.length ? number.map((n) => <Profile onChange={onChange}/>):<Profile onChange={onChange}/> ) : 
                    (title == "Education"? (number.length ? number.map((n) => <Education onChange={onChange} onClick={onClick  }/>) : <Education onChange={onChange} onClick={onClick  }/> ) : 
                    (title == "Employment"?(number.length ? number.map((n) => <Employment onChange={onChange} onClick={onClick}/>) : <Employment onChange={onChange} onClick={onClick}/> ) : 
                    (title == "Skills"? (number.length?number.map((n) => <Skills  onChange={onChange} onClick={onClick}/>):<Skills onChange={onChange} onClick={onClick}/> ) : title))))))}
                  </div>
                </div>
            </div>
        </div>
    );
}