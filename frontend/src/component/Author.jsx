import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { FaArrowRight } from "react-icons/fa"

import New from "./New"

const Author = function ({
    setBlogs, blogs, index, setIndex, tags, setTags, user, setUser
}) {
    const [add, setAdd] = useState("default")
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
                <div className="flex p-1">
                    {add !== "add blog"
                        ?
                        <button
                            className="flex border-[1.7px] px-1 rounded-full border-gray-400 text-gray-500 mx-2 text-sm"
                            onClick={() => setAdd("add blog")}>
                            <VscAdd size={27} className="p-2" />
                            <span className="p-1">New Blog</span>                            
                        </button>
                        :
                        <></>
                    }
                    <div 
                        className="border-l-2 border-gray-400 flex">
                            <img 
                                alt={user.name} 
                                className="h-[30px] object-cover mx-2 mt-1 border-2 border-yellow-200 rounded-full w-[30px] " src={user.img}/>
                            <p className="text-gray-500">{user.name}</p>
                        </div>
                </div>

                <div className="">
                    {add === "add blog"
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
                                                            "w-full sm:w-[calc(33.33%-0.67rem)]"
                                                    }`}
                                                    key={x}>

                                                    <div
                                                        className={`
                                                            w-full relative overflow-hidden
                                                            ${x === 0 
                                                                ? 
                                                                    "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-3/5" 
                                                                : 
                                                                    "rounded-t-lg w-full"}
                                                            `}>
                                                        <div 
                                                            className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-white font-bold w-fit whitespace-nowrap rounded-full text-[12px] text-gray-900 shadow">
                                                            {itemb.category}
                                                        </div>
                                                        <img 
                                                            src={itemb.img} 
                                                            alt={itemb.title} 
                                                            className="w-full h-full object-cover" />

                                                    </div>

                                                    <div
                                                        className={`
                                                            w-full p-2 w-full sm:p-10 flex flex-col
                                                            ${x === 0 
                                                                ? 
                                                                    "sm:w-2/5"
                                                                : 
                                                                    ""
                                                            }`}>
                                                            <h1 className="text-black text-[25px] font-bold">{itemb.title}</h1>
                                                            <p className="text-gray-500">{itemb.excerpt}</p>
                                                            <div className="mt-auto flex justify-between border-t-2 border-yellow-100 pt-3">
                                                                <div className="flex">
                                                                    <div className="">
                                                                        <img 
                                                                            src={user.img} 
                                                                            alt="" 
                                                                            className="rounded-full h-15 object-cover w-15 border-2 border-yellow-200"/>
                                                                    </div>
                                                                    <div className="flex"></div>
                                                                </div>
                                                                <button className="flex text-gray-500">
                                                                    <span className="">Read</span>
                                                                    <div className="p-1">
                                                                        <FaArrowRight/>
                                                                    </div>
                                                                </button>
                                                            </div>
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
