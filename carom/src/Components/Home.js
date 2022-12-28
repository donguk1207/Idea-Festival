import React, { useState, useEffect } from "react";
import "./Home.scss";
import moment from 'moment';
import 'moment/locale/ko';
import { Link } from "react-router-dom";

function Home() {
  const [clock, setClock] = useState();
  const [sub1, setSub1] = useState(false);
  const [can1, setCan1] = useState(false);
  const [sub2, setSub2] = useState(false);
  const [can2, setCan2] = useState(false);
  const [regiA, setRegiA] = useState(0);
  const [regiB, setRegiB] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setClock(moment().format('hh:mm:ss'));
    }, 1);
    return (() => clearInterval(id));
  }, []);
  useEffect(() => {//유저 정보 가지고 올거임.
    if (localStorage.length > 1) {
      setRegiA(localStorage.getItem('regiA'));
      setRegiB(localStorage.getItem('regiB'));
      setSub1(localStorage.getItem('regiA') > 0 ? true : false);
      setSub2(localStorage.getItem('regiB') > 0 ? true : false);
    }
  }, []);
  return <div className="Home">
    <div className="main">
      <div className="clockbox">
        <div className="clock">
          {clock}
        </div>
      </div>
      <div className="alert">
        <h2>공지사항</h2>
        <div className="alertbox">
          테스트 기간입니다. <br></br>
          잘 만들어 봅시다.
        </div>
      </div>

      <div className="apply">
        <Link to={'/userlist'}>
          <h2>당구신청</h2>
        </Link>
        <div className="applybox1">
          <p>1팀</p>
          <h2>{regiA}/4</h2>
          {!can1 && !sub2 ? (!sub1 ? <button onClick={() => { setSub1(true); localStorage.setItem('regiA', 1); setRegiA(1); alert('신청됨') }}>신청하기</button>
            : <button onClick={() => { setCan1(true); localStorage.setItem('regiA', 0); setRegiA(0); setSub1(false); alert('신청취소됨') }}>신청취소</button>)
            : <button>신청 불가</button>}
        </div>
        <div className="applybox2">
          <p>2팀</p>
          <h2>{regiB}/4</h2>
          {!can2 && !sub1 ? (!sub2 ? <button onClick={() => { setSub2(true); localStorage.setItem('regiB', 1); setRegiB(1); alert('신청됨') }}>신청하기</button>
            : <button onClick={() => { setCan2(true); localStorage.setItem('regiB', 0); setRegiB(0); setSub2(false); alert('신청취소됨') }}>신청취소</button>)
            : <button>신청 불가</button>}
        </div>
      </div>
      <div className="rulebox">
        <h2>이용규정</h2>
        <div className="rulebox2">
          알잘딱깔센
        </div>
      </div>
    </div>
  </div>;
}



export default Home;