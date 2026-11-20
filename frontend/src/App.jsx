import { useState } from "react";
import  DOMPurify  from "dompurify"
import Dashboard from "./Dashboard";

export default function App() {
    
  const [log, setLog] = useState(true)
  const [sign, setSign] = useState(false)

  const [blogs, setBlogs] = useState([])
  const [tags, setTags] = useState([])

  const user = {
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '1234'
  }
  
  async function handleChange() {
    // const markdown = await editor.blocksToMarkdownLossy(editor.document);
    // settxt(markdown);
    const html = await editor.blocksToHTMLLossy(editor.document);
    settxt(html)
  }
  
  return (
    <>
      <div className="">
        {log 
          ? 
            <div className=""> 
              <Dashboard setBlogs={setBlogs} blogs={blogs}/> 
            </div> 
          : 
            <div className="">

            </div>
        }
      </div>
    {/* <div><h1>Hello</h1>

<div>
  <BlockNoteView editor={editor} onChange={handleChange}/> */}
  {/* <pre>{txt}</pre> */}
  {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(txt) }} /> */}
{/* </div>

    </div> */}
    </>
  )
}