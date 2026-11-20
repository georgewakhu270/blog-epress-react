import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";


export default function New() {
    const [txt, setTxt] = useState("")
    const editor = useCreateBlockNote()

    return (
        <>
            <div className="">
                <h1 className="">New Blog</h1>
                    <div className="">
                        <BlockNoteView editor={editor}/>
                    </div>
            </div>
        </>
    )
}