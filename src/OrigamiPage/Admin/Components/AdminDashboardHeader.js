import React from 'react';
import '../Assets/Css/AdminDashboardHeader.css'

function AdminDashboardHeader() {
    return (
        <>
            <div className='admin-header-main'>
                <div className='admin-header-main-inside'>
                    <div className='admin-header-main-title'>
                        <h5>Dashboard</h5>
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className='admin-header-main-btn'>
                        <input type='button' value='Manage' className='admin-header-main-btn-manage' />
                        <input type='button' value='Add Customer' className='admin-header-main-btn-add' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboardHeader;
