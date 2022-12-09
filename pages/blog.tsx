import ReactMarkdown from 'react-markdown';
import styles from '@styles/ReactMarkdown.module.css'

const Blog = () => {
    const test =
// need to do this weird indentation to get the markdown to work
`# H1
## H2
### H3
#### H4

Unordered List:
- item 1
- item 2
- item 3

Ordered list:
1. item 1
2. item 2
3. item 3

Code:
\`\`\`
# comment
def yeet():
    return yeet
\`\`\`

[Link](/)
`;
    return (
        <ReactMarkdown children={test} className={styles.rmd}/>
    )
}


export default Blog;