import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/Boar.jpg'

function BoarSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Boar</div>
                <div className='nav-search-goal-text-model-name'>Model name: boar</div>
                <div className='nav-search-goal-text-composer'>Author: Tri Khai</div>
            </div>
        </>
    );
}

export default BoarSearch;
