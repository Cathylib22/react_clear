import { createContext, useState } from "react";
//import { fake } from "@faker-js/faker";

function createRandomPost() {
  return {
    //title: "${faker.hacker.adjective()} ${faker.hacker.noun()}}",
    //body: faker.hacker.phrase(),
  };
}

// 1. create a context
const PostContext = createContext();

function PostProvider(children) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  //Derived state, These are the posts that will actually be displayed.
  const searchPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          "${post.title} ${post.body}"
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...post]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    //2 provide value to tchild components
    <PostContext.Provider
      value={{
        //posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

// the corresponding hook file
function usePosts() {
  //const context = useContext(PostContext);
  //return context;
}
export default { PostProvider, PostContext };