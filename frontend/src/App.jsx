import { useState } from "react";
import  DOMPurify  from "dompurify"

export default function App() {
  // const editor = useCreateBlockNote()
  // const [txt, settxt] = useState("")
  
  const [log, setLog] = useState(false)

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
        {log ? <div className=""> <Dashboard/> </div> : <div className=""></div>}
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