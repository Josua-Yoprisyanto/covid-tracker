import React from 'react'
import "../assets/css/content.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = () => {
    return (
        <div className='content'>
            <div className='container content-container mb-5' >
                <section className='definition mt-5'>
                    <div className="definition-img">
                        <img src='images/fight.jpg' />
                    </div>
                    <div className="definition-information">
                        <span className='about' id='definition'>Pengertian</span>
                        <h1 className='mt-2'>Apa itu COVID-19?</h1>
                        <div className='definition-text'>
                            <p className='mt-3'>Corona Virus Disease 2019 atau yang biasa disingkat COVID-19 adalah penyakit menular yang disebabkan oleh SARS-CoV-2, salah satu jenis koronavirus. Penderita COVID-19 dapat mengalami demam, batuk kering, dan kesulitan bernafas.</p>
                            <p>Infeksi menyebar dari satu orang ke orang lain melalui percikan (droplet) dari saluran pernapasan yang sering dihasilkan saat batuk atau bersin. Jarak jangkauan droplet biasanya hingga 1 meter. Droplet bisa menempel di benda, namun tidak akan bertahan lama di udara. Waktu dari paparan virus hingga timbulnya gejala klinis antara 1-14 hari dengan rata-rata 5 hari. Maka, orang yang sedang sakit diwajibkan memakai masker guna meminimalisir penyebaran droplet.</p>
                        </div>
                    </div>
                </section>

                {/* symptoms pc */}
                <section className='symptoms-container'>
                    <div className='symptoms-information'>
                        <span className='about' id="symptoms">Gejala</span>
                        <h1 className='mt-2'>Apa saja gejala COVID-19?</h1>
                        <p className='mt-4'>Waktu dari paparan virus hingga timbulnya gejala klinis antara 1-14 hari dengan rata-rata 5 hari. Maka, orang yang sedang sakit diwajibkan memakai masker guna meminimalisir penyebaran droplet.</p>
                        <div className='grid-container'>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Batuk
                            </div>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Pilek
                            </div>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Stres
                            </div>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Sesak Nafas
                            </div>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Sakit Kepala
                            </div>
                            <div className='symptoms'>
                                <FontAwesomeIcon icon={faCheckCircle} /> Demam
                            </div>
                        </div>
                    </div>
                    <div className='symptoms-img'>
                        <img src='images/symptoms.png' />
                    </div>
                </section>


                {/* symptoms mobile */}
                <section className='symptoms-container-mobile'>
                    <span className='about' id='symptoms'>Gejala</span>
                    <h1 className='mt-2'>Apa saja gejala COVID-19?</h1>
                    <div className='symptoms-information-mobile'>
                        <div className='symptoms-description'>
                            <p className='mt-4'>Waktu dari paparan virus hingga timbulnya gejala klinis antara 1-14 hari dengan rata-rata 5 hari. Maka, orang yang sedang sakit diwajibkan memakai masker guna meminimalisir penyebaran droplet.</p>
                        </div>
                        <div className='symptoms-img'>
                            <img src='images/symptoms.png' />
                        </div>
                    </div>
                    <div className='grid-container'>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Batuk
                        </div>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Pilek
                        </div>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Stres
                        </div>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Sesak Nafas
                        </div>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Sakit Kepala
                        </div>
                        <div className='symptoms'>
                            <FontAwesomeIcon icon={faCheckCircle} /> Demam
                        </div>
                    </div>
                </section>



                <div className='content-title' >
                    <span className='about' id='solution'>Solusi</span>
                    <h1 className='mt-2'>Selalu Lindungi Diri Dengan</h1>
                    <div className='arrow'>
                        <FontAwesomeIcon icon={faArrowDown} />
                        <FontAwesomeIcon icon={faArrowDown} />
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>
                </div>
                <section className='prevent-container row'>
                    <div className='prevent-information col'>
                        <div className='prevent'>
                            <img src="images/washHand.png" />
                            <span>Cuci Tangan</span>
                        </div>
                        <div className='prevent'>
                            <img src="images/mask.png" />
                            <span>Pakai Masker</span>
                        </div>
                    </div>
                    <div className='prevent-information col'>
                        <div className='prevent prevent-right'>
                            <img src="images/clean.png" />
                            <span>Disinfektan</span>
                        </div>
                        <div className='prevent prevent-right'>
                            <img src="images/distance.png" />
                            <span>Menjaga Jarak</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Content