import React , {useState , useEffect , useContext} from 'react';
import ViewSide from './extraScript/viewer/viewSide';
import PromtMainSide from './extraScript/prompt/promptSide';
import MainData from './allData.json';

const dataNames = ["Personal_Details" , "Profile" , "Education" , "Employment" , "Skills" , "Languages" , "Hobbies"];

function App() {

  const [name , setName] = useState("");
  const [id , setId] = useState();
  const [data , setData] = useState(MainData);


  useEffect(() => {
    var newData = [];
    MainData.map(da => (da.id == 1 ? newData.push({...da , first_name : name}) : newData.push(da)));
    setData(newData);
  } , [name]);

  return (
    <div className="row r">
      <div className="col-7">
        <PromtMainSide onChange={e => setName(e)} id={idProp => setId(idProp)}/>
      </div>
      <div className="col-5">
        <ViewSide list={data}/>
      </div>first_name
    </div>
  );
}

export default App;
