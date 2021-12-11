import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <>
          <BlogList
            blogs={blogs}
            title="All blogs!"
            // handleDelete={handleDelete}
          />
          <BlogList
            blogs={blogs.filter((blog) => blog.author === "mario")}
            title="Mario's Blogs"
            // handleDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
};

export default Home;
