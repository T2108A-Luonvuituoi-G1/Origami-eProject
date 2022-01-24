import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/vog_butterfly.jpg'

function ButterflySearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Butterfly</div>
                <div className='nav-search-goal-text-model-name'>Model name: Animal</div>
                <div className='nav-search-goal-text-composer'>Composer: Michael</div>
            </div>
        </>
    );
}

export default ButterflySearch;
