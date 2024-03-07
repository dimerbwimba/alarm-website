import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema({
    image: {
        type: String
    },
    slug: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    html_content: {
        type: String
    },
    json_content: {
        type: String
    }
}, { timestamps: true });

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
