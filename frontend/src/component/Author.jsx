import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"

import New from "./New"

const Author = function ({
    setBlogs, blogs, index, setIndex, tags, setTags, user, setUser
}) {
    const [add, setAdd] = useState(false)
    const [category, setCategory] = useState([])
    const [itemBlogs, setItemBlogs] = useState(blogs)
    const [itemList, setItemList] = useState("default")

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
                        <button
                            className="flex"
                            onClick={() => setAdd(true)}>
                            <VscAdd size={30} className="p-2" />
                            New Blog
                        </button>
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
                        <div className="bg-gray-50">
                            <div className="sm:px-20">
                                {blogs.length > 0
                                    ?
                                    <div className="p-2">
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
                                        <div className="p-1 w-full flex flex-wrap gap-4">
                                            {itemBlogs.map((itemb, x) => (
                                                <div className={
                                                    `rounded-lg shadow-lg flex flex-col bg-white
                                                    ${x === 0
                                                        ?
                                                            "sm:flex-row w-full"
                                                        :
                                                            "w-full sm:w-1/3"
                                                    }`}
                                                    key={x}>

                                                    <div
                                                        className={`
                                                            w-full bg-blue-500
                                                            ${x === 0 
                                                                ? 
                                                                    "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-1/2" 
                                                                : 
                                                                    "rounded-t-lg w-full"}
                                                            `}>
                                                        <div 
                                                            className="m-2 px-[5px] py-[1px] bg-white font-bold w-fit whitespace-nowrap rounded-full text-[12px] text-gray-900">
                                                            {itemb.category}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`
                                                            w-full p-2 w-full
                                                            ${x === 0 
                                                                ? 
                                                                    "sm:w-1/2"
                                                                : 
                                                                    ""
                                                            }`}>
                                                            <h1 className="text-black text-[25px] font-bold">{itemb.title}</h1>
                                                            <p className="text-gray-500">{itemb.excerpt}</p>
                                                    </div>
                                                </div>
                                            )
                                            )}
                                        </div>
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
