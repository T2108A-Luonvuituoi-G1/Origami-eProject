import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/AdminContent.css'
import CircleChart1 from '../Assets/Images/circle-chart1.png'
import CircleChart2 from '../Assets/Images/circle-chart2.png'
import CircleChart3 from '../Assets/Images/circle-chart3.png'
import TotalChart from '../Assets/Images/total-chart.png'
import ChartContent3 from '../Assets/Images/chart1.png'
import ChartContent4 from '../Assets/Images/chart4.png'
import ChartContent4Down from '../Assets/Images/chart4-down.png'

function AdminContent() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [note, setNote] = useState('')
    const [border1, setBorder1] = useState('')
    const [border2, setBorder2] = useState('')
    const [border3, setBorder3] = useState('')
    const [border4, setBorder4] = useState('')

    const handleClickCheck = () => {
        if (title == '') {
            setBorder1('0.2vw solid #DD4A48')
        } else {
            setBorder1('0.2vw solid rgb(63 133 26)')
        }

        if (author == '') {
            setBorder2('0.2vw solid #DD4A48')
        } else {
            setBorder2('0.2vw solid rgb(63 133 26)')
        }

        if (content == '') {
            setBorder3('0.2vw solid #DD4A48')
        } else {
            setBorder3('0.2vw solid rgb(63 133 26)')
        }

        if (note == '') {
            setBorder4('0.2vw solid #DD4A48')
        } else {
            setBorder4('0.2vw solid rgb(63 133 26)')
        }

        if (title != '' && author != '' && content != '' && note != '') {
            setTitle('');
            setAuthor('');
            setContent('');
            setNote('');
            setBorder1('none');
            setBorder2('none');
            setBorder3('none');
            setBorder4('none');
        }
    }

    return (
        <>
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

            <div className='admin-main2'>
                <div className='admin-content-chart3'>
                    <p className='admin-content-chart3-title'>User Statistics</p>
                    <img src={ChartContent3} className='admin-chart3-content' />
                    <div className='admin-chart3-content-wave-area'>
                        <svg className='admin-chart3-content-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#0099ff" fill-opacity="0.4" d="M0,160L30,176C60,192,120,224,180,197.3C240,171,300,85,360,69.3C420,53,480,107,540,160C600,213,660,267,720,282.7C780,299,840,277,900,261.3C960,245,1020,235,1080,245.3C1140,256,1200,288,1260,277.3C1320,267,1380,213,1410,186.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                        </svg>
                        <svg className='admin-chart3-content-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="0.4" d="M0,224L34.3,186.7C68.6,149,137,75,206,85.3C274.3,96,343,192,411,197.3C480,203,549,117,617,106.7C685.7,96,754,160,823,186.7C891.4,213,960,203,1029,176C1097.1,149,1166,107,1234,90.7C1302.9,75,1371,85,1406,90.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                        <svg className='admin-chart3-content-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.4" d="M0,288L26.7,288C53.3,288,107,288,160,245.3C213.3,203,267,117,320,106.7C373.3,96,427,160,480,165.3C533.3,171,587,117,640,112C693.3,107,747,149,800,186.7C853.3,224,907,256,960,256C1013.3,256,1067,224,1120,218.7C1173.3,213,1227,235,1280,250.7C1333.3,267,1387,277,1413,282.7L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                    </div>
                    <div className='admin-chart3-content-footer'>
                        <div className='admin-chart3-check-box1'></div>
                        <p className='admin-chart3-check-box1-sub' >Subscribers</p>
                        <div className='admin-chart3-check-box2'></div>
                        <p className='admin-chart3-check-box2-sub' >New Visitors</p>
                        <div className='admin-chart3-check-box3'></div>
                        <p className='admin-chart3-check-box3-sub'>Active Users</p>
                    </div>
                </div>

                <div className='admin-content-chart4'>
                    <div className='admin-content-chart4-up'>
                        <p className='admin-content-chart4-up-title'>Monthly sales</p>
                        <p className='admin-content-chart4-up-title-sub'>January 23 - February 23</p>
                        <p className='admin-content-chart4-up-money'>2743.5$</p>
                        <img src={ChartContent4} className='admin-content-chart4-up-chart' />
                    </div>
                    <div className='admin-content-chart4-down'>
                        <p className='admin-content-chart4-down-title'>68</p>
                        <p className='admin-content-chart4-down-title-sub'>Transactions</p>
                        <p className='admin-content-chart4-down-money'>+5%</p>
                        <img src={ChartContent4Down} className='admin-content-chart4-down-chart' />
                    </div>
                </div>
            </div>

            <div className='admin-main3'>
                <div className='admin-main3-header'>
                    <p className='admin-main3-title'>Add origamis</p>
                </div>
                <div className='admin-main3-content'>
                    <div className='admin-main3-content-header'>
                        <input type='text' id='title' className='admin-input-title admin-input-area' placeholder='Title'
                            value={title}
                            style={{ border: border1 }}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <input type='text' id='author' className='admin-input-author admin-input-area' placeholder='Author'
                            value={author}
                            style={{ border: border2 }}
                            onChange={e => setAuthor(e.target.value)}
                        />
                    </div>
                    <div className='admin-main3-content-content'>
                        <textarea id='content' className='admin-input-content admin-input-area' rows="17" cols="140" placeholder='Content'
                            value={content}
                            style={{ border: border3 }}
                            onChange={e => setContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div className='admin-input-img admin-input-area'>
                        <div className='admin-input-img-img'>Photos</div>
                        <div className='admin-input-img-video'>Videos</div>
                        <div className='admin-input-img-icon'>Category</div>
                    </div>

                    <div className='admin-main3-content-footer'>
                        <textarea id='note' className='admin-input-note admin-input-area' rows="17" cols="140" placeholder='Note'
                            value={note}
                            style={{ border: border4 }}
                            onChange={e => setNote(e.target.value)}
                        ></textarea>
                        <div className='admin-input-favicon admin-input-area'>
                            <p className='admin-input-favicon-title'>Avatar</p>
                        </div>
                    </div>
                    <input type='submit' className='admin-input-submit admin-input-area' value='POST'
                        onClick={handleClickCheck}
                    />
                </div>
            </div>

            <div className='admin-footer-main'>
                <div className='admin-footer-right'>
                    <Link className='admin-footer-link' to='/'>
                        <p>Luonvuituoi</p>
                    </Link>
                    <Link className='admin-footer-link' to='/pagenotfound'>
                        <p>Help</p>
                    </Link>
                    <Link className='admin-footer-link' to='/contact'>
                        <p>Contact</p>
                    </Link>
                </div>
                <div className='admin-footer-left'>
                    <Link className='admin-footer-link' to='/aboutus'>
                        <p>Luonvuituoi team</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default AdminContent;