import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/lotus.jpg'

function LotusSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Lotus</div>
                <div className='nav-search-goal-text-model-name'>Model name: Plant</div>
                <div className='nav-search-goal-text-composer'>Composer: Viet Tan</div>
            </div>
        </>
    );
}

export default LotusSearch;
