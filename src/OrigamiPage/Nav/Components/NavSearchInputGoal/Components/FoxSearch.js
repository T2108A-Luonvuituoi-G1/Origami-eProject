import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/fox.jpg'

function FoxSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Fox</div>
                <div className='nav-search-goal-text-model-name'>Model name: Animal</div>
                <div className='nav-search-goal-text-composer'>Author: Tien Quyet</div>
            </div>
        </>
    );
}

export default FoxSearch;
