import {
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import getUrlParams from '../../helpers/getUrlParams';
import { PAGINATION_LIMIT } from '../../constants';

export default function FilterBar({ totalPages, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Grid container marginBottom={3} spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField 
        value={searchParams.get("nameStartsWith")}
        // !== null ? searchParams.get("nameStartsWith") : ""
          onChange={(evt) =>
            setSearchParams(
              getUrlParams("nameStartsWith", evt.target.value, searchParams, "page")
              )
             }
          fullWidth
          label="Search..." 
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <InputLabel id="list-sort">Sort By</InputLabel>
          <Select
            labelId="list-sort"
            value={searchParams.get("orderBy")}
            label="Sort By"
            onChange={(evt) =>
              setSearchParams(
                getUrlParams("orderBy", evt.target.value, searchParams)
              )
            }>
            <MenuItem value={"name"}>A-Z</MenuItem>
            <MenuItem value={"-name"}>Z-A</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid 
      display={"flex"} 
      alignItems={"center"} 
      justifyContent={"center"} 
      item 
      xs={12} 
      lg={3}> 
        {loading ? <CircularProgress color="success" /> :
        <Pagination
        page={+searchParams.get("page") || 1}
        onChange={(evt, page) =>
          setSearchParams(getUrlParams("page", page, searchParams))
        }
        size="small"
        count={Math.floor((totalPages || 0) / PAGINATION_LIMIT)}
        variant="outlined"
      />
        }
      </Grid>
    </Grid>
  )
}
