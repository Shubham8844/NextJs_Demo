
export default function Page1(){
    return(
        <div>
        <h1 className="red">I am page1</h1>
        <style jsx global> 
            {`
                 h1{
                    color:red;
                }
                
            `}
        </style>
        </div>
    )
}