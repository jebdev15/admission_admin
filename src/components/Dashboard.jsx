import { Box, Card, Grid } from "@mui/material"

const Dashboard = () => {
  return (
    <>
        <Box
            padding={3}
        >
            <Grid
                container
                spacing={4}
            >
                <Grid item xs={4} height="10rem">
                    <Card variant="outlined"  sx={{ height: "100%" }}>asdjasjdkasd</Card>
                </Grid>
                <Grid item xs={4} height="10rem">
                    <Card variant="outlined"  sx={{ height: "100%" }}>asdjasjdkasd</Card>
                </Grid>
                <Grid item xs={4} height="10rem">
                    <Card variant="outlined"  sx={{ height: "100%" }}>asdjasjdkasd</Card>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Dashboard