
import axios from "axios"
import {React,useEffect, useState} from "react"
import JokeCategory from './JokeCategory';
function JokeCategoryList() {
    const [data, setData] = useState([])

  const fetchData=async()=>{
 try{
  const response=await axios.get("https://api.chucknorris.io/jokes/categories")
  console.log(response.data)
  setData(response.data)
 }
 catch(Error){
  console.log(Error)
 }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="parentDiv">
    <h1 className="headerstyle">Chuck Norries</h1>
    <JokeCategory category={data}/>
</div>
  )
}

export default JokeCategoryList
