// const head1 = () => {
//     return (
//         <h1>Content of 1.2</h1>
//     )
// }

// export default head1;

import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

interface DocPageProps {
  params: { slug: string };
}

// Markdown loading logic
async function getMarkdownContent(slug: string): Promise<string | null> {
  const filePath = path.join(process.cwd(), 'app','content', `quickstart.md`);

  console.log(filePath);
  if (!fs.existsSync(filePath)) return null;
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const processedContent = await remark().use(html).process(fileContents);
  
  return processedContent.toString();
}

// Page component
export default async function DocPage({ params }: DocPageProps) {
  const contentHtml = await getMarkdownContent(params.slug);

  if (!contentHtml) {
    notFound();  // Show 404 if file is not found
  }

  return (
    <div className="prose">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}

// Static paths for pre-rendering
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content'));
  
  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

