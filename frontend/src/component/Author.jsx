import { useState } from "react";
import { VscAdd } from "react-icons/vsc";

import New from "./New";
import ReadBlog from "./ReadBlog";
import DefaultBlogView from "./DefaultBlogView";
import EditBlog from "./EditBlog";

const Author = function ({
  setBlogs,
  blogs,
  index,
  setIndex,
  tags,
  setTags,
  user,
  setUser,
}) {
  const [add, setAdd] = useState("default");
  const [itemBlogs, setItemBlogs] = useState(blogs);
  const [itemList, setItemList] = useState("default");
  const [itemRead, setItemRead] = useState();

  return (
    <>
      <div className="">
        <div className="flex justify-between sm:px-20 sm:py-2">
          <div className=""></div>
          <div className="flex p-1">
            {add !== "add blog" ? (
              <button
                className="flex border-[1.7px] px-1 py-1 rounded-full bg-yellow-500 border-yellow-600 text-[beige] font-bold mx-2 text-sm"
                onClick={() => setAdd("add blog")}
              >
                <VscAdd size={27} className="p-1 font-700" />
                <span className="p-1">New Blog</span>
              </button>
            ) : (
              <></>
            )}
            <div className="border-l-2 border-gray-400 flex">
              <img
                alt={user.name}
                className="h-[38px] object-cover mx-2 mt-1 border-2 border-yellow-200 rounded-full w-[38px] "
                src={user.img}
              />
              <div className="p-1">
                <p className="text-black text-xs uppercase font-bold">{user.name}</p>
                <p className="text-gray-400 text-xs uppercase">{user.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {add === "add blog" ? (
            <div className="">
              <New
                setBlogs={setBlogs}
                blogs={blogs}
                tags={tags}
                setTags={setTags}
                index={index}
                setAdd={setAdd}
                user={user}
                setIndex={setIndex}
              />
            </div>
          ) : add === "default" ? (
            <DefaultBlogView 
              blogs={blogs} 
              setAdd={setAdd} 
              setItemRead={setItemRead}/>
          ) : add === "read" ? (
            <div className="" >
              <ReadBlog 
                blog={itemRead} 
                setAdd={setAdd}/>
            </div>
          ) : add === "edit" ?(
            <div className="">
              <EditBlog blog={itemRead} setAdd={setAdd} setBlogs={setBlogs}
                blogs={blogs}
                tags={tags}
                setTags={setTags}
                index={index} user={user}
                setIndex={setIndex}/>
            </div>
          )
            :(
            <div className=""></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Author;
