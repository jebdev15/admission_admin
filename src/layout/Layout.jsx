import {
    Box,
    Divider,
    Typography,
} from "@mui/material";
import {
    Outlet,
    Link
} from "react-router-dom"

const Layout = () => {
    const links = ['/admin/dashboard', '/admin/entries'];
    const linkNames = ['Dashboard', 'Entries'];
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
                    bgcolor="#74E291"
                >
                    {links.map((link, index) => (
                        <Link key={link} to={link} style={{textDecoration:"none"}} >
                            <Typography
                                variant="h5"
                                marginBottom="1rem"
                                color="white"
                            >{linkNames[index]}</Typography>
                        </Link>
                    ))}
                </Box>
                <Box
                    display='flex'
                    flexDirection='column'
                    width='100%'
                    paddingX='2rem'
                >
                    <Box 
                        display='flex'
                        justifyContent='flex-end'
                        boxShadow="1px 1px 1px 1px rgba(0, 0, 0, 0.2)"
                        marginBottom="2rem"
                        padding="1rem"
                    >
                        <Box display='flex' alignItems='center' justifyContent="space-around">
                            <Typography variant="h5">Admin</Typography>
                            <Divider orientation="vertical" flexItem />
                            <Link ><Typography variant="h6">Logout</Typography></Link>
                        </Box>
                    </Box>
                    <Box 
                        // boxShadow="1px 1px 1px 1px rgba(0, 0, 0, 0.2)"
                        boxShadow={1}
                        height="100%"
                    >
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Layout