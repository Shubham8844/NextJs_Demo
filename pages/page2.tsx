import React from 'react'
import styles from "../styles/Page2.module.css"
import {useRouter} from "next/router"

function page2() {
    const router=useRouter()
    console.log(router)
    const handleClick=()=>{
            router.push("/")
    }
    return (
        <div className={styles.container}>
            <h1>Hi </h1>
            <h1>There</h1>
            <button onClick={handleClick}>Home</button>
        </div>
    )
}

export default page2
