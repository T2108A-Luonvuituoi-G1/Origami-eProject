import React from 'react';
import '../Assets/Css/NavGoalSearch.css'
import Img from '../Assets/Images/frameimg.jpg'

function PhotoFrameSearch() {
    return (
        <>
            <img src={Img} className='nav-search-goal-img'/>
            <div className='nav-search-goal-text'>
                <div className='nav-search-goal-text-name'>Photo frame</div>
                <div className='nav-search-goal-text-model-name'>Model name: Item</div>
                <div className='nav-search-goal-text-composer'>Author: Xuan Tung</div>
            </div>
        </>
    );
}

export default PhotoFrameSearch;
