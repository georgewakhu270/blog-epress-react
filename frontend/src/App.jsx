import { useState } from "react";
import DOMPurify from "dompurify"
import Dashboard from "./Dashboard";

export default function App() {

  const [log, setLog] = useState(true)
  const [sign, setSign] = useState(false)

  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])
  const [index, setIndex] = useState(0)


  const [user, setUser] = useState({
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '1234'
  })

  return (
    <>
      <div className="">
        {log
          ?
          <div className="">
            <Dashboard
              setBlogs={setBlogs}
              blogs={blogs}
              index={index}
              tags={tags}
              user={user}
              setUser={setUser}
              setTags={setTags}
              setIndex={setIndex} />
          </div>
          :
          <div className="">

          </div>
        }
      </div>

      <footer className="flex justify-around bg-gray-800 p-5">
        <div className="text-gray-200">
          <p className="">Copyright 2026</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-gray-100">Contacts</h1>
          <a href="mailto:georgewakhu270@gmail.com" className="text-gray-300">email</a>
          <a href="" className="text-gray-300">github</a>
          <a href="" className="text-gray-300">whatsapp</a>
          <a href="" className="text-gray-300">twitter</a>
          <a href="" className="text-gray-300">linkedin</a>
        </div>
      </footer>

      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(txt) }} /> */}
      
    </>
  )
}