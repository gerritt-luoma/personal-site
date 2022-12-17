import ReactMarkdown from "react-markdown";
import path from 'path';
import fs from 'fs';
import styles from '@styles/ReactMarkdown.module.css'
import { GetStaticProps } from "next";

interface ResumeProps {
    resume: string
}

const Resume = ( { resume }: ResumeProps ) => {
    return (
        <ReactMarkdown children={resume} className={styles.rmd}/>
    )
}

export const getStaticProps: GetStaticProps = async ()  => {
    const resume = fs.readFileSync(path.join("public/", "resume.md"), 'utf-8');
    return {
        props: {
            resume
        }
    }

}

export default Resume;