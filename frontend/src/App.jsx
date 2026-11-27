import { useState } from "react";
import { DiGithubBadge } from "react-icons/di"
import { MdEmail, MdOutlineWhatsapp } from "react-icons/md"
import { FaXTwitter, FaLinkedin, FaRegCopyright } from "react-icons/fa6"

import DOMPurify from "dompurify"

import Dashboard from "./Dashboard";

export default function App() {

  const [log, setLog] = useState(true)
  const [sign, setSign] = useState(false)

  // const [blogs, setBlogs] = useState([])

  // const [tags, setTags] = useState([])
  const [index, setIndex] = useState(1)

  const [user, setUser] = useState({
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '1234'
  })

  const [tags, setTags] = useState([{
    name: 'hello', blog: [0]
  }])

  const [blogs, setBlogs] = useState([{
    id: 0,
    content: "<p>Hello world</p>",
    title: "hello world",
    category: "hello",
    excerpt: "hello",
    user: user
  }, {
    id: 1,
    content: "<h1>Who is Kim Philby</h1><p>This was  British intelligence officer who sold out his nation.</p>",
    title: "This is Kim Philby",
    category: "history",
    excerpt: "Who is regarded as the biggest British traitor in recent British intelligence history."
  }])
  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <main className="flex-grow">
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
        </main>
      </div>

      <footer className="mt-auto flex sm:justify-around flex-col justify-center sm:flex-row bg-gray-800 p-5 w-full">
        <div className="flex flex-col">
          <h1 className="text-gray-100 underline">Contacts</h1>
          <a href="mailto:georgewakhu270@gmail.com" className="text-gray-300 flex gap-2 p-2">
            <MdEmail size={28} />
            Email
          </a>
          <a href="" className="text-gray-300 flex gap-2 p-2">
            <DiGithubBadge size={29} />
            Github
          </a>
          <a href="" className="text-gray-300 flex gap-2 p-2">
            <MdOutlineWhatsapp size={25} />
            Whatsapp
          </a>
          <a href="" className="text-gray-300 flex gap-2 p-2">
            <FaXTwitter size={25} />
            Twitter
          </a>
          <a href="" className="text-gray-300 flex gap-2 p-2">
            <FaLinkedin size={25} />
            Linkedin
          </a>
        </div>
        <div className="text-gray-200 pt-2 sm:pt-0">
          <p className="flex">
            <span className="px-2">
              <FaRegCopyright size={25} />
            </span>
            {" "}
            2026 by Derrick Wakhu
          </p>
        </div>
      </footer>

      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(txt) }} /> */}

    </div>
  )
}