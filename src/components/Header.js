import { Autocomplete, TextField } from '@mui/material'
import React from 'react'
import '../assets/css/header.css'
import NavigationBar from './NavigationBar'

const Header = ({ cases }) => {


  const dateBuilder = (d) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "February", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"]

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`

  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <header>
      <div className='container'>
        <NavigationBar />
        {/* head-section pc */}
        <div className='head-section mt-5'>
          <div className='head-section1'>
            <span className='title'>Dapatkan Vaksinasi Sekarang</span>
            <h1 className='mt-3'>Lindungi Keluarga, Selamatkan Dunia</h1>
            <p className='mt-3'>
              Tubuh seseorang yang telah disuntikkan vaksin, akan merangsang antibodi untuk belajar dan mengenali virus yang telah dilemahkan tersebut. Dengan demikian, tubuh akan mengenai virus dan mengurang risiko terpapar.
            </p>
            <a href="https://covid19.go.id/p/panduan/pendaftaran-vaksinasi-covid19" target="_blank" className='btn mt-3'>Panduan Pendaftaran Vaksinasi Pedulilindungi</a>
          </div>
          <div className='head-section2'>
            <img src="images/family.png" />
          </div>
        </div>
        {/* head-section mobile */}
        <div className='head-section-mobile mt-5'>
          <div className='head-section1'>
            <div className='head-open'>
              <span className='title'>Dapatkan Vaksinasi Sekarang</span>
              <h1 className='mt-3'>Lindungi Keluarga, Selamatkan Dunia</h1>
            </div>
            <div className='head-img'>
              <img src="images/family.png" />
            </div>
          </div>
          <div className='head-section2'>
            <p className='mt-3'>
              Tubuh seseorang yang telah disuntikkan vaksin, akan merangsang antibodi untuk belajar dan mengenali virus yang telah dilemahkan tersebut. Dengan demikian, tubuh akan mengenai virus dan mengurang risiko terpapar.
            </p>
            <a href="https://covid19.go.id/p/panduan/pendaftaran-vaksinasi-covid19" target="_blank" className='btn mt-3'>Daftar Vaksinasi Pedulilindungi</a>
          </div>
        </div>




        <div className='cases-container mb-5'>
          <div className='date-mobile mb-3'>
            <h4>Kasus COVID-19 Indonesia,</h4>
            <h4>{dateBuilder(new Date())}</h4>
          </div>
          <div className='cases-information row'>
            <div className='col-md-3 cases'>
              <h3>{numberWithCommas(cases === undefined ? "" : cases.cases.new)}</h3>
              <span>Kasus Baru</span>
            </div>
            <div className='col-md-3 cases'>
              <h3>{numberWithCommas(cases === undefined ? "" : cases.cases.total)}</h3>
              <span>Total Konfirmasi</span>
            </div>
            <div className='col-md-3 cases'>
              <h3>{numberWithCommas(cases === undefined ? "" : cases.cases.recovered)}</h3>
              <span>Total sembuh</span>
            </div>
            <div className='col-md-3 cases'>
              <h3>{numberWithCommas(cases === undefined ? "" : cases.deaths.total)}</h3>
              <span>Total Meninggal</span>
            </div>
          </div>
          <div className='date mt-5'>
            <span>Kasus COVID-19 Indonesia, {dateBuilder(new Date())}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header