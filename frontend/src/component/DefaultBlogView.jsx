import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const DefaultBlogView = function ({
  blogs, setAdd, setItemRead
}) {
  const [itemBlogs, setItemBlogs] = useState(blogs);
  const [category, setCategory] = useState([]);

  useEffect(
    function () {
      let itemCateg = new Set();
      blogs.forEach((blog) => {
        if (blog?.category) {
          itemCateg.add(blog.category);
        }
      });
      setCategory([...itemCateg]);
    },
    [blogs],
  );

  const readBlog = function(item){
    setAdd("read")
    setItemRead(item)
  }

  return (
    <div className="bg-gray-50">
      <div className="sm:px-20">
        {itemBlogs.length > 0 ? (
            <div className="p-2">
              <div className="flex p-1">
                <button className="">all</button>
                {Array.isArray(category) &&
                  category.map((categ, x) => (
                    <button 
                      className="" 
                      key={categ ?? x} 
                      type="button">
                        {categ}
                      </button>
                  ))
                }
              </div>
              <div className="p-1 w-full flex flex-wrap gap-4">
                {itemBlogs.map((itemb, x)=> (
                  <div
                    key={x} 
                    className={`rounded-lg shadow-lg flex flex-col bg-white
                      ${x=== 0
                        ? "sm:flex-row w-full h-[475px]"
                        : "w-full sm:w-[calc(33.333%-0.67rem)]"
                      }
                    `}>
                        <div className={`w-full relative overflow-hidden
                            ${x===0
                              ? "rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none w-full sm:w-3/5"
                              : "rounded-t-lg w-full"
                            }
                          `}>
                            <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-white font-bold w-fit whitespace-nowrap rounded-full text-[12px] text-gray-900 shadow">
                              {itemb.category}
                            </div>
                            <img 
                              src={itemb.img} 
                              alt={itemb.title}
                              className={`w-full h-full object-cover 
                                ${x===0
                                  ? ""
                                  : "sm:h-[250px]"
                                }
                              `}/>
                        </div>
                        <div 
                          className={`w-full p-2 w-full sm:p-10 flex flex-col flex-1
                            ${x===0
                              ? "sm:w-2/5"
                              : "min-h-[300px]"
                            }
                          `}>
                            <h1 className="text-black font-bold text-[25px]">
                              {itemb.title}
                            </h1>
                            <p className="text-gray-500 pb-5">
                              {itemb.excerpt}
                            </p>
                            <div className="mt-auto flex justify-between border-t-2 border-yellow-100 pt-3">
                              <div className="flex">
                                <div className="">
                                  <img 
                                    src={itemb.user.img} 
                                    alt={itemb.user.name} 
                                    className="rounded-full object-cover border-2 border-yellow-200 h-[40px] w-[40px]" />
                                </div>
                                <div className="p-1">
                                  <p className="text-black text-xs uppercase font-bold">{itemb.user.name}</p>
                                  <p className="text-gray-400 text-xs uppercase">{itemb.user.role}</p>
                                </div>
                              </div>
                              <button 
                                className="flex text-gray-500"
                                onClick={()=>readBlog(itemb)}
                                >
                                  <span className="">Read</span>
                                  <div className="p-1">
                                    <FaArrowRight/>
                                  </div>
                                </button>
                            </div>
                          </div>
                    </div>
                ))}
              </div>
            </div>
          ) : (
            <div 
              className="flex p-2 justify-center items-center bg-gray-100 min-h-[50vh]">
                <div className="">You have no current Blogs</div>
              </div>
          )}
      </div>
    </div>
  )  
}

export default DefaultBlogView
