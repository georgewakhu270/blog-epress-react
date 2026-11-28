import {FaArrowLeft} from "react-icons/fa"

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
        </div>
      </div>
    </>
  )
}

export default ReadBlog
