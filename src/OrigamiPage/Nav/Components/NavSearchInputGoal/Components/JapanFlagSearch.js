import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/japanflag.jpg'

function JapanFlagSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Japan flag</div>
                <div className='nav-search-goal-text-model-name'>Model name: National</div>
                <div className='nav-search-goal-text-composer'>Composer: Hiba</div>
            </div>
        </>
    );
}

export default JapanFlagSearch;
