import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import path from 'path';
import styles from '@styles/ReactMarkdown.module.css'

interface ResumeProps {
    resume: string
}

const Resume = ( { resume }: ResumeProps ) => {
    return (
        <ReactMarkdown children={resume} className={styles.rmd}/>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const props = { resume: ''};
    try {
        const filePath = path.resolve('public/resume.md')
        console.log(filePath)
        const res = await fetch(filePath);
        props.resume = await res.text();
        console.log(props.resume);
    } catch (error){
        console.error(error);
    }
    return {props};
}

export default Resume;