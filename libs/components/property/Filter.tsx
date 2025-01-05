import { IconButton, OutlinedInput, Stack, Tooltip, Typography, Checkbox, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { propertySquare } from "../../config";

const Filter = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);
  const [propertyPrice, setPropertyPrice] = useState({
    start: 0,
    end: 250000,
  });

  return (
    <Stack className={"filter-main"}>
      <Stack className={"find-your-home"} mb={"40px"}>
        <Typography className={"title-main"}>Find your home</Typography>
        <Stack className={"input-box"}>
          <OutlinedInput
          value={searchText}
          type={"text"}
          className={"search-input"}
          placeholder={"What are you lokking?"}
          onChange={(e: any) => setSearchText(e.target.value)}
           />
           <img src={"/img/icons/search_icon.png"} alt="" />
           <Tooltip title="Reset">
            <IconButton>
              <RefreshIcon />
            </IconButton> 
           </Tooltip>
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>
          Location
        </Typography>
        <Stack 
        className={"property-location"}
        style={{height: showMore ? "253px" : "115px"}}
        >
          {["SEOUL", "BUSAN", "DAEGU"].map((location: string) => {
            return (
              <Stack className={"input-box"} key={location}>
                <Checkbox 
                id={location}
                className="property-checkbox"
                size="small"
                color="default"
                value={location}
                />
                <label htmlFor={location} style={{cursor: "pointer"}}>
                  <Typography className={"property-type"}>{location}</Typography>
                </label>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
      <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"}>Property Type</Typography>
        {["APARTMENT", "HOUSE", "VILLA"].map((type: string) => {
          return (
            <Stack className={"input-box"} key={type}>
              <Checkbox
              id={type}
              className="property-checkbox"
              color="default"
              size="small"
              value={type} 
              />
              <label style={{cursor: "pointer"}}>
                <Typography className="property_type">{type}</Typography>
              </label>
            </Stack>
          )
        })}
      </Stack>
        <Stack className={"find-your-home"} mb={"30px"}>
          <Typography className={"title"}>Rooms</Typography>
          <Stack className={"button-group"}>
            <Button 
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "2px solid #181a20"
            }}
            >
              Any
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              1
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              2
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              3
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              4
            </Button>
            <Button 
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9"
            }}
            >
              +5
            </Button>
          </Stack>
        </Stack>
        <Stack className={"find-your-home"} mb={"30px"}>
          <Typography className={"title"}>Bedrooms</Typography>
          <Stack className={"button-group"}>
            <Button 
            sx={{
              borderRadius: "12px 0 0 12px",
              border: "2px solid #181a20"
            }}
            >
              Any
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              1
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              2
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              3
            </Button>
            <Button 
            sx={{
              borderRadius: 0,
              border: "1px solid #b9b9b9"
            }}
            >
              4
            </Button>
            <Button 
            sx={{
              borderRadius: "0 12px 12px 0",
              border: "1px solid #b9b9b9"
            }}
            >
              +5
            </Button>
          </Stack>
        </Stack>
        <Stack className={"find-your-home"} mb={"30px"}>
          <Typography className={"title"}>Options</Typography>
          <Stack className={"input-box"}>
            <Checkbox 
            id={"Barter"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyBarter"}
            />
            <label htmlFor={"Barter"} style={{ cursor: "pointer"}}>
              <Typography className={"property-type"}>Barter</Typography>
            </label>
          </Stack>
          <Stack className={"input-box"}>
            <Checkbox 
            id={"Rent"}
            className="property-checkbox"
            color="default"
            size="small"
            value={"propertyRent"}
            />
            <label htmlFor={"Rent"} style={{ cursor: "pointer"}}>
              <Typography className={"property-type"}>Rent</Typography>
            </label>
          </Stack>
        </Stack>
        <Stack className={"find-your-home"} mb={"30px"}>
        <Typography className={"title"} mb={"10px"}>Square meter</Typography>
        <Stack className={"square-year-input"}>
          <FormControl>
            <InputLabel id={"demo-simple-select-label"}>Min</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="Min"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={"central-divider"}></div>
          <FormControl>
            <InputLabel id={"demo-simple-select-label"}>Max</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={500}
            label="Max"
            >
              {propertySquare.map((square: number) => (
                <MenuItem value={square} key={square}>
                  {square}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        </Stack>
        <Stack className={"find-your-home"}>
          <Typography className={"title"}>Price Range</Typography>
          <Stack className={"square-year-input"}>
            <input 
            type="number"
            placeholder="$ min"
            min={0}
            value={propertyPrice?.start ?? 0}
            onChange={(e: any) => {
              console.log("value: ", e.target.value);
              if (e.target.value >= 0) {
                setPropertyPrice({...propertyPrice, start: e.target.value});
              }
            }}
             />
             <div className={"central-divider"}></div>
             <input 
             type="number" 
             placeholder="$ max"
             value={propertyPrice?.end ?? 0}
             onChange={(e: any) => {
              console.log("value: ", e.target.value);
              if (e.target.value >= 0) {
                setPropertyPrice({ ...propertyPrice, end: e.target.value});
              }
             }}
             />
          </Stack>
        </Stack>
    </Stack> 
  )
}

export default Filter