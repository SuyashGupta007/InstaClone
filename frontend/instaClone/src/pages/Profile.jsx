import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Api";

const Profile = () => {

    // State for storing user posts
    const [posts, setPosts] = useState([]);

    // State for loading screen
    const [loading, setLoading] = useState(true);

    // Hook for page navigation
    const navigate = useNavigate();

    // Fetch posts when component mounts
    useEffect(() => {

        // Async function to fetch user's posts
        const fetchPosts = async () => {

            try {

                // API call to get logged-in user's posts
                const response = await API.get("/posts/myposts");

                // Printing API response in console
                console.log(response.data);

                // Setting posts data into state
                // If posts array does not exist, use empty array
                setPosts(response.data.user.posts || []);

            } catch (error) {

                // Printing error in console
                console.log(error);

                // Redirect user to login page if unauthorized
                navigate("/login");

            } finally {

                // Stop loading after API completes
                setLoading(false);
            }
        };

        // Calling fetch function
        fetchPosts();

    }, [navigate]);

    // Loading UI
    if (loading) {
        return (
            <div className="text-center mt-20 text-2xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">

            {/* Page Heading */}
            <h1 className="text-3xl font-bold mb-8 text-center">
                My Posts
            </h1>

            {/* If no posts available */}
            {posts.length === 0 ? (

                <div className="text-center text-2xl font-bold">
                    No Post Found
                </div>

            ) : (

                // Posts Container
                <div className="flex flex-wrap gap-6 justify-center">

                    {/* Loop through all posts */}
                    {posts.map((post) => (

                        <div
                            key={post._id}
                            className="w-[320px] bg-white rounded-xl shadow-lg overflow-hidden"
                        >

                            {/* Post Image */}
                            <img
                                src={post.image}
                                alt="post"
                                className="w-full h-56 object-cover"
                            />

                            {/* Post Content */}
                            <div className="p-4">

                                {/* Post Caption */}
                                <p className="text-lg font-semibold">
                                    {post.caption}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
};

export default Profile;