import { useState } from "react"
import Author from "./component/Author"

const Dashboard = function () {

    const [author, setAuthor] = useState(true)

    return (
        <>
        <div className="">
            <div className="">
                { author 
                    ? 
                        <div className="">
                            
                            <Author/>

                        </div>
                    :
                        <div className=""></div>
                }   
                {/* <button>+ Write New Post</button> */}
            </div>
        </div>
        </>
    )
}

export default Dashboard
