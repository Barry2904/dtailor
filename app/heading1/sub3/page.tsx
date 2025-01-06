// const head1 = () => {
//     return (
//         <h1>Content of 1.3</h1>
//     )
// }

// export default head1;


import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface PostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(),'app' ,'content'));
  return files.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default async function Post({ params }: PostProps) {
//   const filePath = path.join(process.cwd(), 'app','content', `${params.slug}.md`);
const filePath = path.join(process.cwd(), 'app','content', `example.md`);
  const markdown = fs.readFileSync(filePath, 'utf-8');

  const processedContent = await remark()
    .use(html)
    .process(markdown);
  const contentHtml = processedContent.toString();

  return (
    <article className="prose lg:prose-xl mx-auto py-8">
      <MDXRemote source={contentHtml} />
    </article>
  );
}




