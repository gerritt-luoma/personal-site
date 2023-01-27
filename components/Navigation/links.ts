import { TablerIcon, IconHome, IconArticle, IconBulb, IconBrandGithub } from "@tabler/icons";

export interface LinkProps {
    icon?: TablerIcon,
    color?: string,
    link: string,
    label: string
}

export const navLinks: LinkProps[] = [
    { icon: IconHome, color: 'pink', link: '/', label: 'Home' },
    { icon: IconArticle, color: 'pink', link: '/blog', label: 'Blog' },
    { icon: IconBulb, color: 'pink', link: '/projects', label: 'Projects' },
    { icon: IconBrandGithub, color: 'pink', link: 'https://github.com/gerritt-luoma/personal-site', label: 'Github'}
];
