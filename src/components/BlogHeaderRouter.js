import React, { useState } from "react";
import { useSelector } from "react-redux";

const BlogHeaderRouter = () => {
    const [router, setRouter] = useState("");
    const r = useSelector(state => state.blogRouter)

    return (
        <div className="d-flex align-items-center blog-header-router-container py-4">
           <div className="container">
               <h2 className="text-white">Blog</h2>
               <h6 className="text-white blogRouter">Home / Blog / <span className="green-text text-capitalize">{r}</span></h6>
           </div>
        </div>
     );
}
 
export default BlogHeaderRouter;