import React,{useEffect,useState} from 'react';
import Loading from './Loading.jsx';

const UseEffectAPI = () => {

    const [user, setUser] = useState([])
    const [loading,setloading]=useState(true);

    const getUser=async()=>{
        try{
            setloading(false)   
            const resp=await fetch('https://api.github.com/users');
            setUser(await resp.json());
        }
        catch(error){
            console.log("my error is"+error);
        }
        //console.log(data);
    }

    useEffect(()=>{
        getUser();
    },[])

    if(loading){
        return <Loading/>
    }

    return (
        <>
            <h2 className="text-center my-3">List of Github Users</h2>
            <div className="container-fluid">
                <div className="row text-center">
                    {
                        user.map((curEle)=>{
                            return(
                                <>
                        <div className="col-md-4 col-10 mt-5">
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                    <div className="image"> <img src={curEle.avatar_url} className="rounded" width="155" /></div>
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{curEle.login}</h4><span className="textleft">Web Dev</span>
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">

                                                <div className="d-flex flex-column"><span className="articles">Articles</span> <span className="number1">{curEle.id}</span></div>
                                                <div className="d-flex flex-column"><span className="followers">Followers</span> <span className="number2">980</span></div>
                                                <div className="d-flex flex-column"><span className="rating">Rating</span> <span className="number3">8.9</span></div>

                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI;