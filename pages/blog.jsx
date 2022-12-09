import ReactMarkdown from 'react-markdown';

const Blog = () => {
    const test = `
    # H1

    ## H2

    ### H3

    Some regular text

    Unordered list:
    - item 1
    - item 2
    - item 3

    Ordered list:
    1. item 1
    2. item 2
    3. item 3

    \`\`\`
    # code block
    def yeet():
        return \'yeet\'
    \`\`\`
    `;
    return (
        <ReactMarkdown children={test}/>
    )
}


export default Blog;