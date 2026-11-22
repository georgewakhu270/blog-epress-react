import { useState } from "react"
import New from "./New"

const Author = function({
    setBlogs, blogs, index, setIndex, tags, setTags
}){
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
                                <New 
                                    setBlogs={setBlogs} 
                                    blogs={blogs}
                                    tags={tags}
                                    setTags={setTags}
                                    index={index} 
                                    setAdd={setAdd}
                                    setIndex={setIndex}/>
                            </div>
                        :
                            <div className="">
                                <div className="">
                                    {tags.length > 0 
                                        ? 
                                            <div className="">
                                                {tags.map((tag, x) => (
                                                    <div className="" key={tag.name ?? x}>{tag.name} | content |= {tag.blog}</div>
                                                ))}
                                            </div>
                                        :
                                            <div className="">No tags</div>
                                    }
                                </div>
                            </div> 
                    }
                </div>

            </div>
        </>
    )
}

export default Author
