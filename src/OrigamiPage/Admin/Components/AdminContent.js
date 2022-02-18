import React from 'react'
import '../Assets/Css/AdminContent.css'
import CircleChart1 from '../Assets/Images/circle-chart1.png'
import CircleChart2 from '../Assets/Images/circle-chart2.png'
import CircleChart3 from '../Assets/Images/circle-chart3.png'
import TotalChart from '../Assets/Images/total-chart.png'

function AdminContent() {
    return (
        <div className='admin-content-main'>
            {/* CHART1 */}
            <div className='admin-content-chart1 admin-content-chart'>
                <div className='admin-content-chart1-title admin-content-chart-title'>
                    <p className='admin-content-chart1-title-header admin-content-chart-title-header'>Overall statistics</p>
                    <p className='admin-content-chart1-title-footer'>Daily information about statistics in system</p>
                </div>
                <div className='admin-content-chart1-content'>
                    <div className='admin-content-circle admin-content-circle1'>
                        <img src={CircleChart1} className='admin-content-img-chart' />
                    </div>
                    <div className='admin-content-circle admin-content-circle2'>
                        <img src={CircleChart2} className='admin-content-img-chart' />
                    </div>
                    <div className='admin-content-circle admin-content-circle3'>
                        <img src={CircleChart3} className='admin-content-img-chart' />
                    </div>
                </div>

                <div className='admin-content-chart1-detail'>
                    <p className='admin-content-number-chart'>2</p>
                    <p className='admin-content-number-chart'>7</p>
                    <p className='admin-content-number-chart'>9</p>
                </div>

                <div className='admin-content-chart1-footer'>
                    <p className='admin-content-p-chart'>New Users</p>
                    <p className='admin-content-p-chart'>New Origamis</p>
                    <p className='admin-content-p-chart'>Subscribers</p>
                </div>
            </div>

            {/* CHART2 */}
            <div className='admin-content-chart2 admin-content-chart'>
                <div className='admin-content-chart2-title admin-content-chart-title'>
                    <p className='admin-content-chart2-title-header admin-content-chart-title-header'>Total income &amp; spend statistics</p>
                </div>
                <div className='admin-content-chart2-content-sub'>
                    <div className='admin-content-chart2-content-sub-title1'>
                        <h4 className='admin-title1-income'>TOTAL INCOME</h4>
                        <p className='admin-title1-income-sub'>$3950</p>
                    </div>
                    <div className='admin-content-chart2-content-sub-title2'>
                        <h4 className='admin-title1-spend'>TOTAL SPEND</h4>
                        <p className='admin-title1-spend-sub'>$2189</p>
                    </div>
                </div>
                <div className='admin-content-chart2-content'>
                    <img src={TotalChart} className='admin-content-chart2-content-img' />
                </div>
            </div>
        </div>
    )
}
export default AdminContent;