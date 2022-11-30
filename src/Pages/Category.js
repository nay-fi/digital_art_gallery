import React from "react";
import '../Component/Category.css';
import { Link } from "react-router-dom";

export default function Category(){

    return(
    <>
      <div className="container-cat">
        <br />
        <h2>Pilih Kategori</h2>
        <br />
        <Link to = {'/photos/animals'}>
        <div className="button-Go">hewan</div>
        </Link>
        <Link to = {'/photos/plants'}>
        <div className="button-Go">Plants</div>
        </Link>
        <Link to = {'/photos/natures'}>
        <div className="button-Go">Nature</div>
        </Link>
      </div>
      </>
 )
}