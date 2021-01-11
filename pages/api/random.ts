export default function (req,res){
    res.setHeader("Content-Type","application/json")
    console.log("Hi")
    console.log("Request Method",req.method)
    console.log("Request Url",req.url)
    console.log("Query Parameter",req.query)
    // send request from client side :-fetch("http://localhost:3000/api/random",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Tom",address:"High School MAgical"})})
    console.log("Request Body",req.body.address)

    res.setHeader("Set-Cookie","login=true")
    res.json({ num : Math.floor(Math.random()*10) })
    
    
}