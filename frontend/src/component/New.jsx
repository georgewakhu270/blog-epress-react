import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

import { useState } from "react";


export default function New({ setBlogs, setAdd, index, setIndex }) {
    // const [blog, setBlog] = useState({})

    const editor = useCreateBlockNote()

    const [title, setTitle] = useState("")
    const [categ, setCateg] = useState("Design & Craft")
    const [tags, setTags] = useState("")
    const [excerpt, setExcerpt] = useState("")

    const handleInput = async function (evt) {
        evt.preventDefault();
        const html = await editor.blocksToHTMLLossy(editor.document);
        const tag = tags.split(",")
        setIndex(index + 1)
        setAdd(false)
        const blog = {
            id: index,
            title: title,
            category: categ,
            tag: tag,
            content: html,
        }
    }

    return (
        <>
            <div className="">
                <h1 className="font-sans text-2xl">Write a New Blog</h1>

                <form action="" onSubmit={handleInput}>
                    <div className="p-4">

                        <div className="flex flex-col-reverse sm:flex-row gap-5 sm:h-[calc(100vh-5rem)] sm:overflow-hidden sm:pr-20 sm:pl-20 sm:pt-10">
                            <div className="flex-grow min-h-0 overflow-y-auto pr-1">
                                <div className="">
                                    <label htmlFor="content">Content</label>
                                    <BlockNoteView editor={editor} />
                                </div>

                            </div>

                            <div className="sm:w-[400px] w-full sm:h-full shrink-0 sm:border-l-2 sm:border-gray-400">
                                <div className="flex flex-col p-1 sm:p-2 sm:sticky sm:top-0 bg-white z-10">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        className="w-full border-b-2 border-gray-400 outline-none p-1"
                                        type="text"
                                        name="title"
                                        id=""
                                        onChange={e => setTitle(e.target.value)}
                                        value={title} />
                                </div>

                                <div className="flex flex-col p-1 sm:p-2">
                                    <label htmlFor="category">Category</label>
                                    <select
                                        name="category"
                                        id=""
                                        className="w-full border-b-2 border-gray-400 p-1"
                                        value={categ}
                                        onChange={e => setCateg(e.target.value)}>
                                        <option disabled>----</option>
                                        <option value="Design & Craft">Design & Craft</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Architecture">Architecture</option>
                                        <option value="Culture">Culture</option>
                                        <option value="Science">Science</option>
                                    </select>
                                </div>

                                <div className="p-1 sm:p-2 flex flex-col">
                                    <label htmlFor="tags">Tags</label>
                                    <input
                                        value={tags}
                                        onChange={e => setTags(e.target.value)}
                                        type="text"
                                        className="w-full p-2 outline-none border-b-2 border-gray-400"
                                        name="tags"
                                        id=""
                                        placeholder="Use coma to seperate" />
                                </div>

                                <div className="flex sm:p-2 p-1 flex-col">
                                    <label htmlFor="excerpt">Excerpt</label>
                                    <textarea
                                        name=""
                                        id=""
                                        className="p-1 w-full border-b-2 border-gray-400 outline-none"
                                        rows="7"
                                        value={excerpt}
                                        onChange={e => setExcerpt(e.target.value)}>
                                    </textarea>

                                </div>
                                <div className="hidden sm:flex justify-center p-2">
                                    <button
                                        className="border-green-700 border-2 p-1 bg-green-600 rounded-md text-white"
                                        type="submit">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="sm:hidden p-2 flex justify-center">
                            <button
                                className="border-green-700 border-2 p-1 bg-green-600 rounded-md text-white"
                                type="submit">
                                Submit
                            </button>
                        </div>

                    </div>
                </form>

            </div>
        </>
    )
}
