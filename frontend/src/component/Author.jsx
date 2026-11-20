import { useState } from "react"
import New from "./New"

const Author = function({setBlogs, blogs}){
    const [add, setAdd] = useState(false)
    return (
        <> 
            <div className="">
                <div className="">
                    {!add 
                        ? 
                            <button className="" onClick={()=>setAdd(true)}>+ New Blog</button>
                        :
                            <></>
                    }
                </div>
                
                <div className="">
                    {add 
                        ?
                            <div className="">
                                <New setBlogs={setBlogs}/>
                            </div>
                        :
                            <div className=""></div> 
                    }
                </div>

            </div>
        </>
    )
}

export default Author
