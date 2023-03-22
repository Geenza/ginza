import React from "react";
import './style.css'
import logo from './icons8-bash-480.svg'
import img from './img/eve.jpg'
import wall from './img/wall.jpg'
import robot from './img/eve wall.jpg'



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
                        <h2 className={'btn-4'}>Maxsus praktikum kurslar</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="about-content">
                <div className={'about-text'}>
                    <p>Ginza jamoasi </p>
                    <h2>Nima uchun Ginza da o'qish kerak? </h2>
                    <button>Videoni ko'rish</button>
                    <div/>
                </div>
                <div className={'about-video'}>
                    <iframe/>
                </div>

            </div>
        </div>
        <div className={'jobs'}>
            <div className={'jobs-content'}>
                <div className={'jobs-text'}>
                    <h1>Kasblar</h1>
                    <p>Kasbga yo'nalitirilgan praktikumlar yordamida eng tez va samarali yo'llar bilan mutaxassislar qatoriga qo'shiling. Har bir praktikum soha mutaxassislari tomonidan eng zamoaviy o'quv reja asosida tayyorlangan.</p>

                </div>
                <div className={'jobs-type'}>
                    <button>Frontend</button>
                    <button>Backend</button>
                    <button>Fullstack</button>
                    <button>Mobile</button>
                    <button>UI/UX</button>
                    <button>Game</button>
                    <button>DevOps</button>
                    <button>QA</button>
                    <button>Project</button>
                    <button>Marketing</button>
                    <button>Business</button>
                    <button>Other</button>
                </div>
                <div className={'jobs-cards'}>
                    <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                 <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                 <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                 <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                 <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                  <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                  <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                  <div className={'job-card'}>
                        <h2>Front end</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className={'kurslar'}>
            <h1>Kurslar</h1>
            <div className={'kurslar-type'}>
                <button>Bepul kurslar</button>
                <button>Backend</button>
                <button>Frontend</button>
                <button>Fullstack</button>
                <button>Mobile</button>

            </div>
            <div className={'kurslar-cards'}>
                <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
                <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
            <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
            <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
            <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
                <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
                <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
                <div className={'kurslar-card'}>
                    <img src={robot} alt=""/>
                    <p1>Muhiddinov Sherzamon</p1>
                    <p2>300 o'quvchi</p2>
                    <h2>Django 3 -pythonda Full stack Web dasturlasjh</h2>
                    <p3>Describe course, Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p3>
                    <p4>250 000 so'm</p4>

                    <button>Kirish</button>

                </div>
            </div>



        </div>
        <div className={'contact-forms img-background'}>
            <div className={'contact-form'}>
                <div className={'contact-form-text'}>
                    <div>                    <h1 className={'contact-form-text-h1'}>Kasb tanlashdagi birinchi yordamni beramiz!</h1>
                        <p className={'contact-form-text-p'}>Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz</p></div>


                </div>

                <div className={'contact-form-input'}>
                    <input type="text" placeholder={'Ismingiz'}/>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder={'Telefon raqamingiz'}/>

                    <button>Jo'natish</button>
                    <p>Tugmani bosib, maxfiylik siyosati va foydalanuvchi shartnomasining shartlarini qabul qilgan bo'lasiz</p>
                </div>
            </div>
        </div>

        <div className={'footer'}>
            <div className={'footer-section'}>
                <div className={'logo'}>
                    <img src={logo} alt="logo" />
                    <h1>Ginza</h1>
                </div>
                <div className={'number title log'}>+998900046465</div>
                <div className={'location title log'}>TATU </div>
                <div className={'icon title log'}>sherzamon</div>
            </div>
            <div className={'footer-section'}>
                <p className={'title'}>Platforma</p>
                <p className={'text-title'}>Kasblar</p>
                <p className={'text-title'}>Kurslar</p>

            </div>
            <div className={'footer-section'}>
                <p className={'title'}>Kompaniya</p>
                <p className={'text-title'}>Biz haqimizda</p>
                <p className={'text-title'}>Blog</p>
                <p className={'text-title'}>Ommaviy oferta</p>
                <p className={'text-title'}>Maxfiylik siyosati</p>


            </div>
            <div className={'footer-section'}>

                <p className={'title'}>Ma’lumot</p>
                <p className={'text-title'}>Bog'lanish</p>
                <p className={'text-title'}>Bo'lib to'lash</p>
                <p className={'text-title'}>Qanday xarid qilinadi?</p>
                <p className={'text-title'}>Voucher qo'llanma</p>
                <p className={'text-title'}>Chegirmalar</p>
            </div>




        </div>






    </div>
  );
}
export default Homepage;




