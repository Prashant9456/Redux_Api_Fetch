import { useDispatch, useSelector } from "react-redux";
import { doSomething, getPosts } from "./features/postSlice";
import AppStyle from "./App.style";
import SearchIcon from "@mui/icons-material/Search";
import CustomInput from "../src/CustomInput/customInput";
import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Grid,
  Paper,
  styled,
  Box,
  CardMedia,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { Launchstatus, options, Upcoming } from "./data";
const classes = AppStyle;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [search, setSearch] = useState<any>("");
  const [interval, setInterval] = useState<number>(0);
  const [upcoming, setUpcoming] = useState<any>(0);
  const [status, setStatus] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(false)
  const { posts, loading } = useSelector((state: any) => state.post);
  const newPost = useSelector((state: any) => state.post.newPosts);
  type AppDispatch = /*unresolved*/ any;
  const dispatch = useDispatch<AppDispatch>();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  // console.log(`hello`,posts)
  // console.log('heelo');
  const handleOptionChange = (event: SelectChangeEvent<number>) => {
    setInterval(event.target.value as number);
    
  };
  const onHandleSuccessOptionChange = (event: SelectChangeEvent<string>) => {
    setStatus(event.target.value as string);
  };
  const onHandleUpcomingOptionChange=(event:SelectChangeEvent<string> )=>{
    setUpcoming(event.target.value as string);
  
  };
  const handleSearchOnChange = async (
    SearchEvent: ChangeEvent<HTMLInputElement>
  ) => {
    if (SearchEvent.target.value) {
      //console.log(`SearchEvent.target.value`, SearchEvent.target.value)
      //console.log(value);
      setSearch(SearchEvent.target.value);
    } else {
      setSearch("");
    }
  };
  const getInput = () => {
    return (
      <>
        <Box sx={classes.searchInputWrapper}>
          <CustomInput
            placeHolder="Search text"
            sx={classes.searchInput}
            onChange={handleSearchOnChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </>
    );
  };
  const getDropdown = () => {
    return (
      <Box sx={classes.inputsSectionDropdowns}>
        <Box>
          <FormControl>
            <Select
              sx={classes.dropDownStyle}
              value={interval}
              onChange={(e) => handleOptionChange(e)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {options.map((data) => (
                <MenuItem
                  key={data.id}
                  value={data.value}
                  sx={classes.optionStyle}
                >
                  {data.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Select
              sx={classes.dropDownStyle}
              value={status}
              onChange={(e) => onHandleSuccessOptionChange(e)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {Launchstatus.map((element) => (
                <MenuItem
                  key={element.id}
                  value={element.value}
                  sx={classes.optionStyle}
                >
                  {element.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Select
              sx={classes.dropDownStyle}
              value={upcoming}
              onChange={(e) => onHandleUpcomingOptionChange(e)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {Upcoming.map((element) => (
                <MenuItem
                  key={element.id}
                  value={element.value}
                  sx={classes.optionStyle}
                >
                  {element.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        
      </Box>
    );
  };
  const searchFilter = (array: any) => {
    const userFound: any = []
    //console.log(`hello`,Boolean(search));
    switch(Boolean(search)) {
      
      // setUser(value);
      case true:{
      array.filter((el: any) => {
                 //console.log(`el.rocket.rocket_name`, el.rocket.rocket_name)
               if (
                 
                 el.rocket.rocket_name
                   .toLowerCase()
                   .includes(search.toLowerCase())
               ) {
                 userFound.push(el);
               }
             });
             // setUser(userFound);
             break;
   }default: {
     //console.log('else')
     // setUser(value)
     userFound.push(...array)
     break;
   }
  }
    

   return userFound
  }
  //console.log(`upcoming`, upcoming)
  const findUpcoming = (array: any) => {
    const upcomings: any = []
    switch(Number(upcoming)){
    case 1: {
      array.filter((el: any) => {
        //console.log(`el.rocket.rocket_name`, el.rocket.rocket_name)
      switch (
        String(el.upcoming)=='true'
      ) {
        case true:
        upcomings.push(el);
      }
    });
    break;
    } default :{
      upcomings.push(...array)
    }
  }

    return upcomings
  }
  //console.log(`status`,status)
  const findStatus=(array:any)=>{
    const _status:any=[]
    // console.log(`status`,typeof status);
    
    switch (Number(status)) {
      
    case 1:
      // console.log('cond')
      array.filter((el:any)=>{
        // console.log(`hello`,String(el.launch_success)=="true");
        switch(
          
          String(el.launch_success)=="true"
        ){ case true:
          _status.push(el);
          break;
        }
        
      });
      break;
    case 2:
      array.filter((el:any)=>{
        switch(
          String(el.launch_success)=='false'
        ){
          case true:
          _status.push(el);
          break;
        }
      });
      break;
    
    default:
      _status.push(...array)
    }
    
    return _status
  }
  //console.log(`launch_status`,interval)
  const findInterval=(array:any)=>{
    const _interval:any=[]
    switch (Number(interval)){
      case 1:{
      array.filter((el:any)=>{
        
        switch(
          Number(el.launch_year)>2021
          ){ case true:
            _interval.push(el);
            break;

          }
      });
      break;
    }
    
    case 2:{
      
      array.filter((el:any)=>{
        switch(Number(el.launch_year)>2017){
          case true:
          _interval.push(el);
          break;
        }
      });
      break;
    }
    
  
    case 3:{
      array.filter((el:any)=>{
        switch(Number(el.launch_year)>2007){
          case true:
          _interval.push(el);
          break;
        }
      });
      break;
    }
    default:
      _interval.push(...array)
    
    
  }
  let data;
  //console.log(`hello`,Number(_interval));
  
    return _interval
  
  
}
if(!loading){
useEffect(() => {   
  dispatch(getPosts());
  console.log(search);
  const userFound = [];
  let result = posts;
  result = searchFilter(result)
  result = findUpcoming(result)
  result = findStatus(result)
  console.log(`result`, result);
  // let result="abc";
  // console.log('heelo');
  result = findInterval(result)
  
dispatch(doSomething(result));
console.log(`newPost`, posts);

  // setUser(result)

}, [search,upcoming,status,interval])

}

  const InputsSection = () => {
    return (
      <Box sx={classes.mainCardInputsSection}>
        <Grid
          container
          direction={{ xs: "row-reverse", lg: "row" }}
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} lg={6}>
            {getInput()}
          </Grid>
          <Grid item xs={12} lg={6} container direction={{ lg: "row-reverse" }}>
            {getDropdown()}
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <>
      {InputsSection()}
      <Box sx={classes.App}>
        {/*<h1>Fetched Data!!!</h1>*/}

        {posts.map((item: any, index: any) => (
          <>
            <Box sx={classes.Appcard} key={index}>
              <Box key={index}>{item.flight_number}</Box>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={6}>
                    <Item>
                      <Card sx={{ width: 275, height: 350 }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`${item.links.mission_patch}`}
                        />
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            <Box key={index}>
                              Rocket_name : {item.rocket.rocket_name}
                            </Box>

                            <Box key={index}>
                              Upcoming : {item?.upcoming?.toString()}
                            </Box>
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            <Box key={index}>
                              Launch_Status : {item?.launch_success?.toString()}
                            </Box>
                          </Typography>
                          <Typography>
                            <Box key={index}>{item.mission_name}</Box>
                          </Typography>
                          <Typography
                            sx={{ mb: 1.5 }}
                            color="text.secondary"
                          ></Typography>
                          <Typography variant="body2">
                            <Box key={index}>
                              {item.launch_year} <br /> {item.launch_date_unix}
                              <br />
                              {item.launch_date_local}
                              <br />
                              {item.mission_id} {item.is_tentative}
                              {item.tentative_max_precision}{" "}
                            </Box>
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {/*<Button size="small" onClick={(el) => (item.id) } >Learn More</Button>
                           */}
                        </CardActions>
                      </Card>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
}

export default App;
