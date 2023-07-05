import React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import logo from './images/North_Texas_Mean_Green_logo.png';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar.js';
import ResultTTS from './components/result_by_tts.js';
import ResultPrice from './components/result_by_price.js';

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";

const Item = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '33%',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ItemBelow = styled(Paper)(({ theme }) => ({
  height: '100%',
  width: '33%',
  marginTop: 5,
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333333',
  marginBottom: theme.spacing(2),
}));

const PriceBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100px',
  width: '300px',
  borderRadius: '5px',
  backgroundColor: '#333333',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  fontSize: '48px',
  fontWeight: 'bold',
  color: '#f2f2f2',
  margin: '0 auto'
});

function App() {
  {/* This is the hook block for the result_by_price component and model */}
  const [square_feet_rbp, setSquareFeetRBP] = React.useState('');
  const [days_to_sell_rbp, setDaysToSellRBP] = React.useState('');
  const [zip_code_rbp, setZipCodeRBP] = React.useState('');
  const [bedrooms_rbp, setBedroomsRBP] = React.useState('');
  const [bathrooms_rbp, setBathroomsRBP] = React.useState('');
  const [half_bathrooms_rbp, setHalfBathroomsRBP] = React.useState('');
  const [year_rbp, setYearRBP] = React.useState('');
  const [garage_rbp, setGarageRBP] = React.useState(0);

  {/* This is the hook block for result_by_tts component and model */}
  const [price_tts, setPriceTTS] = React.useState('');
  const [square_feet_tts, setSquareFeetTTS] = React.useState('');
  const [zip_code_tts, setZipcodeTTS] = React.useState('');
  const [bedrooms_tts, setBedroomsTTS] = React.useState('');
  const [bathrooms_tts, setBathroomsTTS] = React.useState('');
  const [half_bathrooms_tts, setHalfBathroomsTTS] = React.useState('');
  const [year_tts, setYearTTS] = React.useState('');
  const [garage_tts, setGarageTTS] = React.useState(0);

  const [homeActive, setHomeActive] = React.useState(true);
  const [helpActive, setHelpActive] = React.useState(false);
  const [aboutUsActive, setAboutUsActive] = React.useState(false);

  const [isChecked, setIsChecked] = React.useState(true);
  const [responsePrice, setResponsePrice] = React.useState(null);
  const [responseTTS, setResponseTTS] = React.useState(null);

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  }

  const handleSubmitTTS = () => {
    console.log(
      'Price : ', price_tts,
      'Total Square Feet: ', square_feet_tts,
      'Zip Code: ', zip_code_tts,
      'Bedrooms: ', bedrooms_tts,
      'Bathrooms: ', bathrooms_tts,
      'Half Bathrooms: ', half_bathrooms_tts,
      'Year Built: ', year_tts,
      'Has Garage: ', garage_tts
    )
    const postData = {
      p: price_tts,
      sqft: square_feet_tts, 
      zc: zip_code_tts, 
      bdrm: bedrooms_tts, 
      bthrm: bathrooms_tts, 
      hbthrm: half_bathrooms_tts, 
      yr: year_tts, 
      grg: garage_tts
    }
    console.log(postData)

    axios.post('http://localhost:8000/results_by_tts/', postData)
      .then((res) => {
        console.log('https response: ', res)
        setResponseTTS(res.data)
      })
      .catch((err) => {
        console.log('error status: ', err)
      })
  }

  const handleSubmitPrice = () => {
    console.log(
      'Total Square Feet: ', square_feet_rbp,
      'Days to Sell: ', days_to_sell_rbp,
      'Zip Code: ', zip_code_rbp,
      'Bedrooms: ', bedrooms_rbp,
      'Bathrooms: ', bathrooms_rbp,
      'Half Bathrooms: ', half_bathrooms_rbp,
      'Year Built: ', year_rbp,
      'Has Garage: ', garage_rbp
    )
    const postData = {
      sqft: square_feet_rbp, 
      dts: days_to_sell_rbp, 
      zc: zip_code_rbp, 
      bdrm: bedrooms_rbp, 
      bthrm: bathrooms_rbp, 
      hbthrm: half_bathrooms_rbp, 
      yr: year_rbp, 
      grg: garage_rbp
    }
    console.log(postData)

    axios.post('http://localhost:8000/results_by_price/', postData)
      .then((res) => {
        console.log('https response: ', res)
        setResponsePrice(res.data)
      })
      .catch((err) => {
        console.log('error status: ', err)
      })
  }

  const zip_codes = [
    { label: "75052", value: 75052 },
    { label: "76001", value: 76001 },
    { label: "76002", value: 76002 },
    { label: "76012", value: 76012 },
    { label: "76013", value: 76013 },
    { label: "76014", value: 76014 },
    { label: "76017", value: 76017 },
    { label: "76018", value: 76018 },
    { label: "76020", value: 76020 },
    { label: "76021", value: 76021 },
    { label: "76028", value: 76028 },
    { label: "76034", value: 76034 },
    { label: "76036", value: 76036 },
    { label: "76039", value: 76039 },
    { label: "76040", value: 76040 },
    { label: "76051", value: 76051 },
    { label: "76052", value: 76052 },
    { label: "76063", value: 76063 },
    { label: "76092", value: 76092 },
    { label: "76104", value: 76104 },
    { label: "76107", value: 76107 },
    { label: "76108", value: 76108 },
    { label: "76109", value: 76109 },
    { label: "76112", value: 76112 },
    { label: "76114", value: 76114 },
    { label: "76116", value: 76116 },
    { label: "76117", value: 76117 },
    { label: "76119", value: 76119 },
    { label: "76120", value: 76120 },
    { label: "76123", value: 76123 },
    { label: "76126", value: 76126 },
    { label: "76131", value: 76131 },
    { label: "76135", value: 76135 },
    { label: "76137", value: 76137 },
    { label: "76140", value: 76140 },
    { label: "76179", value: 76179 },
    { label: "76180", value: 76180 },
    { label: "76182", value: 76182 },
    { label: "76244", value: 76244 },
    { label: "76248", value: 76248 }
  ];
  

  return (
    <Box bgcolor='#282c34' height='100vh'>
      <Navbar
        setHomeActive={setHomeActive}
        setAboutUsActive={setAboutUsActive}
        setHelpActive={setHelpActive}
      />
      <Container sx={{minHeight: '90vh'}}>
        {homeActive && (
          <Grid container spacing={-4} alignItems='center' justifyContent='center' sx={{display: 'flex', flexDirection: 'column', minHeight: '87vh'}}>
            <Item>
              <FormGroup>
                <FormControlLabel 
                  control={<Switch onChange={handleIsChecked}/>} 
                  label = {isChecked ? 'Results by Time to Sell' : 'Results by Price'}
                />
                {(isChecked == true) ? (
                  <ResultTTS 
                    zip_codes={zip_codes}
                    price_tts={price_tts}
                    setPriceTTS={setPriceTTS}
                    square_feet_tts={square_feet_tts}
                    setSquareFeetTTS={setSquareFeetTTS}
                    zip_code_tts={zip_code_tts}
                    setZipcodeTTS={setZipcodeTTS}
                    bedrooms_tts={bedrooms_tts}
                    setBedroomsTTS={setBedroomsTTS}
                    bathrooms_tts={bathrooms_tts}
                    setBathroomsTTS={setBathroomsTTS}
                    half_bathrooms_tts={half_bathrooms_tts}
                    setHalfBathroomsTTS={setHalfBathroomsTTS}
                    year_tts={year_tts}
                    setYearTTS={setYearTTS}
                    garage_tts={garage_tts}
                    setGarageTTS={setGarageTTS}
                    handleSubmitTTS={handleSubmitTTS}
                  />
                ) : (
                  <ResultPrice
                    zip_codes={zip_codes}
                    square_feet_rbp={square_feet_rbp}
                    setSquareFeetRBP={setSquareFeetRBP}
                    days_to_sell_rbp={days_to_sell_rbp}
                    setDaysToSellRBP={setDaysToSellRBP}
                    zip_code_rbp={zip_code_rbp}
                    setZipCodeRBP={setZipCodeRBP}
                    bedrooms_rbp={bedrooms_rbp}
                    setBedroomsRBP={setBedroomsRBP}
                    bathrooms_rbp={bathrooms_rbp}
                    setBathroomsRBP={setBathroomsRBP}
                    half_bathrooms_rbp={half_bathrooms_rbp}
                    setHalfBathroomsRBP={setHalfBathroomsRBP}
                    year_rbp={year_rbp}
                    setYearRBP={setYearRBP}
                    garage_rbp={garage_rbp}
                    setGarageRBP={setGarageRBP}
                    handleSubmitPrice={handleSubmitPrice}
                  />
                )}
              </FormGroup>
            </Item>
            {(responseTTS != null && isChecked == true) &&
              <ItemBelow>
                <Box sx={{textAlign: 'center', paddingTop: 1}}>
                  <Title>Your house should sell in:</Title>
                </Box>
                <PriceBox>
                  {responseTTS} days
                </PriceBox>
                <Box sx={{textAlign: 'center', marginTop: 2, paddingBottom: 1}}>
                  <Typography variant='body1' color='textSecondary'>Price estimated based on generated data</Typography>
                </Box>
              </ItemBelow>
            }
            {(responsePrice != null && isChecked == false) &&
              <ItemBelow>
                <Box sx={{textAlign: 'center', paddingTop: 1}}>
                  <Title>You should set the price as:</Title>
                </Box>
                <PriceBox>
                  ${responsePrice}
                </PriceBox>
                <Box sx={{textAlign: 'center', marginTop: 2, paddingBottom: 1}}>
                  <Typography variant='body1' color='textSecondary'>Price estimated based on generated data</Typography>
                </Box>
              </ItemBelow>
            }
          </Grid>
          )}
        {aboutUsActive && (
          <Box sx={{
            textAlign: 'center',
            mt: 4,
            backgroundColor: '#222',
            color: '#fff',
            padding: '2rem',
            borderRadius: '0.5rem',
          }}>
            <img src={logo} alt="logo" style={{ marginTop: '2rem' }} />
            <Typography variant="h4" component="h1" sx={{ mt: 4, fontFamily: 'Roboto' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Roboto' }}>
              Created by: Pearson Davenport, Calvin James, Hang Tran, ...
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Roboto' }}>
              This project was created for our CSCE 4430: Programming Languages class project for the Spring 2023 semester at The University of North Texas
            </Typography>
            <Link
              href="https://github.com/CJames95/CSCE4430"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 4, display: 'block', fontFamily: 'Roboto' }}
            >
              Link to our public Github repo
            </Link>
          </Box>
        
        )}
        {helpActive && (
          <Box sx={{
            textAlign: 'center',
            mt: 4,
            backgroundColor: '#222',
            color: '#fff',
            padding: '2rem',
            borderRadius: '0.5rem',
          }}>
            <img src={logo} alt="logo" style={{ marginTop: '2rem' }} />
            <Typography variant="h4" component="h1" sx={{ mt: 4, fontFamily: 'Roboto' }}>
              Help/Contact
            </Typography>
            <Typography variant="body1" sx={{ mt: 4, fontFamily: 'Roboto' }}>
              If you have a question or comment you can click on the Google Form link below and fill it out. We will try to get back with you as soon as possible 
            </Typography>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfr_-FoJahDgMl9ieiyATgwaN6KbT3BFvklfMIXrCXgdLTvyA/viewform?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 4, display: 'block', fontFamily: 'Roboto' }}
            >
              Real Estate Estimator - Help Form
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );}  
export default App;  