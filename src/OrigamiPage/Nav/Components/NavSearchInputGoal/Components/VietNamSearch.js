import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/flagVN.jpg'

function VietNamSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>VietNam</div>
                <div className='nav-search-goal-text-model-name'>Model name: National</div>
                <div className='nav-search-goal-text-composer'>Composer: Xuan Tung</div>
            </div>
        </>
    );
}

export default VietNamSearch;
