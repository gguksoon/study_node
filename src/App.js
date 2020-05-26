import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나동빈',
  'birthday': '960508',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '961127',
  'gender': '남자',
  'job': '디자이너'
  }
]
  
class App extends Component {
  render() {
    return ( // jsx를 이용해 데이터 여러개를 출력하는데, 반드시 <div> 등으로 감싸줘야 에러가 나지 않는다.
      <div> 
        {customers.map(c => { // 반복문
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        })}
      </div>
    );
  }
}

export default App;