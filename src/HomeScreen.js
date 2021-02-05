import React from 'react'
import Banner from './Banner'
import './HomeScreen.css'
import Nav from './Nav'
import requests from './Requests'
import Row from './Row'


function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />

            <Banner />

            <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}/>

{/*                 
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}/>

                
            <Row
                title="Action Movies"
                fetchUrl={requests.fecthActionMovies}/>

                
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}/>

                
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}/> */}


        </div>
    )
}

export default HomeScreen
