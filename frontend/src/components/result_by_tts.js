import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import { FormControl, Input } from '@mui/material';

export default function ResultTTS({
    zip_codes,
    price_tts,
    setPriceTTS,
    square_feet_tts,
    setSquareFeetTTS,
    zip_code_tts,
    setZipcodeTTS,
    bedrooms_tts,
    setBedroomsTTS,
    bathrooms_tts,
    setBathroomsTTS,
    half_bathrooms_tts,
    setHalfBathroomsTTS,
    year_tts,
    setYearTTS,
    garage_tts,
    setGarageTTS,
    handleSubmitTTS
}) {

    const [price, setPrice] = React.useState(true);
    const [square_feet, setSquareFeet] = React.useState(true);
    const [zip_code, setZipCode] = React.useState(true);
    const [bedrooms, setBedrooms] = React.useState(true);
    const [bathrooms, setBathrooms] = React.useState(true);
    const [half_bathrooms, setHalfBathrooms] = React.useState(true);
    const [year, setYear] = React.useState(true);

    useEffect(() => {
        if(price_tts == null || price_tts == '') {
            setPrice(false)
        }
        else {
            setPrice(true)
        }
        if(square_feet_tts == null || square_feet_tts == '') {
            setSquareFeet(false)
        }
        else {
            setSquareFeet(true)
        }
        if(zip_code_tts == null || zip_code_tts == '') {
            setZipCode(false)
        }
        else {
            setZipCode(true)
        }
        if(bedrooms_tts == null || bedrooms_tts == '') {
            setBedrooms(false)
        }
        else {
            setBedrooms(true)
        }
        if(bathrooms_tts == null || bathrooms_tts == '') {
            setBathrooms(false)
        }
        else {
            setBathrooms(true)
        }
        if(half_bathrooms_tts == null || half_bathrooms_tts == '') {
            setHalfBathrooms(false)
        }
        else {
            setHalfBathrooms(true)
        }
        if(year_tts == null || year_tts == '') {
            setYear(false)
            console.log(year)
        }
        else {
            setYear(true)
        }
    }, [price, square_feet, zip_code, bedrooms, bathrooms, half_bathrooms, year,
        price_tts, square_feet_tts, zip_code_tts, bedrooms_tts, bathrooms_tts, half_bathrooms_tts, year_tts])

    const NUMERIC_REGEX = /^[0-9]+$/;

    const onZipCodeChange = (event, values) => {
        setZipcodeTTS(values)
    }

    const validateForm = (event) => {
        if(
            price === true &&
            square_feet === true &&
            zip_code === true &&
            bedrooms === true &&
            bathrooms === true &&
            half_bathrooms === true &&
            year === true
        ) {
            handleSubmitTTS(event)
        }
    }

    return (
        <FormGroup>
            <FormControl>
                <TextField
                    autoFocus
                    required
                    focused
                    label="Price"
                    margin='dense'
                    value={price_tts}
                    color={(price == true) ? 'primary' : 'warning'}
                    onChange={(event) => setPriceTTS(event.target.value)}
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
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    required
                    focused
                    label="Total Square Feet"
                    margin='dense'
                    value={square_feet_tts}
                    color={(square_feet == true) ? 'primary' : 'warning'}
                    onChange={(event) => setSquareFeetTTS(event.target.value)}
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
                    value={bedrooms_tts}
                    color={(bedrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setBedroomsTTS(event.target.value)}
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
                    value={bathrooms_tts}
                    color={(bathrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setBathroomsTTS(event.target.value)}
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
                    value={half_bathrooms_tts}
                    color={(half_bathrooms == true) ? 'primary' : 'warning'}
                    onChange={(event) => setHalfBathroomsTTS(event.target.value)}
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
                    value={year_tts}
                    color={(year == true) ? 'primary' : 'warning'}
                    onChange={(event) => setYearTTS(event.target.value)}
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
                        value={garage_tts}
                        onChange={(event) => setGarageTTS(event.target.value)}
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