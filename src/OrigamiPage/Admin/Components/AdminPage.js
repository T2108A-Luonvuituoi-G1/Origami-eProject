import React from 'react';
import AdminNav from './AdminNav';
import '../Assets/Css/AdminPage.css'
import AdminDashboardHeader from './AdminDashboardHeader';

function AdminPage() {
    return (
        <div className='admin-page'>
            {/* Nav */}
            <AdminNav />

            {/* HEADER */}
            <AdminDashboardHeader />
            
        </div>
    );
}

export default AdminPage;
