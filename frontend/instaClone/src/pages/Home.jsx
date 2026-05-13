import React, { useEffect, useState } from "react";
import API from "../Api";

const Home = () => {

  // State for storing posts
  const [posts, setPosts] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Fetch posts on component mount
  useEffect(() => {

    const fetchPosts = async () => {
      try {

        // API call
        const response = await API.get("/posts/allposts");

        console.log(response.data);

        // Store posts in state
        setPosts(response.data.posts || []);

      } catch (error) {

        console.log("Error fetching posts:", error);

      } finally {

        setLoading(false);
      }
    };

    fetchPosts();

  }, []);

  // Loading screen
  if (loading) {
    return (
      <div className="text-center mt-20 text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-2xl font-bold mb-6">
        Feed
      </h2>

      <div className="flex flex-wrap gap-6">

        {posts.length > 0 ? (

          posts.map((post) => (

            <div
              key={post._id}
              className="w-[320px] bg-white border rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >

              {/* Post Image */}
              <img
                src={post.image}
                alt="post"
                className="w-full h-56 object-cover"
              />

              {/* Post Content */}
              <div className="p-3">

                {/* Username */}
                <p className="font-semibold text-lg">
                  {post.owner?.username || "Unknown User"}
                </p>

                {/* Caption */}
                <p className="text-gray-700 mt-1">
                  {post.caption || "No caption provided."}
                </p>

              </div>
            </div>

          ))

        ) : (

          <p className="text-gray-500 text-lg">
            No posts available.
          </p>

        )}

      </div>
    </div>
  );
};

export default Home;