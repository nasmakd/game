import React, { useState } from "react"; //상태를 관리할때 쓰는 중 하나
import './App.css'
import Box from  './components/Box'

export default function App() {
  const [userSelect, setUserSelect] = useState();
  const [computerSelect, setComputerSelect] = useState();
  const [result, setResult] = useState('');  //승패를 보여주는 state, 비어있는 string type
  const choice = {
    scissors: {name:'Scissors', img: 'scissors.png'},
    rock: {name:'Rock', img: 'rock.png'},
    paper: {name:'Paper', img: 'paper.png'},
  }
  const play = (userChoice)=>{
    // console.log('click', userChoice);
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    
    setResult(judgement(choice[userChoice], computerChoice));
    //유저가 선택한 값, 컴퓨터가 선택한 값을 함수 judgement에 전달.
  }
  const judgement = (uc, cc)=>{
    console.log('user - ',uc, 'computer - ',cc);
    /*
      유저 == 컴퓨터 --> tie 비김
      유저 == rock, 컴퓨터 == scissors --> 유저 Win
      유저 == rock, 컴퓨터 == paper --> 유저 Lose
      유저 == scissors, 컴퓨터 == paper --> 유저 Win
      유저 == scissors, 컴퓨터 == rock --> 유저 Lose
      유저 == paper, 컴퓨터 == rock --> 유저 Win
      유저 == paper, 컴퓨터 == scissors --> 유저 Lose
    */ 
    if(uc.name === cc.name){
      return 'Draw';
    }else if(uc.name === 'Rock'){
      return cc.name === 'Scissors' ? 'Win':'Lose';
    }else if(uc.name === 'Scissors'){
      return cc.name === 'Paper' ? 'Win':'Lose';
    }else if(uc.name === 'Paper'){
      return cc.name === 'Rock' ? 'Win':'Lose';
    }
  }
  const randomChoice = ()=>{
    let itemArray = Object.keys(choice);  //객체 choice으 key값만 뽑아옴
    let randomItem = Math.floor(Math.random() * itemArray.length); //0,1,2 중 랜덤
    let final = itemArray[randomItem]
    // console.log(final);

    return choice[final];
  }
  return (
    <>
      <div className="main">
        <Box title='Mine' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={result} />
      </div>
      <div className="main btn_group">
        <button onClick={() => play('scissors')}>가위</button>
        <button onClick={() => play('rock')}>바위</button>
        <button onClick={() => play('paper')}>보</button>
      </div>
      <p className="main resultP">{result}</p>
  </>
)
}

