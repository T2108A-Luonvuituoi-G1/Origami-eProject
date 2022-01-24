import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/crab.jpg'

function CrabSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Crab</div>
                <div className='nav-search-goal-text-model-name'>Model name: Animal</div>
                <div className='nav-search-goal-text-composer'>Author: Hung Cuong</div>
            </div>
        </>
    );
}

export default CrabSearch;
