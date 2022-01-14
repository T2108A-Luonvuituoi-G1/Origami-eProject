import React, {useEffect, useState} from 'react'

function NavClock() {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const Dates = new Date();
            setClockState(Dates.toLocaleTimeString());
        }, 1000)
    }, [])

    return (
        <div>
            {clockState}
        </div>
    )
}

export default NavClock


