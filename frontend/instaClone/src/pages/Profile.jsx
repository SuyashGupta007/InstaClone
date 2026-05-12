import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Api";

const Profile = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchPosts = async () => {

            try {

                const response = await API.get("/posts/myposts");

                console.log(response.data);

                // Correct data path
                setPosts(response.data.user.posts || []);

            } catch (error) {

                console.log(error);
              
                navigate("/login");

            } finally {

                setLoading(false);
            }
        };

        fetchPosts();

    }, [navigate]);

    if (loading) {
        return (
            <div className="text-center mt-20 text-2xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8 text-center">
                My Posts
            </h1>

            {posts.length === 0 ? (

                <div className="text-center text-2xl font-bold">
                    No Post Found
                </div>

            ) : (

                <div className="flex flex-wrap gap-6 justify-center">

                    {posts.map((post) => (

                        <div
                            key={post._id}
                            className="w-[320px] bg-white rounded-xl shadow-lg overflow-hidden"
                        >

                            <img
                                src={post.image}
                                alt="post"
                                className="w-full h-56 object-cover "
                            />

                            <div className="p-4">

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