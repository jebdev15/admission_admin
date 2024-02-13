import { Table } from "@mui/joy"
import { 
  Box, 
  Divider, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Pagination, 
  Select, 
  Stack, 
  Typography,
  Container,
  TextField
} from "@mui/material"
import { useEffect, useState } from "react";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(123456789000, 159, 6.0, 24, 4.0),
  createData(123456789001, 237, 9.0, 37, 4.3),
  createData(123456789002, 262, 16.0, 24, 6.0),
  createData(123456789003, 305, 3.7, 67, 4.3),
  createData(123456789004, 356, 16.0, 49, 3.9),
];

const EntryData = () => {
  const [data, setData] = useState("");
  const handleEntries = async () => {
    const url = 'http://localhost/server/local_admission/action/entries.php'
    const response = await fetch(url);
    const json = await response.json();
    const {data} = json;
    const entries = data.map(({email, lastName, middleName, firstName, timestamp}) => (
      <tr key={email}>
        <td>{lastName}</td>
        <td>{middleName}</td>
        <td>{firstName}</td>
        <td>{timestamp}</td>
      </tr>
    ))
    setData(entries);
    data.map((row) => (
      console.log(row.email)
    ))
  }
  const handleFilterData = async () => {
    const url = 'http://localhost/server/local_admission/action/entries.php'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: {
        
      }
    });
    const json = await response.json();
    const {data} = json;
    const entries = data.map(({email, lastName, middleName, firstName, timestamp}) => (
      <tr key={email}>
        <td>{lastName}</td>
        <td>{middleName}</td>
        <td>{firstName}</td>
        <td>{timestamp}</td>
      </tr>
    ))
    setData(entries);
    data.map((row) => (
      console.log(row.email)
    ))
  }
  useEffect(() => {
    handleEntries();
  }, [])
  return (
    <>
    <Box sx={{ width: '100%' }} marginBottom={3}>
      <Stack >
          <Typography>Filter</Typography>
          <Box>
            <FormControl fullWidth>
              <InputLabel>Campus</InputLabel>
              <Select>
                <MenuItem value="Talisay">Talisay</MenuItem>
                <MenuItem value="Alijis">Alijis</MenuItem>
                <MenuItem value="Binalbagan">Binalbagan</MenuItem>
                <MenuItem value="Fortune Towne">Fortune Towne</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Program</InputLabel>
              <Select>
                <MenuItem value="Talisay">Talisay</MenuItem>
                <MenuItem value="Alijis">Alijis</MenuItem>
                <MenuItem value="Binalbagan">Binalbagan</MenuItem>
                <MenuItem value="Fortune Towne">Fortune Towne</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Campus</InputLabel>

            </FormControl>
          </Box>
      </Stack>
    </Box>
      <Table sx={{ marginBottom: "1rem" }} hoverRow>
        <thead>
          <tr>
            <th>Learner&apos;s Reference Number</th>
            <th>Lastname</th>
            <th>Middlename</th>
            <th>Firstname</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </Table>
      <Divider sx={{ marginBottom: "1rem" }} />
    <Container maxWidth="sm">
      <Stack spacing={2} justifyContent="center" >
        <Pagination display='flex' count={10} variant="outlined" color="primary" />
      </Stack>
    </Container>
    </>
  );
}

export default EntryData