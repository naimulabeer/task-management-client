import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    title: "5 Tips for Efficient Task Delegation",
    content:
      "Learn how to delegate tasks effectively, ensuring a smooth workflow and improved team productivity.",
    imageUrl: "https://i.ibb.co/6ZnT4WF/blog1.jpg",
  },
  {
    id: 2,
    title: "Balancing Work and Life with Task Management",
    content:
      "Discover strategies to maintain a healthy work-life balance through effective task management practices and time optimization.",
    imageUrl: "https://i.ibb.co/qdpQbzg/blog2.webp",
  },
  {
    id: 3,
    title: "The Power of Visual Task Boards",
    content:
      "Explore the benefits of using visual task boards to enhance project visibility, collaboration, and task progress tracking.",
    imageUrl: "https://i.ibb.co/JygfVGm/blog3.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {blogData.map((blog) => (
        <motion.div
          key={blog.id}
          className="bg-white p-4 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="mb-4 rounded-md"
            style={{ width: "100%", height: "fit-content" }}
          />
          <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
          <p className="text-gray-600">{blog.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Blogs;
