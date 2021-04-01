import React , {useState , useEffect , useContext} from 'react';
import ViewSide from './extraScript/viewer/viewSide';
import PromtMainSide from './extraScript/prompt/promptSide';
import ExecuteUseEffect from './executeUseEffects';

import Export from './ExportPdf';

import MainData from './allData.json';





const dataNames = ["Personal_Details" , "Profile" , "Education" , "Employment" , "Skills" , "Languages" , "Hobbies"];
var newData = [];
var Main = MainData;
  
function App(){

  const [name , setName] = useState("");
  const [id , setId] = useState();
  const [data , setData] = useState(Main);
  const [clicked , setClicked] = useState("");
  const [viewed , setViewed] = useState("");





  // use effect for the personal details ****************************************************
  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;

    if(id!="name" && id!="l_name" && id!="email" && id!="phone" && id != "adress" && id!="zip" && id!="city" && 
    id!="lin" && id!="git" && id!="port" && id!="bd" && id!="dl") return null;

    newData = Main;
    if (id=="name") newData[0].first_name = name;
    if (id=="l_name") newData[0].last_name = name;
    if (id=="email") newData[0].email_adress = name;
    if (id=="phone") newData[0].phone_number = name;
    if (id=="adress") newData[0].adress = name;
    if (id=="zip") newData[0].zip_code = name;
    if (id=="city") newData[0].city = name;
    if (id=="lin") newData[0].lin = name;
    if (id=="git") newData[0].git = name;
    if (id=="port") newData[0].port_folio = name;
    if (id=="bd") newData[0].birth_date = name;
    if (id=="dl") newData[0].drivers_licence = name;
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  // End ************************************************************************************

  /// The use Effec for the Languages

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

  // The useEffects for the hobby

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


  // The profile use Effect ******************************************************************


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


  // The educational use Effect *************************************************************

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="education" && id!="school" && id!="cit" && id!="start_date" && id!="end_date" && id!="education_description") return null;
    newData = Main;

    if(id == "education") newData[2].educational_number[newData[2].educational_number.length -1].education = name;
    if(id=="school") newData[2].educational_number[newData[2].educational_number.length -1].school = name;
    if(id == "cit")  newData[2].educational_number[newData[2].educational_number.length -1].city =name;
    if(id=="start_date") newData[2].educational_number[newData[2].educational_number.length -1].educational_start_date = name;
    if(id == "end_date") newData[2].educational_number[newData[2].educational_number.length -1].educational_end_date = name;
    if(id == "education_description")  newData[2].educational_number[newData[2].educational_number.length -1].educational_description =name; 
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  ///////////////// Educational button click
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

///// End of the educational Effect ******************************************************************************


  /// Employment use Effects *************************************************************************************

  useEffect(() => {
    if(!data.length) return null;
    if(id==null) return null;
    if(id!="position" && id!="employer" && id!="employment_city" &&
       id!="employment_start_date" && id!="employment_end_date" && id!="employment_description") return null;
    newData = Main;


    if(id=="position") newData[3].employment_number[newData[3].employment_number.length -1].position = id=="position" ? name : newData[3].employment_number[newData[3].employment_number.length -1].position;
    if(id=="employer")  newData[3].employment_number[newData[3].employment_number.length -1].employer = name;
    if(id=="employment_city") newData[3].employment_number[newData[3].employment_number.length -1].city = name; 
    if(id=="employment_start_date") newData[3].employment_number[newData[3].employment_number.length -1].employment_start_date = name ;
    if(id=="employment_end_date") newData[3].employment_number[newData[3].employment_number.length -1].employment_end_date = name ;
    if(id=="employment_description") newData[3].employment_number[newData[3].employment_number.length -1].employment_description = name ;
    
    setData(newData);
      Main = newData;
    setId(null);
  } , [id]);

  /////////////// Employment button click

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

  

  // the skill useEffect ************************************************************************************


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

