import React , {useState , useEffect , useContext} from 'react';
import ViewSide from './extraScript/viewer/viewSide';
import PromtMainSide from './extraScript/prompt/promptSide';
import MainData from './allData.json';

const dataNames = ["Personal_Details" , "Profile" , "Education" , "Employment" , "Skills" , "Languages" , "Hobbies"];
var newData = [];
var Main = MainData;
function App() {

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
    newData = Main;
    var language_number = newData[5].language_number;
    
    newData[5].language_number = [...language_number , {name:"" , level : 0}];

    setData(newData);
    Main = newData;
    setClicked(null)
  } , [clicked])

  useEffect(() => {
    if(clicked!="hob_clicked") return null;
    newData = Main;
    var hobby_number = newData[6].hobby_number;
    
    newData[5].hobby_number = [...hobby_number , {name:"" , level : 0}];

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
