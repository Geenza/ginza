import React from "react";
import './style.css'
import logo from './icons8-bash-480.svg'
import img from './img/book.png'
import wall from './img/wall.jpg'


function Homepage() {
  return (
    <div>
        <div className="Nav">
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <h1>Ginza</h1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><a className={'active'} href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a className={'login_button'} href="#">Login</a></li>
                        <li><a className={'login_button'} href="#">Register</a></li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="main">
    <div className="main-content">
        <div className={'main-cointainer'}>
            <img className={'main-img'} src={wall} alt=""/>
        </div>
    </div>
</div>
        <div className="subscriber">
            <div className="subscriber-content">
                <div className={'subs-text'}>
                    <div className={'sub'}>
                        <h2 className={'subs-text-h2'}>Endi masofa muhim emas!</h2>
                    </div>

                    <div className={'sub'}>
                        <h1>500+</h1>
                        <p>Jami tahsil olayotgan o’quvchilarimiz</p>
                    </div>
                </div>
                <div className={'subs-text-half'}>

                    <div className={'sub'}>
                        <h1>100+</h1>
                        <p>Platformamizda mavjud kurslar soni</p>
                    </div>
                    <div className={'sub'}>
                        <h1>20+</h1>
                        <p>Uzoq yillik tajribaga ega ustozlarimiz</p>
                    </div>
                </div>


            </div>
        </div>
        <div className="courses">
            <div className="courses-content">
                <div className={'cards'}>
                    <div className={'card'}>
                        <h2>Tezkor kurslar</h2>
                    </div>
                    <div className={'card'}>
                        <h2>Praktikum kurslar</h2>
                    </div>
                    <div className={'card'}>
                        <h2>Chuqurlashtirilgan kurslar</h2>
                    </div>
                    <div className={'card'}>
                        <h2>Maxsus praktikum kurslar</h2>
                    </div>
                </div>
            </div>
        </div>



    </div>
  );
}
export default Homepage;




