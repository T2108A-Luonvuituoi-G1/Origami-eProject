import React from 'react'
import '../Assets/Css/AdminContent.css'

function AdminContent() {
    return (
        <div className='admin-content-main'>
            <div className='admin-content-chart1 admin-content-chart'>
                <div className='admin-content-chart1-title admin-content-chart-title'>
                    <p className='admin-content-chart1-title-header admin-content-chart-title-header'>Overall statistics</p>
                    <p className='admin-content-chart1-title-footer'>Daily information about statistics in system</p>
                </div>
                <div className='admin-content-chart1-content'>
                    <div className='admin-content-circle admin-content-circle1'></div>
                    <div className='admin-content-circle admin-content-circle2'></div>
                    <div className='admin-content-circle admin-content-circle3'></div>
                </div>
            </div>
            <div className='admin-content-chart2 admin-content-chart'>
                <div className='admin-content-chart2-title admin-content-chart-title'>
                    <p className='admin-content-chart2-title-header admin-content-chart-title-header'>Total income &amp; spend statistics</p>
                </div>
            </div>
        </div>
    )
}
export default AdminContent;