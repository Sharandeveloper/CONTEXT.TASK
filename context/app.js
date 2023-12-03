import react, { useEffect } from 'react';
import axios from 'axios';


 function app() {
    const [users,setusers] = usestate([]);
    const [name,setname] = usestate("");
    const [trigger,setrigger] = usestate(false);
    useEffect(() => {

    

   axios.get('http://jsonplaceholder.typicode.com/user'),

    .then (res => setusers(res.datastorekk))
 })

    
    const updateuser = () => {('http://jsonplaceholder.typicode.com/user', {id:id++,name:name})
   axios.post(res => res.json)
    .then(res => setusers(...users,res.data)).when(() => setrigger(!trigger))
    }
    return (
        <div>
            {users.map((u,i) => {
                return (
                    <div key={u.id}>
                        {u.name}
                        </div>
                )
            })}
          
           <input type= "text" value= {name} onChange={(e) => setname(e.target.value)}/>
           <button onclick={postuser}>post</button> 
            </div>
    )
 }
 {


 }
 export default app;

 