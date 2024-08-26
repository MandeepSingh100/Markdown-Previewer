import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

const defaultMarkdownText = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!


- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;
function App() {
 const [markdownText, setMarkdownText] = useState(defaultMarkdownText);
  return (
    <>
    <h1 style={{textAlign: 'center'}}>Markdown Preview</h1>
    <div className='markdown'>
      <textarea name='editor' id='editor' type='text' value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
      <div id='preview'>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </div>
    </>
  )
}

export default App;
