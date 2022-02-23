import React from 'react'
import AdminNav from '../../Admin/Components/AdminNav'
import '../Assets/Css/Table.css'

function Table() {

    return (
        <>
            <div>

                <AdminNav />

                                            <div className='table-responsive'>

                                                <div id='basic-datatables-wrapper' className='datatables-length-wrapper'>

                                                    <div className='row_2'>

                                                        <div className='table_2'>

                                                            <div className='datatables-length' id='basic-datatables-length'>

                                                                <label>

                                                                    show

                                                                    <select name='basic-datatables-length' aria-controls='basic-datatables' className='form-controls'>
                                                                        <option value='1'></option>
                                                                    </select>

                                                                    entries

                                                                </label>

                                                            </div>

                                                            <div className='datatables-fliter'>

                                                                <label>
                                                                    Search:
                                                                    <input type='Search' className='form-control' placeholder aria-controls='basic-datatables'></input>
                                                                </label>

                                                            </div>

                                                            <div className='datatables-col'>

                                                                <table id='basic-datatables-btc' className='display table' role='grid' aria-describedby='basic-datatables-info'>

                                                                    <thead>
        
                                                                        <tr role='row-3'>
                                                                            <th className='vtn' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Name</th>
                                                                            <th className='btc' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Position</th>
                                                                            <th className='vnv' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Office</th>
                                                                            <th className='unt' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Age</th>
                                                                            <th className='vtn' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Start date</th>
                                                                            <th className='add' tabIndex='0' aria-controls='basic-datatables' rowSpan='1' colSpan='1' >Salary</th>
                                                                        </tr>
        
                                                                    </thead>


                                                                    <tbody>

                                                                        <tr role='row-4' className='TQM'>
                                                                            <td className='phk'>Tạ Quang Minh</td>
                                                                            <td>chief Executive Officer</td>
                                                                            <td>Vietnam</td>
                                                                            <td>19</td>
                                                                            <td>???</td>
                                                                            <td>1.000.000$</td>
                                                                        </tr>

                                                                        <tr role='row-5' classname='DTM'>
                                                                            <td className='sor'>Đào Thành Nam</td>
                                                                            <td>Software Engineer</td>
                                                                            <td>Vietnam</td>
                                                                            <td>18</td>
                                                                            <td>???</td>
                                                                            <td>1.000.000$</td>
                                                                        </tr>

                                                                        <tr role='row-6' className='VVV'>
                                                                            <td className='ory'>Võ Văn Việt</td>
                                                                            <td>Software Engineer</td>
                                                                            <td>Vietnam</td>
                                                                            <td>18</td>
                                                                            <td>???</td>
                                                                            <td>1.000.000$</td>
                                                                        </tr>

                                                                        <tr role='row-7' className='TMD'>
                                                                            <td className='lkn'>Trần Minh Đức</td>
                                                                            <td>Software Engineer</td>
                                                                            <td>Vietnam</td>
                                                                            <td>18</td>
                                                                            <td>???</td>
                                                                            <td>1.000.000$</td>
                                                                        </tr>

                                                                        <tr role='row-8' className='LNVA'>
                                                                            <td className='don'>Lê Như Việt Anh</td>
                                                                            <td>Software Engineer</td>
                                                                            <td>Vietnam</td>
                                                                            <td>18</td>
                                                                            <td>???</td>
                                                                            <td>1.000.000$</td>
                                                                        </tr>
                                                                    </tbody>

                                                                </table>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

        </>
    );
}

export default Table