import Link from "next/link";
import styles from "../../styles/Blogs.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { blogs: data },
  };
};

const Blog = ({ blogs }) => {
  return (
    <div>
      <h1>Blog all list</h1>
      {blogs.map((blog) => (
        <Link href={'/blog/' + blog.id} key={blog.id}>
          <a className={styles.single}>
            <h3> {blog.title}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
