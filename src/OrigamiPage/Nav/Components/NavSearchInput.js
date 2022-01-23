import React, { useState } from 'react';

function NavSearchInput() {

    const [search, setSearch] = useState('');

    return (
        <>
            <input type="text" className='input-search' placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div className='nav-origami-search'>
                {search}
            </div>
        </>
    );;
}

export default NavSearchInput;
