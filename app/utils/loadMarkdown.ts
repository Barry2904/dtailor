import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'content', `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();
  
  return contentHtml;
}
