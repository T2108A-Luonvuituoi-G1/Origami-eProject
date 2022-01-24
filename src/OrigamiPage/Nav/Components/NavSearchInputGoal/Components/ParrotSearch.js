import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/parrot.jpg'

function ParrotSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Parrot</div>
                <div className='nav-search-goal-text-model-name'>Model name: Animal</div>
                <div className='nav-search-goal-text-composer'>Author: Tien Quyet</div>
            </div>
        </>
    );
}

export default ParrotSearch;
