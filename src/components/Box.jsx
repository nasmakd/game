import React from "react";

const Box = (props) => {

  let rrr;
  if (props.title === 'Computer' && props.result !== 'Draw' && props.result !== '') {
    // 컴퓨터 쪽, 비기지 않고 결과값이 비어있지 않을때
    rrr = props.result === 'Win' ? 'Lose' : 'Win';
    // 내 승패 여부가 이겼을때는 진걸로 바뀌고, 승리가 아니었을 때는 이기는 걸로 바뀜
  } else {  //위 경우가 아니면 props로 전달된 값을 그대로
    rrr = props.result;
  }
  return (
    <div className={`box ${rrr}`}>
      <h1>{props.title}</h1>
      <img src={props.item && props.item.img} alt='이미지' />
      <h2>{rrr}</h2>
    </div>
  )
}

export default Box;