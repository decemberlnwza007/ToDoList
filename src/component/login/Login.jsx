import React from 'react';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate แทน window.location

const validCredentials = {
  username: 'admin',
  password: 'admin',
};

function handleLogin(username, password, navigate) {
  if (username === validCredentials.username && password === validCredentials.password) {
    // บันทึกสถานะล็อกอินใน localStorage
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/Home'); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง
  } else {
    alert('Invalid username or password');
  }
}

export default function Login() {
  const navigate = useNavigate(); // ใช้ useNavigate สำหรับการเปลี่ยนเส้นทาง

  const onLoginClick = () => {
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;
    handleLogin(username, password, navigate);
  };

  return (
    <>
      <input
        type="text"
        name="username"
        id="username"
        className="input input-bordered"
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        id="password"
        className="input input-bordered"
        placeholder="password"
      />
      <button
        className="btn btn-success"
        onClick={onLoginClick}
      >
        Login
      </button>
    </>
  );
}
