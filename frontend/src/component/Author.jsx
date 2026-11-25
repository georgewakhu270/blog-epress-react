import { useEffect, useState } from "react"
import New from "./New"

const Author = function ({
    setBlogs, blogs, index, setIndex, tags, setTags, user, setUser
}) {
    const [add, setAdd] = useState(false)
    const [category, setCategory] = useState([])

    useEffect(
        function () {
            let itemCateg = new Set()
            blogs.forEach((blog) => {
                if (blog?.category) {
                    itemCateg.add(blog.category);
                }
            });
            setCategory([...itemCateg])
        },
        [blogs]
    )

    return (
        <>
            <div className="">
                <div className="">
                    {!add
                        ?
                        <button className="" onClick={() => setAdd(true)}>+ New Blog</button>
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
                                user={user}
                                setIndex={setIndex} />
                        </div>
                        :
                        <div className="">
                            <div className="">
                                {blogs.length > 0
                                    ?
                                    <div className="p-2 bg-gray-100">
                                        <div className="flex p-1">
                                            <button className="">all</button>
                                            {Array.isArray(category) &&
                                                category.map((categ, x) => (
                                                    <button type="button" className="" key={categ ?? x}>
                                                        {categ}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                        <div className=""></div>
                                    </div>
                                    :
                                    <div className="flex p-2 justify-center items-center bg-gray-100 min-h-[50vh]">
                                        <h1 className="">You have no blogs</h1>
                                    </div>
                                }
                                {/* {tags.length > 0 
                                        ? 
                                            <div className="flex p-2 gap-1">
                                                <button className="border p-[2px] rounded">all</button>
                                                {tags.map((tag, x) => (
                                                    <button className="border p-[2px] rounded" key={tag.name ?? x}>{tag.name}</button>
                                                ))}
                                            </div>
                                        :
                                            <div className="">No tags</div>
                                    } */}
                            </div>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Author
