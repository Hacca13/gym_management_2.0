import React, {useState} from "react";
import axios from "axios";

const linkTesting = "https://3fuezjznz6.execute-api.eu-west-1.amazonaws.com/testing";

function TesterFunction(){
    const [testList,setTestList] = useState([
        {
            id: "",
            nameUser: ""
        }
    ]);
    const api = axios.create({
        baseURL: linkTesting
    });

    const contactServer = async () => {
       /* const response = await fetch(linkTesting).then((response) => {console.log(response.json())
            return response.json()

        }).then((res)=>{
            var tempList=[];

            for (var i = 0; i < res.length; i++) {
                var tempItem = {
                    id: "",
                    nameUser: "",
                };
                tempItem.id = res[i].id;
                tempItem.nameUser = res[i].nameUser;
                tempList.push(tempItem);
            }

            setTestList(tempList);
        });*/
        api.get('/').then(res => {
            var tempList=[];
            let resBody = res.data.body;

            for(var i=0;i<resBody.length;i++){
                var tempItem = {
                    id: "",
                    nameUser: "",
                };
                tempItem.id = resBody[i].id;
                tempItem.nameUser = resBody[i].nameUser;
                tempList.push(tempItem);
            }
            setTestList(tempList)

        });

    };

    return(
        <>

            <h1>Ciao</h1>
            <p>parametri</p>
            {testList.map((item,idx)=>(
                <>
                    <p>item id = {item.id}</p>
                    <p>item name = {item.nameUser}</p>
                </>

            ))}
            <button onClick={contactServer}>Aggirona lista</button>
        </>
    );
}

export default TesterFunction;