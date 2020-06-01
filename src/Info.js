import React,{useState,useEffect} from 'react';

const Info=()=>{
    const [name,setName]=useState('');
    const [nickname,setNickname]=useState('');

    useEffect(()=>{
        console.log("렌더링되었습니다");
        console.log(name,nickname);
    });

    //키보드로 입력한값을 name에 넣어준다
    const onChangeName=e=>{
        setName(e.target.value);
    }

    //키보드로 입력한값을 nickname에 넣어준다
    const onChangeNickname=e=>{
        setNickname(e.target.value);
    }
    return(
        <div>
            <h4>이름을 입력해주세요</h4>
            <input type="text" value={name} onChange={onChangeName}/>
            <h4>닉네임을 입력해주세요</h4>
            <input type="text" value={nickname} onChange={onChangeNickname}/>
            <h2>입력한 이름과 닉네임 출력</h2>
            <b>이름 : {name}</b><br/>
            <b>닉네임 : {nickname}</b>
        </div>
    )
}
export default Info;