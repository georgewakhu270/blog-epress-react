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
                <h1 className="">Write a New Blog</h1>

                <div className="">

                    <div className="">
                        <div className="">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="" />
                        </div>
                        <label htmlFor="content">Content</label>
                        <BlockNoteView editor={editor} />
                    </div>

                    <div className="">

                        <div className="">
                            <label htmlFor="category">Category</label>
                            <select name="category" id="" className="">
                                <option value="Design & Craft">Design & Craft</option>
                                <option value="Technology">Technology</option>
                                <option value="Architecture">Architecture</option>
                                <option value="Culture">Culture</option>
                                <option value="Science">Science</option>
                            </select>
                        </div>
                        <div className="">
                            <label htmlFor="tags">Tags</label>
                            <input type="text" name="tags" id="" placeholder="Use coma to seperate" />
                        </div>
                        <div className="">
                            <label htmlFor="excerpt">Excerpt</label>
                            <input type="text" name="excerpt" id="" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}