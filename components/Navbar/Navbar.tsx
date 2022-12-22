import { Grid, Button, Box } from "@mantine/core";
import { NextLink } from "@mantine/next";
const Navbar = () => {

    return (
        <Box>
            <Grid>
                <Grid.Col span={4}>1</Grid.Col>
                <Grid.Col span={4}>2</Grid.Col>
                <Grid.Col span={4}>3</Grid.Col>
            </Grid>
        </Box>
    );
}

export default Navbar;