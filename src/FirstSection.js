import React from 'react';
import "./firstsection.scss"
import Grid from '@mui/material/Grid';
import PlaceIcon from '@mui/icons-material/Place';
const FirstSection = () => {
    return (
        <div className='firstSectionContainer'>
            <div className='firstSection'>
                <Grid container columnSpacing={2} >
                    <Grid item md={6} xs={12} display="flex" justifyContent="space-around">
                        <div className='rightPart'>
                            <img src='https://i.pinimg.com/736x/20/d9/9b/20d99b97a35ea937322b319ad5122128--small-office-office-spaces.jpg' height={450}></img>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} display="flex" justifyContent="center">
                        <div className='leftPart'>
                            <h1>
                                Discover Most Suitable Property
                            </h1>


                            <p>
                                Find a variety of Properties that suit you very easily Forget all difficulties in finding a residence for you
                            </p>
                            <div className='searchBox'>
                                <div className='locLogo'>
                                    <PlaceIcon></PlaceIcon>
                                </div>
                                <div className='inputfield'>
                                    <input type='text'></input>
                                </div>
                                <div className='searchButtonContainer'>
                                    <button>Search</button>
                                </div>

                            </div>
                            <div className='popularity' >
                                <div className='valuesSection'>
                                    <div className='first'>
                                        <div>
                                            9,000
                                        </div>
                                        <div className='plus'>
                                            +
                                        </div>

                                    </div>
                                    <div>Premium Product</div>
                                </div>
                                <div className='valuesSection'>
                                    <div className='first'>
                                        <div>
                                            2,000
                                        </div>
                                        <div className='plus'>
                                            +
                                        </div>

                                    </div>
                                    <div>Happy Customer</div>
                                </div>
                                <div className='valuesSection'>
                                    <div className='first'>
                                        <div>
                                            9,000
                                        </div>
                                        <div className='plus'>
                                            +
                                        </div>

                                    </div>
                                    <div>Premium Product</div>
                                </div>

                            </div>


                        </div>
                    </Grid>

                </Grid>


            </div>
        </div>
    )
}

export default FirstSection