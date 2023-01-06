import { AppShell } from "@mantine/core";
import { ReactNode, useState } from "react";
import CustomNavbar from "./CustomNavbar";
import CustomHeader from "./CustomHeader";

interface Props {
    children: ReactNode
}

const Navigation = ({ children }: Props) => {
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            navbar={<CustomNavbar opened={opened}/>}
            header={<CustomHeader opened={opened} setOpened={setOpened}/>}
            padding="md"
        >
            {children}
        </AppShell>
    );
}

export default Navigation;