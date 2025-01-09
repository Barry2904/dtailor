// const head1 = () => {
//     return (
//         <h1>Content of 1.2</h1>
//     )
// }

// export default head1;

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
//   return (
//     <div className="relative w-full h-64 my-6 rounded-lg overflow-hidden">
//       <Image 
//         src={src} 
//         alt={alt} 
//         fill
//         className="object-cover"
//       />
//     </div>
//   );
// };

// export default function Post({ params }: PostProps) {
//   const filePath = path.join(process.cwd(), 'app', 'content', `example2.md`);
//   const markdown = fs.readFileSync(filePath, 'utf-8');

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
//       <div className="prose lg:prose-xl w-full">
//         <ReactMarkdown
//           components={{
//             img: ImageRenderer,
//             h1: ({node, ...props}) => (
//               <h1 className="text-4xl font-extrabold text-blue-800 mb-6" {...props} />
//             ),
//             h2: ({node, ...props}) => (
//               <h2 className="text-2xl font-semibold text-blue-700 mb-4" {...props} />
//             ),
//             p: ({node, ...props}) => (
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed" {...props} />
//             ),
//             ul: ({node, ...props}) => (
//               <ul className="list-disc list-inside space-y-3 mb-6" {...props} />
//             ),
//             li: ({node, ...props}) => (
//               <li className="text-lg font-medium text-blue-700" {...props} />
//             ),
//             code: ({node, inline, ...props}) => (
//               inline ? 
//                 <code className="bg-gray-100 text-blue-600 px-1 rounded" {...props} /> :
//                 <div className="relative bg-black text-white text-sm font-mono p-4 rounded-lg my-4">
//                   <pre>
//                     <code className="font-mono" {...props} />
//                   </pre>
//                 </div>
//             ),
//             blockquote: ({node, ...props}) => (
//               <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6" {...props} />
//             ),
//             a: ({node, ...props}) => (
//               <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
//             )
//           }}
//         >
//           {markdown}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

// interface PostProps {
//   params: {
//     slug: string;
//   };
// }

const ImageRenderer = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="my-6">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

// export default function Post({ params }: PostProps) {
export default function Post() {
  const filePath = path.join(process.cwd(), 'app', 'content', `example2.md`);
  const markdown = fs.readFileSync(filePath, 'utf-8');

  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
      {/* <button 
        onClick={exportToPDF} 
        className="absolute top-4 right-4 flex items-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-3 rounded-md shadow"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="size-6 mr-2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
          />
        </svg>
        Export to PDF
      </button> */}
      <div className="prose lg:prose-xl w-full">
        <ReactMarkdown
          components={{
            img: ({node, ...props}) => (
              <div className="my-6">
                <ImageRenderer src={props.src || ''} alt={props.alt || ''} />
              </div>
            ),
            h1: ({node, ...props}) => (
              <h1 className="text-4xl font-extrabold text-blue-800 mb-6" {...props} />
            ),
            h2: ({node, ...props}) => (
              <h2 className="text-2xl font-semibold text-blue-700 mb-4" {...props} />
            ),
            p: ({node, children, ...props}) => {
              // Check if children contains any block-level elements
              const hasBlockElements = React.Children.toArray(children).some(
                child => React.isValidElement(child) && 
                ['img', 'pre', 'div'].includes((child.type as any)?.name?.toLowerCase() || '')
              );
              
              // If there are block elements, render without p wrapper
              if (hasBlockElements) {
                return <>{children}</>;
              }
              
              // Otherwise render as normal paragraph
              return (
                <p className="text-lg text-gray-700 mb-6 leading-relaxed" {...props}>
                  {children}
                </p>
              );
            },
            ul: ({node, ...props}) => (
              <ul className="list-disc list-inside space-y-3 mb-6" {...props} />
            ),
            li: ({node, ...props}) => (
              <li className="text-lg font-medium text-blue-700" {...props} />
            ),
            code: ({node, inline, className, children, ...props}) => {
              if (inline) {
                return (
                  <code className="bg-gray-100 text-blue-600 px-1 rounded" {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <div className="my-6">
                  <div className="relative bg-black text-white text-sm font-mono p-4 rounded-lg">
                    <pre>
                      <code className="font-mono" {...props}>
                        {children}
                      </code>
                    </pre>
                  </div>
                </div>
              );
            },
            blockquote: ({node, ...props}) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6" {...props} />
            ),
            a: ({node, ...props}) => (
              <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
            )
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}

// 09/01/25
// import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import ReactMarkdown from 'react-markdown';
// import Image from 'next/image';

// const ImageRenderer = ({ src, alt }: { src: string; alt: string }) => {
//   return (
//     <div className="my-6">
//       <div className="relative w-full h-64 rounded-lg overflow-hidden">
//         <Image 
//           src={src} 
//           alt={alt} 
//           fill 
//           className="object-cover" 
//         />
//       </div>
//     </div>
//   );
// };

// export default function Post() {
//   // Specify the file name directly
//   const filePath = path.join(process.cwd(), 'app', 'content', 'example2.md');
//   const markdown = fs.readFileSync(filePath, 'utf-8');

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg">
//       <div className="prose lg:prose-xl w-full">
//         <ReactMarkdown
//           components={{
//             img: ({ node, ...props }) => (
//               <ImageRenderer src={props.src || ''} alt={props.alt || ''} />
//             ),
//             h1: ({ node, ...props }) => (
//               <h1 className="text-4xl font-extrabold text-blue-800 mb-6" {...props} />
//             ),
//             h2: ({ node, ...props }) => (
//               <h2 className="text-2xl font-semibold text-blue-700 mb-4" {...props} />
//             ),
//             p: ({ node, children, ...props }) => (
//               <p className="text-lg text-gray-700 mb-6 leading-relaxed" {...props}>
//                 {children}
//               </p>
//             ),
//           }}
//         >
//           {markdown}
//         </ReactMarkdown>
//       </div>
//     </div>
//   );
// }

