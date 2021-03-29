import React , {useState , useEffect , useContext} from 'react';
import ViewSide from './extraScript/viewer/viewSide';
import PromtMainSide from './extraScript/prompt/promptSide';
import ExecuteUseEffect from './executeUseEffects';


import MainData from './allData.json';





const dataNames = ["Personal_Details" , "Profile" , "Education" , "Employment" , "Skills" , "Languages" , "Hobbies"];
var newData = [];
var Main = MainData;
  
function App(){

  const [name , setName] = useState("");
  const [id , setId] = useState();
  const [data , setData] = useState(Main);
  const [clicked , setClicked] = useState("");


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "name" ? newData.push({...da , first_name : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "l_name" ? newData.push({...da , last_name : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "email" ? newData.push({...da , email_adress : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


 
  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "phone" ? newData.push({...da , phone_number : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "adress" ? newData.push({...da , adress : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "zip" ? newData.push({...da , zip_code : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);
  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "city" ? newData.push({...da , city : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "lin" ? newData.push({...da , lin : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "git" ? newData.push({...da , git : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "port" ? newData.push({...da , port_folio : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "bd" ? newData.push({...da , birth_date : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "dl" ? newData.push({...da , drivers_licence : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  /// The onChange for the Languages

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];

    function setLanguageNumber(id){
      var language_number = Main[5].language_number;
      language_number[language_number.length -1].name = id=="language"? name : language_number[language_number.length - 1].name ;

      return language_number;
    }

    var language_number = setLanguageNumber(id);

    
    Main.map(da => (
      
      id == "language" ? newData.push({...da , language : name , language_number : [...language_number]}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];

    var language_number = Main[5].language_number;
      language_number[language_number.length -1].level = id=="range"? name : language_number[language_number.length - 1].level;

    
    Main.map(da => (
      
      id == "range" ? newData.push({...da , language_number : [...language_number]}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];

    var hobby_number = Main[6].hobby_number;
      hobby_number[hobby_number.length -1].level = id=="range_hobby"? name : hobby_number[hobby_number.length - 1].level;

    
    Main.map(da => (
      
      id == "range_hobby" ? newData.push({...da , hobby_number : [...hobby_number]}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];

    function setHobby(id){
      var hobby_number = Main[6].hobby_number;
      hobby_number[hobby_number.length -1].name = id=="hobby"? name : hobby_number[hobby_number.length - 1].name ;

      return hobby_number;
    }

    var hobby_number = setHobby(id);

    
    Main.map(da => (
      
      id == "hobby" ? newData.push({...da , hobby : name , hobby_number : [...hobby_number]}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);




  useEffect(() => {
    if(clicked!="lan_clicked") return null;
    document.querySelector("#language").value = "";
    document.querySelector("#range").value = 0;
    newData = Main;
    var language_number = newData[5].language_number;
    
    newData[5].language_number = [...language_number , {name:"" , level : 0}];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])

  useEffect(() => {
    if(clicked!="hob_clicked") return null;

    document.querySelector("#hobby").value = "";
    document.querySelector("#range_hobby").value = 0;
    newData = Main;
    var hobby_number = newData[6].hobby_number;
    
    newData[6].hobby_number = [...hobby_number , {name:"" , level : 0}];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])


  // The profile use Effect


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = [];
    Main.map(da => (
      
      id == "profile" ? newData.push({...da , profile_describtion : name}): newData.push(da)),
      
      );
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  // The educational use Effect

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].education = id=="education" ? name : newData[2].educational_number[newData[2].educational_number.length -1].education;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].school = id=="school" ? name : newData[2].educational_number[newData[2].educational_number.length -1].school;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].city = id=="cit" ? name : newData[2].educational_number[newData[2].educational_number.length -1].city;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].educational_start_date = id=="start_date" ? name : newData[2].educational_number[newData[2].educational_number.length -1].educational_start_date;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].educational_end_date = id=="end_date" ? name : newData[2].educational_number[newData[2].educational_number.length -1].educational_end_date;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    
    newData = Main;
    newData[2].educational_number[newData[2].educational_number.length -1].educational_description = id=="education_description" ? name : newData[2].educational_number[newData[2].educational_number.length -1].educational_description;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(clicked!="education_click") return null;

    document.querySelector("#education").value = "";
    document.querySelector("#school").value = "";
    document.querySelector("#cit").value = "";
    document.querySelector("#start_date").value = "";
    document.querySelector("#end_date").value = "";
    document.querySelector("#education_description").value = "";
    newData = Main;
    var educational_number = newData[2].educational_number;
    
    newData[2].educational_number = [...educational_number , {education : "",school : "" , city : "" ,educational_start_date: "" , educational_end_date : "" , educational_description : ""}];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])




  /// Employment use Effects

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="position") return null;
    newData = Main;
    newData[3].employment_number[newData[3].employment_number.length -1].position = id=="position" ? name : newData[3].employment_number[newData[3].employment_number.length -1].position;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

   useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="employer") return null;
    newData = Main;
    newData[3].employment_number[newData[3].employment_number.length -1].employer = id=="employer" ? name : newData[3].employment_number[newData[3].employment_number.length -1].employer;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

   useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="employment_city") return null;
    newData = Main;
    newData[3].employment_number[newData[3].employment_number.length -1].city = id=="employment_city" ? name : newData[3].employment_number[newData[3].employment_number.length -1].city;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="employment_start_date" && id!="employment_end_date" && id!="employment_description") return null;
    newData = Main;

    if(id=="employment_start_date")
      newData[3].employment_number[newData[3].employment_number.length -1].employment_start_date = id=="employment_start_date" ? name : newData[3].employment_number[newData[3].employment_number.length -1].employment_start_date;
    else if(id=="employment_end_date")
      newData[3].employment_number[newData[3].employment_number.length -1].employment_end_date = id=="employment_end_date" ? name : newData[3].employment_number[newData[3].employment_number.length -1].employment_end_date;
    else
      newData[3].employment_number[newData[3].employment_number.length -1].employment_description = id=="employment_description" ? name : newData[3].employment_number[newData[3].employment_number.length -1].employment_description;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(clicked!="employment_click") return null;

    document.querySelector("#position").value = "";
    document.querySelector("#employment_city").value = "";
    document.querySelector("#employer").value = "";
    document.querySelector("#employment_start_date").value = "";
    document.querySelector("#employment_end_date").value = "";
    document.querySelector("#employment_description").value = "";
    newData = Main;
    var employment_number = newData[3].employment_number;
    
    newData[3].employment_number = [...employment_number , {
                position : "" , 
                employer : "" , 
                city : "" , 
                employment_start_date : "" , 
                employment_end_date : "" , 
                employment_description : ""
            }];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])

  

  // the skill useEffect


  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="skill" && id!="skill_range") return null;
    newData = Main;

    if(id=="skill")
      newData[4].skill_number[newData[4].skill_number.length -1].skill = id=="skill" ? name : newData[4].skill_number[newData[4].skill_number.length -1].skill;
    else
      newData[4].skill_number[newData[4].skill_number.length -1].skill_level = id=="skill_range" ? name : newData[4].skill_number[newData[4].skill_number.length -1].skill_level;
      
    setData(newData);
    Main = newData;
    setId(null);
  } , [id]);

  useEffect(() => {
    if(clicked!="skill_clicked") return null;
    document.querySelector("#skill").value = "";
    document.querySelector("#skill_range").value = 0;
    newData = Main;
    var skill_number = newData[4].skill_number;
    
    newData[4].skill_number = [...skill_number , {skill:"" , skill_level : 0}];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])



  return (
    <div className="row r">
      <div className="col-7">
        <PromtMainSide onChange={e => (setName(document.querySelector(`#${e}`).value) , setId(e))} 
        onClick={(e) => setClicked(e)}/>
      </div>
      <div className="col-5">
        <ViewSide list={data}/>
      </div>
    </div>
  );
}
export default App;
