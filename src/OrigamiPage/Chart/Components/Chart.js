import React from 'react'
import AdminNav from '../../Admin/Components/AdminNav'
import '../Assets/Css/chart.css'
import Line_chart from '../Assets/Img/line_chart.png'
import Bar_chart from '../Assets/Img/bar_chart.png'
import Pie_chart from '../Assets/Img/pie_chart.png'
import Doughnut_chart from '../Assets/Img/Doyghnut_Chart.png'
import Radar_chart from '../Assets/Img/Radar_chart.png'
import Bubble_chart from '../Assets/Img/bubble_chart.png'
import Mutiple_line from '../Assets/Img/Mutiple_line.png'
import Mutiple_bar from '../Assets/Img/mutiple_bar.png'
import Chart_html from '../Assets/Img/chart_with_html.png'

function Chart() {
  return (
    <React.Fragment>
    <div>
        <AdminNav />
    </div>
<div className='main_content'>
    <div class="header">
    <p>Chart.js</p>
    <span>Simple yet flexible JavaScript charting for designers developers. Please checkout their full
        <b>documentation.</b></span>
    </div>

    <section className='char-box'>
        <div class="char_left-1">
            <p className='char_text'>Line Chart</p>
            <img src={Line_chart} alt="img" />
        </div>
        <div class="char_right-1">
            <p className='char_text'>Bar chart</p>
            <img src={Bar_chart} alt="img" />
        </div>
    </section>

    <section className='char-box'>
        <div class="char_left-2">
            <p className='char_text'>Pie Chart</p>
            <img src={Pie_chart} alt="img" />
        </div>
        <div class="char_right-2">
            <p className='char_text'>Doughnut chart</p>
            <img src={Doughnut_chart} alt="img"/>
        </div>
    </section>

    <section className='char-box'>
        <div class="char_left-3">
            <p className='char_text'>Radar Chart</p>
            <img src={Radar_chart} alt="img" />
        </div>
        <div class="char_right-3">
            <p className='char_text'>Bubble Chart</p>
            <img src={Bubble_chart} alt="img" />
        </div>
    </section>

    <section className='char-box'>
        <div class="char_left-4">
            <p className='char_text'>Multiple Line Chart</p>
            <img src={Mutiple_line} alt="img" />
        </div>
        <div class="char_right-4">
            <p className='char_text'>Multiple Bar Chart</p>
            <img src={Mutiple_bar} alt="img" />
        </div>
    </section>
    
    <div class="footer">
        <p>Chart with HTML Legends</p>
        <span>Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend.Charts provide a generateLegend  method on their prototype that returns<br /> an HTML string for the legend.</span>
        
    </div>
    <div class="footer_img">
        <img src={Chart_html} alt="img" />
    </div>
</div>
</React.Fragment>
  )
    return (
        <>
            <div>
                <AdminNav />
            </div>
            <div className="header">
                <p>Chart.js</p>
                <span>Simple yet flexible JavaScript charting for designers & developers. Please checkout their full
                    <b>documentation.</b></span>
                <div className="char_left-1">
                    <p>Line Chart</p>
                    <img src= {Line_chart} alt="img" />
                </div>
                <div className="char_left-2">
                    <p>Pie Chart</p>
                    <img src= {Pie_chart } alt="img" />
                </div>
                <div className="char_right-1">
                    <p>Bar chart</p>
                    <img src= {Bar_chart} alt="img" />
                </div>
                <div className="char_right-2">
                    <p>Doughnut chart</p>
                    <img src= {Doughnut_chart} alt="img" />
                </div>
                <div className="char_left-3">
                    <p>Radar Chart</p>
                    <img src= {Radar_chart} alt="img" />
                </div>
                <div className="char_right-3">
                    <p>Bubble Chart</p>
                    <img src= {Bubble_chart} alt="img" />
                </div>
                <div className="char_left-4">
                    <p>Multiple Line Chart</p>
                    <img src= {Mutiple_line} alt="img" />
                </div>
                <div className="char_right-4">
                    <p>Multiple Bar Chart</p>
                    <img src= {Mutiple_bar} alt="img" />
                </div>
                <div className="footer">
                    <p>Chart with HTML Legends</p>
                    <span>Sometimes you need a very complex legend. In these cases, it makes sense to generate an HTML legend.Charts provide a generateLegend  method on their prototype that returns <br/> an HTML string for the legend.</span>

                </div>
                <div className="footer_img">
                    <img src= {Chart_html} alt="img" />
                </div>
            </div>
        </>
    )

}

export default Chart