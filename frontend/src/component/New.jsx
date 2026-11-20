import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useState } from "react";


export default function New({ setBlogs }) {
    const [txt, setTxt] = useState("")
    const [blog, setBlog] = useState({})
    const editor = useCreateBlockNote()

    const [title, setTitle] = useState("")

    const handleInput = function (evt) {
        evt.preventDefault()
        console.log(title)
    }

    return (
        <>
            <div className="">
                <h1 className="">Write a New Blog</h1>

                <form action="" onSubmit={handleInput}>
                    <div className="">

                        <div className="">
                            <div className="">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} value={title} />
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

                        <button className="" type="submit">Submit</button>

                    </div>
                </form>

            </div>
        </>
    )
}