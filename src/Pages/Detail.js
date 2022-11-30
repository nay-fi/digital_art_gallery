import React  from "react";
import '../Component/Detail.css';
import { Link } from "react-router-dom";

export default function Detail(){
  
    return (
      <>
      <div className="container-detail">
        <h2>DIGITAL GALLERY ART</h2>
        <br />
        <h3>
          Digital Gallery Art merupakan pameran Art secara digital, disini pengguna dapat melihat gambar dengan berbagai macam serta dapat mengetahui informasi yang ada pada gambar. Ide ini muncul dari website yang sering dikunjungi oleh Pengembang yaitu Pixabay yang mana menyediakan banyak pilihan gambar menarik dan inovatif. Karena pengembang ingin sebuah karya dipublikasikan, dan pada umumnya publikasi karya hanya berlangsung secara tatap muka saja, maka dari itu munculah website ini untuk memudahkan pengguna melihat hasil karya orang lain di berbagai dunia. Anda bisa menikmatinya pada menu <b>Home</b>, Selain itu terdapat menu Category yang dapat anda kunjungi melalui button di bawah ini. <b>Silahkan Klik Button Dibawah ini</b>
          </h3>
        <br />
        <br />
        <Link to = {'/category'}>
        <div className="button-Go">
          <u><b>Let's Start</b></u></div>
        </Link>
        <br />
        <br />
      </div>
      </>
    );
}