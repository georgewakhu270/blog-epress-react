import { useState } from "react";
import  DOMPurify  from "dompurify"
import New from "./component/New";
export default function App() {
  // const editor = useCreateBlockNote()
  // const [txt, settxt] = useState("")
  const user = {
    
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
        {/* <New /> */}
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