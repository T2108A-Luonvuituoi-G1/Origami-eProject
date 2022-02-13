import React from 'react';
import AdminNav from './AdminNav';
import '../Assets/Css/AdminPage.css'
import AdminDashboardHeader from './AdminDashboardHeader';
import AdminContent from './AdminContent';

function AdminPage() {
    return (
        <div className='admin-page'>
            {/* Nav */}
            <AdminNav />

            {/* HEADER */}
            <AdminDashboardHeader />

            {/* CONTENT */}
            <AdminContent />
            
        </div>
    );
}

export default AdminPage;
