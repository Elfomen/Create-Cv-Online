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

  return (
    <div className="row r">
      <div className="col-7">
        <PromtMainSide onChange={e => (setName(document.querySelector(`#${e}`).value) , setId(e))} />
      </div>
      <div className="col-5">
        <ViewSide list={data}/>
      </div>
    </div>
  );
}

export default App;
