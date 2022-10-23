import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const Searcher = ({data} : any) => {
  return (
  
  <div>
    <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={data.map((option: any) => option.title)}
              renderInput={(params) => <TextField {...params} label="freeSolo" />}
          />
      </Stack>
  </div>
      
  
);
}

export default Searcher;