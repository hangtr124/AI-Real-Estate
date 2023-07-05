import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material/';
import { styled } from '@mui/material/styles';

export default function Navbar({
    setHomeActive,
    setAboutUsActive,
    setHelpActive
}) {

    const ToolbarButton = styled(Button)(({ theme }) => ({
        fontFamily: 'Segoe UI',
        fontSize: 18,
        fontWeight: 500,
        color: 'white',
        paddingRight: 15,
        paddingLeft: 15
      }));

    return (
        <AppBar position="static">
            <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <Toolbar disableGutters>
                    <ToolbarButton 
                        onClick={() => {
                            setHomeActive(true);
                            setAboutUsActive(false);
                            setHelpActive(false);
                        }}
                    >
                    Home
                    </ToolbarButton>
                    <ToolbarButton 
                        onClick={() => {
                            setHomeActive(false);
                            setAboutUsActive(true);
                            setHelpActive(false);
                        }}
                    >
                    About
                    </ToolbarButton>
                    <ToolbarButton 
                        onClick={() => {
                            setHomeActive(false);
                            setAboutUsActive(false);
                            setHelpActive(true);
                        }}
                    >
                    Contact
                    </ToolbarButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}