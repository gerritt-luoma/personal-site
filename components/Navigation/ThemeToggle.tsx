import { useLocalStorage } from "@mantine/hooks";
import { ActionIcon, ColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

const ThemeToggle = () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'dark',
        getInitialValueInEffect: true,
    });
    return (
        <ActionIcon
            size={'md'}
            onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}
            variant='outline'
        >
            { colorScheme === 'dark' ? <IconSun size='md'/> : <IconMoonStars size='md'/>}
        </ActionIcon>
    )
}

export default ThemeToggle;