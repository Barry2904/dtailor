const head1 = () => {
    return (
        <h1>Content of 2.1</h1>
    )
}

export default head1;

// import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import ReactMarkdown from 'react-markdown';
// import Image from 'next/image';

// interface PostProps {
//   params: {
//     slug: string;
//   };
// }

// const ImageRenderer = ({ src, alt }: { src: string; alt: string }) => {
//   return <Image src={src} alt={alt} width={1000} height={100} />;
// };

// export default function Post({ params }: PostProps) {
//   const filePath = path.join(process.cwd(), 'app', 'content', `example2.md`);
//   const markdown = fs.readFileSync(filePath, 'utf-8');

//   return (
//     <div className="prose lg:prose-xl mx-auto py-8">
//       <h1>Markdown Content</h1>
//       <ReactMarkdown
//         components={{
//           img: ({ src, alt }) => <ImageRenderer src={src} alt={alt} />
//         }}
//       >
//         {markdown}
//       </ReactMarkdown>
//     </div>
//   );
// }



