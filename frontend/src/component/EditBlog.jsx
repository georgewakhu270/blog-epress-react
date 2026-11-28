import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";


const EditBlog = function({
  blog, setAdd, setBlogs, blogs, tags, setTags, index, user, setIndex
}){
  const editor = useCreateBlockNote()

  const [title, setTitle] = useState(blog?.title ?? "");
  const [categ, setCateg] = useState(blog?.category ?? "");
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? "");
  const [mtags, setmTags] = useState("");
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(function(){
    if (!blog) return

    setTitle(blog.title ?? "");
    setCateg(blog.category ?? "");
    setExcerpt(blog.excerpt ?? "");
    
    const existingBlogTags = (tags ?? [])
      .filter((t)=>Array.isArray(t?.blog) && t.blog.includes(blog.id))
      .map((t)=>t.name)

    setmTags(existingBlogTags.join(", "))

  }, [blog, tags])

  useEffect(()=>{
    if(!editor || !blog || contentLoaded) return

    let active = true

    const loadContent = async function(){
      try {
        if (blog.content) {
          const blocks = await editor.tryParseHTMLToBlocks(blog.content)
          if (active && Array.isArray(blocks) && blocks.length > 0) {
            editor.replaceBlocks(editor.document, blocks)
          }
        }
      } finally{
        if(active) {
          setContentLoaded(true)
        }
      }
      
    }
    loadContent()
      return () => {
        active = false
      }

  }, [editor, contentLoaded, blog])

  const handleUpdate = async function (evt) {
    evt.preventDefault();
    if (!blog) return;

    const html = await editor.blocksToHTMLLossy(editor.document);

    const parsedTagNames = [
      ...new Set(
        mtags
          .split(",")
          .map((t) => t.trim().toLowerCase())
          .filter(Boolean),
      ),
    ];

    // Update tag associations for blog.id
    const updatedTags = (tags ?? []).map((tagItem) => {
      const tagName =
        typeof tagItem?.name === "string" ? tagItem.name.toLowerCase() : "";
      const currentBlogIds = Array.isArray(tagItem?.blog) ? tagItem.blog : [];
      const shouldInclude = parsedTagNames.includes(tagName);

      if (shouldInclude) {
        return {
          ...tagItem,
          blog: currentBlogIds.includes(blog.id)
            ? currentBlogIds
            : [...currentBlogIds, blog.id],
        };
      }

      return {
        ...tagItem,
        blog: currentBlogIds.filter((id) => id !== blog.id),
      };
    });

    // Add any brand-new tags that didn't exist yet
    parsedTagNames.forEach((tagName) => {
      const alreadyExists = updatedTags.some(
        (t) => typeof t?.name === "string" && t.name.toLowerCase() === tagName,
      );
      if (!alreadyExists) {
        updatedTags.push({
          name: tagName,
          blog: [blog.id],
        });
      }
    });

    setTags(updatedTags);

    // Replace only the matching blog item in state
    const updatedBlogs = blogs.map((item) =>
      item.id === blog.id
        ? {
            ...item,
            content: html,
            title: title,
            category: categ,
            excerpt: excerpt,
            user: item.user ?? user,
          }
        : item,
    );

    setBlogs(updatedBlogs);
    setAdd("default");
  };

  if (!blog) {
    return (
      <div className="p-8 text-center text-gray-500">
        No blog post selected for editing.
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-between px-8 sm:mx-20 py-2 border-b-2 border-gray-300 m-3">
          <h1 className="font-sans text-2xl font-900 text-gray-500">Edit Blog</h1>
          <button
            type="button"
            className="text-gray-500 flex"
            onClick={() => {
              setAdd("default");
            }}
          >
            <div className="p-1">
              <FaArrowLeft />
            </div>
            <span className="">Back to Stories</span>
          </button>
        </div>
        <form action="" onSubmit={handleUpdate}>
          <div className="p-4">
            <div className="flex flex-col-reverse sm:flex-row gap-5 sm:h-[calc(100vh-5rem)] sm:overflow-hidden sm:pr-20 sm:pl-20 sm:pt-10">
              <div className="flex-grow min-h-0 overflow-y-auto pr-1">
                <div className="">
                  <label htmlFor="content" className="sm:text-center sm:flex sm:justify-center">Content</label>
                  <BlockNoteView editor={editor} className="w-full"/>
                </div>
              </div>
              <div className="w-full sm:h-full shrink-0 sm:border-l-2 sm:border-gray-400 sm:w-[300px]">
                <div className="flex flex-col p-1 sm:p-2 sm:sticky sm:top-0 z-10">
                  <label htmlFor="title">Title</label>
                  <input
                    className="w-full border-b-2 border-gray-400 outline-none p-1 bg-white rounded"
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </div>
                <div className="flex flex-col p-1 sm:p-2">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    className="w-full border-b-2 border-gray-400 p-1 bg-white rounded"
                    value={categ}
                    onChange={(e) => setCateg(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Design & Craft">Design & Craft</option>
                    <option value="Technology">Technology</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Culture">Culture</option>
                    <option value="Science">Science</option>
                    <option value="History">History</option>
                  </select>
                </div>
                <div className="p-1 sm:p-2 flex flex-col">
                  <label htmlFor="tags">Tags</label>
                  <input
                    value={mtags}
                    onChange={(e) => setmTags(e.target.value)}
                    type="text"
                    className="w-full p-2 outline-none border-b-2 border-gray-400 bg-white rounded"
                    name="tags"
                    id="tags"
                    placeholder="Use comma to separate"
                  />
                </div>

                <div className="flex sm:p-2 p-1 flex-col">
                  <label htmlFor="excerpt">Excerpt</label>
                  <textarea
                    name="excerpt"
                    id="excerpt"
                    className="p-1 w-full border-b-2 border-gray-400 outline-none bg-white rounded"
                    rows="7"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                  ></textarea>
                </div>
                <div className="hidden sm:flex justify-center p-2">
                  <button
                    className="border-green-700 border-2 p-1 bg-green-600 rounded-md text-white"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </div>  
            </div>
            <div className="sm:hidden p-2 flex justify-center">
              <button
                className="border-green-700 border-2 p-1 bg-green-600 rounded-md text-white"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditBlog
