// The client and server side rendering is taken care of 

import fs from "fs";
import path from "path";
import ClientPost from "./ClientPost";

const Post = async () => {
  // Read Markdown File on the Server
  const filePath = path.join(process.cwd(), "app", "content", "example2.md");
  const markdown = fs.readFileSync(filePath, "utf-8");

  return <ClientPost markdown={markdown} />;
};

export default Post;







