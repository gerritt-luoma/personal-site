import ReactMarkdown from "react-markdown";
import path from 'path';
import fs from 'fs';
import styles from '@styles/ReactMarkdown.module.css'
import { GetStaticProps } from "next";

interface TodoProps {
    todo: string
}

const Todo = ( { todo }: TodoProps ) => {
    return (
        <ReactMarkdown children={todo} className={styles.rmd}/>
    )
}

export const getStaticProps: GetStaticProps = async ()  => {
    const todo = fs.readFileSync(path.join("public/", "todo.md"), 'utf-8');
    return {
        props: {
            todo
        }
    }

}

export default Todo;