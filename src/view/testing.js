import React, {useState} from "react";

const linkTesting = "https://pf9x7dtw45.execute-api.us-east-2.amazonaws.com/Testing/testing";

function TesterFunction(){
    const [testList,setTestList] = useState([
        {
            id: "",
            nameUser: ""
        }
    ]);

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
        await fetch(linkTesting);
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