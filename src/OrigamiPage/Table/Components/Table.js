import React from 'react'
import AdminNav from '../../Admin/Components/AdminNav'
import { Link } from 'react-router-dom';
import '../Assets/Css/Table.css'
import { AiFillDelete } from "react-icons/ai";

function Table() {
    return (
        <>
            <div>
                <AdminNav />
            </div>
            <div className='table-header'>
                <div className='table-header-inside'>
                    <div className='table-header-left'>
                        <h2 className='table-header-title'>Database</h2>
                        <h5 className='table-header-title-sub'>Admin Database</h5>
                    </div>
                    <div className='table-header-right'>
                        <button className='table-header-manage-btn'>Manage</button>
                        <button className='table-header-add-btn'>Add data</button>
                    </div>
                </div>
            </div>

            <div className='table-basic'>
                <div className='table-basic-header'>
                    <div className='table-basic-header-title'>
                        <p className='table-basic-title'>Customer data</p>
                        <p className='table-basic-title-sub'>Daily information about statistics in system</p>
                    </div>
                    <div className='table-basic-header-btn'>
                        <p className='table-basic-header-btn-search'>Search</p>
                        <input type='text' className='table-basic-header-btn-search-input' placeholder='Search' />
                    </div>
                </div>
                <div className='table-basic-content'>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Name</div>
                        <div className='table-basic-content-header-email table-content-fff'>Email</div>
                        <div className='table-basic-content-header-age table-content-fff'>Age</div>
                        <div className='table-basic-content-header-address table-content-fff'>Address</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Dao Thanh Nam</div>
                        <div className='table-basic-content-header-email'>nam2003@gmail.com</div>
                        <div className='table-basic-content-header-age'>19</div>
                        <div className='table-basic-content-header-address'>Ha Nam</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Vo Van Viet</div>
                        <div className='table-basic-content-header-email table-content-fff'>viet2003@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>19</div>
                        <div className='table-basic-content-header-address table-content-fff'>Thanh Tri</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Tran Minh Duc</div>
                        <div className='table-basic-content-header-email'>Duc1234@gmail.com</div>
                        <div className='table-basic-content-header-age'>19</div>
                        <div className='table-basic-content-header-address'>Phu Tho</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Ta Quang Minh</div>
                        <div className='table-basic-content-header-email table-content-fff'>minh1234@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>19</div>
                        <div className='table-basic-content-header-address table-content-fff'>Ha Noi</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Tran Dang Khoi</div>
                        <div className='table-basic-content-header-email'>khoi1234@gmail.com</div>
                        <div className='table-basic-content-header-age'>19</div>
                        <div className='table-basic-content-header-address'>Ha Noi</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Le Thu Thao</div>
                        <div className='table-basic-content-header-email table-content-fff'>Thaodz1234@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>25</div>
                        <div className='table-basic-content-header-address table-content-fff'>Dak lak</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Quynh Nhu</div>
                        <div className='table-basic-content-header-email'>Nhuxinh22@gmail.com</div>
                        <div className='table-basic-content-header-age'>14</div>
                        <div className='table-basic-content-header-address'>Sai Gon</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Hai Tu</div>
                        <div className='table-basic-content-header-email table-content-fff'>HiTu@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>22</div>
                        <div className='table-basic-content-header-address table-content-fff'>Ha Noi</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Son Tung</div>
                        <div className='table-basic-content-header-email'>tung22@gmail.com</div>
                        <div className='table-basic-content-header-age'>25</div>
                        <div className='table-basic-content-header-address'>Thai Binh</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Toc Tien</div>
                        <div className='table-basic-content-header-email table-content-fff'>tien32@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>34</div>
                        <div className='table-basic-content-header-address table-content-fff'>Sai Gon</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Vu Khac Thien</div>
                        <div className='table-basic-content-header-email'>thiententiep@gmail.com</div>
                        <div className='table-basic-content-header-age'>46</div>
                        <div className='table-basic-content-header-address'>Sai Gon</div>
                    </div>

                </div>

            </div>

            <div className='table-basic table-basic-origami'>
                <div className='table-basic-header'>
                    <div className='table-basic-header-title'>
                        <p className='table-basic-title'>Origamis data</p>
                        <p className='table-basic-title-sub'>Daily information about statistics in system</p>
                    </div>
                    <div className='table-basic-header-btn'>
                        <p className='table-basic-header-btn-search'>Search</p>
                        <input type='text' className='table-basic-header-btn-search-input' placeholder='Search' />
                    </div>
                </div>
                <div className='table-basic-content'>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Name</div>
                        <div className='table-basic-content-header-email table-content-fff'>Category</div>
                        <div className='table-basic-content-header-age table-content-fff'>Delete</div>
                        <div className='table-basic-content-header-address table-content-fff'>Adder</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Fox</div>
                        <div className='table-basic-content-header-email'>Animal</div>
                        <div className='table-basic-content-header-age'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address'>Nam</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Boar</div>
                        <div className='table-basic-content-header-email table-content-fff'>Animal</div>
                        <div className='table-basic-content-header-age table-content-fff'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address table-content-fff'>Viet</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Butterfly</div>
                        <div className='table-basic-content-header-email'>Animal</div>
                        <div className='table-basic-content-header-age'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address'>Viet Anh</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Crab</div>
                        <div className='table-basic-content-header-email table-content-fff'>Animal</div>
                        <div className='table-basic-content-header-age table-content-fff'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address table-content-fff'>Minh</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Parrot</div>
                        <div className='table-basic-content-header-email'>Animal</div>
                        <div className='table-basic-content-header-age'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address'>Duc</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Lotus</div>
                        <div className='table-basic-content-header-email table-content-fff'>Plant</div>
                        <div className='table-basic-content-header-age table-content-fff'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address table-content-fff'>Minh</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Frame</div>
                        <div className='table-basic-content-header-email'>Item</div>
                        <div className='table-basic-content-header-age'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address'>Nam</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>FLag</div>
                        <div className='table-basic-content-header-email table-content-fff'>Flag</div>
                        <div className='table-basic-content-header-age table-content-fff'><AiFillDelete id="table-delete" /></div>
                        <div className='table-basic-content-header-address table-content-fff'>Viet</div>
                    </div>
                </div>

            </div>



            <div id='table-basic-admin' className='table-basic table-basic-origami'>
                <div className='table-basic-header'>
                    <div className='table-basic-header-title'>
                        <p className='table-basic-title'>Admin member</p>
                        <p className='table-basic-title-sub'>Daily information about statistics in system</p>
                    </div>
                    <div className='table-basic-header-btn'>
                        <p className='table-basic-header-btn-search'>Search</p>
                        <input type='text' className='table-basic-header-btn-search-input' placeholder='Search' />
                    </div>
                </div>
                <div id='table-basic-content-admin' className='table-basic-content'>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Name</div>
                        <div className='table-basic-content-header-email table-content-fff'>Email</div>
                        <div className='table-basic-content-header-age table-content-fff'>Age</div>
                        <div className='table-basic-content-header-address table-content-fff'>Salary</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Vo Van Viet</div>
                        <div className='table-basic-content-header-email'>viet1234@gmail.com</div>
                        <div className='table-basic-content-header-age'>18</div>
                        <div className='table-basic-content-header-address'>2000$</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Dao Thanh Nam</div>
                        <div className='table-basic-content-header-email table-content-fff'>Nam1234@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>19</div>
                        <div className='table-basic-content-header-address table-content-fff'>1950$</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Le Nhu Viet Anh</div>
                        <div className='table-basic-content-header-email'>Vanh1234@gmail.com</div>
                        <div className='table-basic-content-header-age'>19</div>
                        <div className='table-basic-content-header-address'>1500$</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name table-content-fff'>Tran Minh Duc</div>
                        <div className='table-basic-content-header-email table-content-fff'>Duc1234@gmail.com</div>
                        <div className='table-basic-content-header-age table-content-fff'>19</div>
                        <div className='table-basic-content-header-address table-content-fff'>2000$</div>
                    </div>

                    <div className='table-basic-content-header'>
                        <div className='table-basic-content-header-name'>Ta Quang Minh</div>
                        <div className='table-basic-content-header-email'>Minh1234@gmail.com</div>
                        <div className='table-basic-content-header-age'>19</div>
                        <div className='table-basic-content-header-address'>1800$</div>
                    </div>
                </div>

            </div>

            <div className='admin-footer-main admin-table-footer'>
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
    );
}

export default Table