import { useState } from "react"
import Author from "./component/Author"

const Dashboard = function ({setBlogs, blogs}) {

    const [author, setAuthor] = useState(true)

    return (
        <>
        <div className="">
            <div className="">
                { author 
                    ? 
                        <div className="">
                            
                            <Author setBlogs={setBlogs} blogs={blogs}/>

                        </div>
                    :
                        <div className="">
                            {blogs.length > 1 
                                ? 
                                    <div className="">
                                        {blogs.forEach((blog, index) => {
                                            <div className="" key={index}>{blog}</div>
                                        })}
                                    </div>  
                                : 
                                    <></>
                            }
                            
                        </div>
                }   
                {/* <button>+ Write New Post</button> */}
            </div>
        </div>
        </>
    )
}

export default Dashboard
