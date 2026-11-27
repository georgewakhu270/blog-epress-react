import { useState } from "react";

import Author from "./component/Author";

const Dashboard = function ({
  setBlogs,
  blogs,
  index,
  setIndex,
  tags,
  setTags,
  user,
  setUser,
}) {
  const [author, setAuthor] = useState(true);

  return (
    <>
      <div className="">
        <div className="">
          {author ? (
            <div className="">
              <Author
                setBlogs={setBlogs}
                blogs={blogs}
                tags={tags}
                setTags={setTags}
                index={index}
                user={user}
                setUser={setUser}
                setIndex={setIndex}
              />
            </div>
          ) : (
            <div className="">
              {blogs.length > 1 ? (
                <div className="">
                  {blogs.forEach((blog, x) => {
                    <div className="" key={x}>
                      {blog}
                    </div>;
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
          {/* <button>+ Write New Post</button> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
