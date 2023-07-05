import React, { useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import { FormControl } from '@mui/material';

export default function ResultPrice({
    zip_codes,
    square_feet_rbp,
    setSquareFeetRBP,
    days_to_sell_rbp,
    setDaysToSellRBP,
    zip_code_rbp,
    setZipCodeRBP,
    bedrooms_rbp,
    setBedroomsRBP,
    bathrooms_rbp,
    setBathroomsRBP,
    half_bathrooms_rbp,
    setHalfBathroomsRBP,
    year_rbp,
    setYearRBP,
    garage_rbp,
    setGarageRBP,
    handleSubmitPrice
}) {

    const [square_feet, setSquareFeet] = React.useState(false);
    const [days_to_sell, setDaysToSell] = React.useState(false);
    const [zip_code, setZipCode] = React.useState(false);
    const [bedrooms, setBedrooms] = React.useState(false);
    const [bathrooms, setBathrooms] = React.useState(false);
    const [half_bathrooms, setHalfBathrooms] = React.useState(false);
    const [year, setYear] = React.useState(false);

    useEffect(() => {
        if(square_feet_rbp == null || square_feet_rbp == '') {
            setSquareFeet(false)
        }
        else {
            setSquareFeet(true)
        }
        if(days_to_sell_rbp == null || days_to_sell_rbp == '') {
            setDaysToSell(false)
        }
        else {
            setDaysToSell(true)
        }
        if(zip_code_rbp == null || zip_code_rbp == '') {
            setZipCode(false)
        }
        else {
            setZipCode(true)
        }
        if(bedrooms_rbp == null || bedrooms_rbp == '') {
            setBedrooms(false)
        }
        else {
            setBedrooms(true)
        }
        if(bathrooms_rbp == null || bathrooms_rbp == '') {
            setBathrooms(false)
        }
        else {
            setBathrooms(true)
        }
        if(half_bathrooms_rbp == null || half_bathrooms_rbp == '') {
            setHalfBathrooms(false)
        }
        else {
            setHalfBathrooms(true)
        }
        if(year_rbp == null || year_rbp == '') {
            setYear(false)
        }
        else {
            setYear(true)
        }
    }, [square_feet, days_to_sell, zip_code, bedrooms, bathrooms, half_bathrooms, year,
        square_feet_rbp, days_to_sell_rbp ,zip_code_rbp, bedrooms_rbp, bathrooms_rbp, half_bathrooms_rbp, year_rbp])

    const NUMERIC_REGEX = /^[0-9]+$/;

    const onZipCodeChange = (event, values) => {
        setZipCodeRBP(values)
    }

    const validateForm = (event) => {
        if(
            square_feet == true &&
            days_to_sell == true &&
            zip_code == true &&
            bedrooms == true &&
            bathrooms == true &&
            half_bathrooms == true &&
            year == true
        ) {
            handleSubmitPrice(event)
        }
    }

    return (
        <FormGroup>
            <FormControl>
                <TextField
                    autoFocus
                    required
                    focused
                    label="Total Square Feet"
                    margin='dense'
                    value={square_feet_rbp}
                    color={(square_feet == true) ? 'primary' : 'warning'}
                    onChange={(event) => setSquareFeetRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>ft.</InputAdornment>
                    }}
                />
                <TextField
                    required
                    focused
                    label="Time to Sell"
                    margin='dense'
                    value={days_to_sell_rbp}
                    color={(days_to_sell == true) ? 'primary' : 'warning'}
                    onChange={(event) => setDaysToSellRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>days</InputAdornment>
                    }}
                />
                <Autocomplete
                    options={zip_codes}
                    getOptionLabel={(option) => option.label}
                    clearOnEscape
                    autoSelect
                    autoHighlight
                    onInputChange={onZipCodeChange}
                    renderInput={(params) => 
                        <TextField 
                            required
                            focused
                            {...params} 
                            label='Zip Code' 
                            margin='dense'
                            color={(zip_code == true) ? 'primary' : 'warning'}
                        />
                    }
                />
                <TextField
                    required
                    focused
                    label="Bedrooms"
                    margin='dense'
                    value={bedrooms_rbp}
                    color={(bedrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setBedroomsRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                />
                <TextField
                    required
                    focused
                    label="Bathrooms"
                    margin='dense'
                    value={bathrooms_rbp}
                    color={(bathrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setBathroomsRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                />
                <TextField
                    required
                    focused
                    label="Half Bathrooms"
                    margin='dense'
                    value={half_bathrooms_rbp}
                    color={(half_bathrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setHalfBathroomsRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                />
                <TextField
                    required
                    focused
                    label="Year Built"
                    margin='dense'
                    value={year_rbp}
                    color={(year == true) ? 'primary' : 'warning'}
                    onChange={(event) => setYearRBP(event.target.value)}
                    onKeyDown={(event) => {
                        if(event.key === 'Backspace' || 
                           event.key === 'Home' || 
                           event.key === 'End' || 
                           event.key === 'Shift' || 
                           event.key === 'Tab' ||
                           NUMERIC_REGEX.test(event.key) == true) {
                            // do nothing to stop this
                        }
                        else {
                            event.preventDefault();
                        }
                    }}
                />
                <FormControl required focused margin='dense' sx={{ paddingBottom: 1 }}>
                    <InputLabel>Has Garage</InputLabel>
                    <Select
                        required
                        value={garage_rbp}
                        onChange={(event) => setGarageRBP(event.target.value)}
                        input={<OutlinedInput label='Has Garage' />}
                        margin='dense'
                    >
                        <MenuItem value={1}>Yes</MenuItem>
                        <MenuItem value={0}>No</MenuItem>
                    </Select>
                </FormControl>
                <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit" 
                    size='large'
                    onClick={e => validateForm(e)}
                >
                    Submit
                </Button>
            </FormControl>
        </FormGroup>
    );
}