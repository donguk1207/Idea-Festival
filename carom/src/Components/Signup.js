import React, { useState } from "react";
import './Signup.scss';


function Signup() {
    const [a, setA] = useState(-1);
    const [b, setB] = useState(-1);
    const [c, setC] = useState(-1);

    return <div className="sign-up">
        <div className="sign-box">
            <div className="signup-title">
                <p>Carom</p>
            </div>

            <div className="email">
                <p>이메일</p>
                <div className="eamil-input">
                    <input />
                </div>
            </div>

            <div className="name">
                <p>이름</p>
                <div className="name-input">
                    <input />
                </div>
            </div>

            <div className="scritnum">
                <p>비밀번호</p>
                <div className="secrit-input">
                    <input />
                </div>
            </div>

            <div className="classnum">
                <p>학번</p>
                <div className="class-input">
                    <select id="class1" className="input" onChange={(e) => setA(e.target.value)}>
                        <option value={-1}>학년</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>

                    <select id="class2" className="input" onChange={(e) => setB(e.target.value)}>
                        <option value={-1}>반</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={3}>4</option>
                    </select>

                    <select id="class3" className="input" onChange={(e) => setC(e.target.value)}>
                        <option value={-1}>번호</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>

                    </select>
                </div>

                <div className="sign-btn">
                    <button onClick={() => alert(a + '-' + b + '-' + c)}>회원가입</button>
                </div>

                <div className="name">
                    <p>이름</p>
                    <div className="name-input">
                        <input />
                    </div>
                </div>

                <div className="scritnum">
                    <p>비밀번호</p>
                    <div className="secrit-input">
                        <input />
                    </div>
                </div>

                <div className="classnum">
                    <p>학번</p>
                    <div className="class-input">
                        <select id="class1" className="input" onChange={(e) => setA(e.target.value)}>
                            <option value={'-1'}>학년</option>
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                        </select>

                        <select id="class2" className="input" onChange={(e) => setB(e.target.value)}>
                            <option value={-1}>반</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>

                        <select id="class3" className="input" onChange={(e) => setC(e.target.value)}>
                            <option value={-1}>번호</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>

                        </select>
                    </div>
                </div>


                <div className="sign-btn">
                    <button onClick={() => alert(a + '-' + b + '-' + c)}>회원가입</button>
                </div>
            </div >

        </div >

    </div >
}

export default Signup;