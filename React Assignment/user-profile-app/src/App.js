import logo from './logo.svg';
import './App.css';
import UserCard from './component/UserCard';

function App() {
  //making user object
  const user={
    name:'Radhika Sharma',
    email:'radhika@gmail.com',
    age:23,
    address:'Saket Nagar, Indore',
    mobileNo:'648463829'
  };

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <h2>Nested Functional Components with Props</h2>
       <div>
        <h2>User Profile</h2>
        <UserCard user={user} />
       </div>
    </div>
  );
}

export default App;
