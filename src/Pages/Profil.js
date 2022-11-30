import React, {useState, useEffect} from "react";
import '../Component/Profil.css';
import axios from "axios";

const myself = ['nay-fi']

export default function About(){
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        await axios
          .get(`https://api.github.com/users/${myself[count]}`)
          .then((res) => setData(res.data))
          .catch((error) => alert('Anda Harus Online! Nyalakan Jaringan!', error));
      };
      fetchData();
    }, [count]);
  
    return (
      <div className="container-pro">
        <h2>Hello There</h2><br />
        <div className="name-person">{data.name}</div><br />
        <div className="img">
          <img src={data.avatar_url} alt={data.login} />
        </div>
        <div className="repo">{data.public_repos} Repository</div>
        <div className="username">{data.login}</div>
        <div className="keterangan">
          <div className="followers">{data.followers} pengikut</div>
          <div className="following">{data.following} mengikuti</div>
        </div>
      </div>
    );
}
