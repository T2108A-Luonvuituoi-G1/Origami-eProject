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
import { Link } from 'react-router-dom';

function NavSearchInput() {

    const [search, setSearch] = useState('');

    // const handleSubmit = () => {
    //     search('')
    // }

    let goal = '';
    let goalLink = '';

    switch (search) {
        case 'japan':
        case 'japan flag':
        case 'Japan':
        case 'Japan flag':
        case 'Japan Flag':
            goal = <JapanFlagSearch />
            goalLink = '/products/jpflag'
            break;

        case 'butterfly':
        case 'Butterfly':
            goal = <ButterflySearch />;
            goalLink = '/products/butter'
            break;

        case 'lotus':
        case 'Lotus':
            goal = <LotusSearch />;
            goalLink = '/products/lotus'
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
            goalLink = '/products/vietnam'
            break;

        case 'Boar':
        case 'boar':
        case 'Wild boar':
            goal = <BoarSearch />
            goalLink = '/products/pig'
            break;

        case 'parrot':
        case 'Parrot':
            goal = <ParrotSearch />
            goalLink = '/products/parrot'
            break;

        case 'fox':
        case 'Fox':
            goal = <FoxSearch />
            goalLink = '/products/fox'
            break;

        case 'crab':
        case 'Crab':
            goal = <CrabSearch />
            goalLink = '/products/crab'
            break;

        case 'photo':
        case 'Photo':
        case 'photo frame':
        case 'photo frame':
        case 'Photo Frame':
            goal = <PhotoFrameSearch />
            goalLink = '/products/frame'
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
                <Link className='nav-goal-link' to={goalLink}
                    onClick={() => {
                        search('')
                    }}
                >{goal}</Link>
            </div>
        </>
    );;
}

export default NavSearchInput;
