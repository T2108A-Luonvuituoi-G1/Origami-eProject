import React, { Component } from 'react'
import '../Assets/Css/Home.css'
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';
import HomeHistory from './HomeHistory';
import HomeBlog from './HomeBlog';
import HomeFooter from '../Components/Footer'


export default class Home extends Component {
    render() {
        return (
            <>
                <div className='home-page'>
                    
                    {/* HEADER */}
                    <HomeHeader />

                    {/* CONTENT */}
                    <HomeContent />

                    {/* HISTORY */}
                    <HomeHistory />

                    {/* BLOG */}
                    <HomeBlog />
                    
                    <HomeFooter/>
          
                   
                </div>
            </>
        )
    }
}
