import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { set } from "react-hook-form";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  appwriteService.getPost([]).then((posts) => setPosts(posts));

  if (posts) {
    setPosts(posts.documents);
  }

  return (
    <div>
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllPost;