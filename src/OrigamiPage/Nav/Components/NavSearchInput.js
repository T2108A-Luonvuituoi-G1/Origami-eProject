import React, { useState } from 'react';
import JapanFlagSearch from './NavSearchInputGoal/Components/JapanFlagSearch';
import ButterflySearch from './NavSearchInputGoal/Components/ButterflySearch';
import LotusSearch from './NavSearchInputGoal/Components/LotusSearch';
import VietNamSearch from './NavSearchInputGoal/Components/VietNamSearch';
import BoarSearch from './NavSearchInputGoal/Components/BoarSearch';
import ParrotSearch from './NavSearchInputGoal/Components/ParrotSearch';
import FoxSearch from './NavSearchInputGoal/Components/FoxSearch';
import CrabSearch from './NavSearchInputGoal/Components/CrabSearch';
import PhotoFrameSearch from './NavSearchInputGoal/Components/PhotoFrameSearch';

function NavSearchInput() {

    const [search, setSearch] = useState('');

    let goal = '';

    switch (search) {
        case 'japan':
        case 'japan flag':
        case 'Japan':
        case 'Japan flag':
        case 'Japan Flag':
            goal = <JapanFlagSearch />
            break;

        case 'butterfly':
        case 'Butterfly':
            goal = <ButterflySearch />;
            break;

        case 'lotus':
        case 'Lotus':
            goal = <LotusSearch />;
            break;

        case 'vietnam':
        case 'vietnam flag':
        case 'viet nam flag':
        case 'viet nam':
        case 'viet nam flag':
        case 'VietNam':
        case 'VietNam flag':
        case 'Viet Nam':
        case 'Viet Nam flag':
            goal = <VietNamSearch />
            break;

        case 'Boar':
        case 'boar':
        case 'Wild boar':
            goal = <BoarSearch />
            break;

        case 'parrot':
        case 'Parrot':
            goal = <ParrotSearch />
            break;

        case 'fox':
        case 'Fox':
            goal = <FoxSearch />
            break;

        case 'crab':
        case 'Crab':
            goal = <CrabSearch />
            break;

        case 'photo':
        case 'Photo':
        case 'photo frame':
        case 'photo frame':
        case 'Photo Frame':
            goal = <PhotoFrameSearch />
            break;

        default:
            break;
    }

    return (
        <>
            <input type="text" className='input-search' placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className='nav-origami-search'>
                {goal}
            </div>
        </>
    );;
}

export default NavSearchInput;
