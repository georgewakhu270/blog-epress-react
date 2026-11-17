import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";
import  DOMPurify  from "dompurify"
export default function App() {
  const editor = useCreateBlockNote()
  const [txt, settxt] = useState("")
  async function handleChange() {
    // const markdown = await editor.blocksToMarkdownLossy(editor.document);
    // settxt(markdown);
    const html = await editor.blocksToHTMLLossy(editor.document);
    settxt(html)
  }
  return (
    <>
    <div><h1>Hello</h1>

<div>
  <BlockNoteView editor={editor} onChange={handleChange}/>
  {/* <pre>{txt}</pre> */}
  <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(txt) }} />
</div>

    </div></>
  )
}