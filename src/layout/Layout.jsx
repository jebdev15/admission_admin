import {
    Box,
    Typography,
    MenuList,
} from "@mui/material";
import {
    HomeIcon
} from '@mui/icons-material'
import {
    Outlet,
    Link
} from "react-router-dom"

const Layout = () => {
    const links = ['/home', '/home/start', '/home/entries'];
    const linkNames = ['Home', 'Start', 'Entries'];
    return (
        <>
            <Box
            sx={{
                display: 'flex',
                height: '100vh',
                padding: 0,
                margin: 0
            }}
                color="primary"
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    textAlign='center'
                    padding={1}
                    bgcolor="cyan"
                >
                    {links.map((link, index) => (
                        <Link key={link} to={link}>
                            <HomeIcon label={linkNames[index]} />
                            
                        </Link>
                    ))}
                </Box>
                <Box>
                    <MenuList>
                        <Typography></Typography>
                    </MenuList>
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default Layout