////End of useEffect ************************************************************************************************









  /// the view side and modified effect views ********************************************************************



  function setEmploymentValues(){
    newData = Main;
    document.getElementById("position").value = newData[3].employment_number[newData[3].employment_number.length - 1].position; 
    document.getElementById("employer").value = newData[3].employment_number[newData[3].employment_number.length - 1].employer; 
    document.getElementById("employment_city").value = newData[3].employment_number[newData[3].employment_number.length - 1].city; 
    document.getElementById("employment_start_date").value = newData[3].employment_number[newData[3].employment_number.length - 1].employment_start_date; 
    document.getElementById("employment_end_date").value = newData[3].employment_number[newData[3].employment_number.length - 1].employment_end_date; 
    document.getElementById("employment_description").value = newData[3].employment_number[newData[3].employment_number.length - 1].employment_description; 
  }

  function setEducation(){
    newData = Main;
    document.getElementById("education").value = newData[2].educational_number[newData[2].educational_number.length - 1].education;
    document.getElementById("school").value = newData[2].educational_number[newData[2].educational_number.length - 1].school;
    document.getElementById("cit").value = newData[2].educational_number[newData[2].educational_number.length - 1].city;
    document.getElementById("start_date").value = newData[2].educational_number[newData[2].educational_number.length - 1].educational_start_date;
    document.getElementById("end_date").value = newData[2].educational_number[newData[2].educational_number.length - 1].educational_end_date;
    document.getElementById("education_description").value = newData[2].educational_number[newData[2].educational_number.length - 1].educational_description;
  }

  useEffect(() => {
    //if(viewed[1]!="e" && viewed[2]!="m" && viewed[3]!="p") return null;

    newData = Main;
    var change = []
    if(viewed=="employment0"){
      change = newData[3].employment_number[newData[3].employment_number.length - 1];
      newData[3].employment_number[newData[3].employment_number.length - 1] = newData[3].employment_number[0];
      newData[3].employment_number[0] = change;
    }else if(viewed=="employment1"){
      change = newData[3].employment_number[newData[3].employment_number.length - 1];
      newData[3].employment_number[newData[3].employment_number.length - 1] = newData[3].employment_number[1];
      newData[3].employment_number[1] = change;
    }else if(viewed == "employment2"){
      change = newData[3].employment_number[newData[3].employment_number.length - 1];
      newData[3].employment_number[newData[3].employment_number.length - 1] = newData[3].employment_number[2];
      newData[3].employment_number[2] = change;
    }else if(viewed == "employment2"){
      change = newData[3].employment_number[newData[3].employment_number.length - 1];
      newData[3].employment_number[newData[3].employment_number.length - 1] = newData[3].employment_number[3];
      newData[3].employment_number[3] = change;
    }else if(viewed == "employment2"){
      change = newData[3].employment_number[newData[3].employment_number.length - 1];
      newData[3].employment_number[newData[3].employment_number.length - 1] = newData[3].employment_number[4];
      newData[3].employment_number[4] = change;
    }
    

    setEmploymentValues()
    setData(newData);
    Main = newData;
    setViewed("")
  } , [viewed])


  useEffect(() => {
    if(viewed!="education0"&&viewed!="education1"&&viewed!="education2"&&viewed!="education3"&&viewed!="education4")return null;
    var change = []
    newData = Main;
    if(viewed=="education0"){
      change = newData[2].educational_number[newData[2].educational_number.length - 1];
      newData[2].educational_number[newData[2].educational_number.length - 1] = newData[2].educational_number[0];
      newData[2].educational_number[0] = change;
    }else if(viewed=="education1"){
      change = newData[2].educational_number[newData[2].educational_number.length - 1];
      newData[2].educational_number[newData[2].educational_number.length - 1] = newData[2].educational_number[1];
      newData[2].educational_number[1] = change;
    }else if(viewed == "education2"){
      change = newData[2].educational_number[newData[2].educational_number.length - 1];
      newData[2].educational_number[newData[2].educational_number.length - 1] = newData[2].educational_number[2];
      newData[2].educational_number[2] = change;
    }else if(viewed == "education3"){
      change = newData[2].educational_number[newData[2].educational_number.length - 1];
      newData[2].educational_number[newData[2].educational_number.length - 1] = newData[2].educational_number[3];
      newData[2].educational_number[3] = change;
    }else if(viewed == "education4"){
      change = newData[2].educational_number[newData[2].educational_number.length - 1];
      newData[2].educational_number[newData[2].educational_number.length - 1] = newData[2].educational_number[4];
      newData[2].educational_number[4] = change;
    }

    setEducation()
    setData(newData);
    Main = newData;
    setViewed("")

  } , [viewed]);

  // Function for the language and hobby modification

  function setLanguageOrHobby(what){
    newData = Main;
    if(what=="language"){
      document.getElementById("language").value = newData[5].language_number[newData[5].language_number.length - 1].name;
      document.getElementById("range").value = newData[5].language_number[newData[5].language_number.length - 1].level;
    }else if(what == "hobby"){
      document.getElementById("hobby").value = newData[6].hobby_number[newData[6].hobby_number.length - 1].name;
      document.getElementById("range_hobby").value = newData[6].hobby_number[newData[6].hobby_number.length - 1].level;
    }else{
      document.getElementById("skill").value = newData[4].skill_number[newData[4].skill_number.length - 1].skill;
      document.getElementById("skill_range").value = newData[4].skill_number[newData[4].skill_number.length - 1].skill_level;
    }
  }

  useEffect(() => {
    if(viewed!="language0"&&viewed!="language1"&&viewed!="language2"&&viewed!="language3"&&viewed!="language4"
    &&viewed!="language5") return null;
    var change = [];
    newData = Main;

    if(viewed=="language0"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[0];
      newData[5].language_number[0] = change;
    }else if(viewed=="language1"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[1];
      newData[5].language_number[1] = change;
    }else if(viewed=="language2"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[2];
      newData[5].language_number[2] = change;
    }else if(viewed=="language3"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[3];
      newData[5].language_number[3] = change;
    }else if(viewed=="language4"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[4];
      newData[5].language_number[4] = change;
    }else if(viewed=="language5"){
      change = newData[5].language_number[newData[5].language_number.length - 1]
      newData[5].language_number[newData[5].language_number.length - 1] = newData[5].language_number[5];
      newData[5].language_number[5] = change;
    }


    setLanguageOrHobby("language");
    setData(newData);
    Main = newData;
    setViewed("")
  } , [viewed])

  // the skill change

  useEffect(() => {
    if(viewed!="skill0"&&viewed!="skill1"&&viewed!="skill2"&&viewed!="skill3"&&viewed!="skill4"&&viewed!="skill5") return null;
    var change = []
    newData = Main;

    if(viewed == "skill0"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[0];
      newData[4].skill_number[0] = change;
    }else if(viewed == "skill1"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[1];
      newData[4].skill_number[1] = change;
    }else if(viewed == "skill2"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[2];
      newData[4].skill_number[2] = change;
    }else if(viewed == "skill3"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[3];
      newData[4].skill_number[3] = change;
    }else if(viewed == "skill4"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[4];
      newData[4].skill_number[4] = change;
    }else if(viewed == "skill5"){
      change = newData[4].skill_number[newData[4].skill_number.length - 1];
      newData[4].skill_number[newData[4].skill_number.length - 1] = newData[4].skill_number[5];
      newData[4].skill_number[5] = change;
    }

    setLanguageOrHobby("skill");
    setData(newData);
    Main = newData;
    setViewed("")
  } , [viewed])

  /// finally the hobby changes

  useEffect(() => {
    if(viewed!="hobby0"&&viewed!="hobby1"&&viewed!="hobby2"&&viewed!="hobby3"&&viewed!="hobby4"&&viewed!="hobby5")return null;
    var change = [];
    newData = Main;

    if(viewed == "hobby0"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[0];
      newData[6].hobby_number[0] = change;
    }else if(viewed == "hobby1"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[1];
      newData[6].hobby_number[1] = change;
    }else if(viewed == "hobby2"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[2];
      newData[6].hobby_number[2] = change;
    }else if(viewed == "hobby3"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[3];
      newData[6].hobby_number[3] = change;
    }else if(viewed == "hobby4"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[4];
      newData[6].hobby_number[4] = change;
    }else if(viewed == "hobby5"){
      change = newData[6].hobby_number[newData[6].hobby_number.length - 1];
      newData[6].hobby_number[newData[6].hobby_number.length - 1] = newData[6].hobby_number[5];
      newData[6].hobby_number[5] = change;
    }

    setLanguageOrHobby("hobby");
    setData(newData);
    Main = newData;
    setViewed("")
  } , [viewed])



  /// the delete clicked for langauges and all the rest ********************************>

  useEffect(() => {
    newData = Main;
    var new_element_number = [];
    if(clicked == "delete_lan_clicked"){
      newData[5].language_number.map((lan , i) => i<newData[5].language_number.length - 1&&new_element_number.push(newData[5].language_number[i]));
      newData[5].language_number = [...new_element_number];
      new_element_number = []
      setLanguageOrHobby("language");
      console.log(newData[5].language_number);
    }else if(clicked == "delete_hob_clicked"){
      newData[6].hobby_number.map((hob , i) => i<newData[6].hobby_number.length - 1&& new_element_number.push(newData[6].hobby_number[i]));
      newData[6].hobby_number = [...new_element_number];
      new_element_number = []
      setData(newData);
      setLanguageOrHobby("hobby");
    }else if(clicked== "delete_education_click"){
      newData[2].educational_number.map((ed , i) => i < newData[2].educational_number.length - 1&&new_element_number.push(newData[2].educational_number[i]));
      newData[2].educational_number = [...new_element_number];
      new_element_number = []
      setData(newData);
      setEducation();
    }else if(clicked == "delete_employment_click"){
      newData[3].employment_number.map((em , i) => i < newData[3].employment_number.length - 1&&new_element_number.push(newData[3].employment_number[i]));
      newData[3].employment_number = [...new_element_number];
      new_element_number = []
      setData(newData);
      setEmploymentValues();
    }else if(clicked == "delete_skill_clicked"){
      newData[4].skill_number.map((s , i) => i < newData[4].skill_number.length - 1 && new_element_number.push(newData[4].skill_number[i]));
      newData[4].skill_number = [...new_element_number];
      new_element_number = [];
      setData(newData);
      setLanguageOrHobby("skill"); 
    }



    Main = newData;
    
    setClicked("");
  } , [clicked])

  return (
    <>
    <Export name="Fomena_Wouati_Yannick"/>
    <div className="row ">
      <div className="col-6">
        <PromtMainSide onChange={e => (setName(document.querySelector(`#${e}`).value) , setId(e))} 
        onClick={(e) => setClicked(e)}/>
      </div>
      <div className="col-5" style={{margin:0}}>
        <ViewSide list={data} onClick = {e => setViewed(e)}/>
      </div>
    </div>
    </>
  );
}
export default App;
