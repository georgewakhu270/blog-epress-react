import {FaArrowLeft} from "react-icons/fa"

import DOMPurify from "dompurify";

import './ReadBlog.css'

const ReadBlog = function ({
  blog, setAdd
}) {
  return (
    <>
      <div className="sm:px-20 px-2">
        <div className="flex py-2 border-b-2 border-gray-300">
          <button 
            className="flex text-gray-500"
            onClick={()=>setAdd('default')}>
              <div className="p-1">
                <FaArrowLeft/>
              </div>
              <span className="">Back to Stories</span>
            </button>
        </div>
        <div className="py-7">
          <div className="flex">
            <p className="text-red-700 text-xs categ">{blog.category}</p>
          </div>
          <h1 className="text-[2.2rem] sm:text-[3rem] font-bold">{blog.title}</h1>
          <p className="italic text-[1.25rem] py-2 text-gray-600 times-new-roman">{blog.excerpt}</p>
          <div className="my-10 py-5 border-y-2 border-y-gray-400">
            <div className="flex">
              <div className="">
                <img 
                  src={blog.user.img} 
                  alt={blog.user.name} 
                  className="rounded-full object-cover border-2 border-yellow-200 h-[50px] w-[50px]" />
              </div>
              <div className="p-1 sm:px-4">
                <p className="text-black uppercase font-bold">{blog.user.name}</p>
                <p className="text-gray-500">{blog.user.role}</p>
              </div>
            </div>
          </div>
          <img 
            src={blog.img}
            alt={blog.title} 
            className="w-full h-full sm:h-[500px] rounded-xl" />
          <div className="py-5 my-5 content-div  text-gray-700">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadBlog
