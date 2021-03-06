import React from "react";

import axios from "axios";

import config from "../config";

function LoginPage({ setToken }) {
	return (
		<div className="loginbody">
			<style>{styles}</style>
			<div className="container">
				<div className="left">
					<div className="form">
						<div className="signin">Sign In</div>
						<form
							className="input1"
							name="form"
							onSubmit={(e) => {
								e.preventDefault();
								const body = {
									username: e.target.username.value,
									password: e.target.password.value,
								};
								console.log(body);
								axios
									.post(`${config.backend}/auth/login`, body)
									.then((res) => {
										console.log(res.data);
										setToken(res.data.token);
										localStorage.setItem("token", res.data.token);
										window.location = "/dashboard";
									})
									.catch((err) => {
										console.error(err);
										alert("incorrect username or password");
									});
							}}
						>
							<input
								required
								className="tags"
								autoComplete="off"
								type="text"
								placeholder="Name"
								name="username"
							/>
							<div id="error_name">Wrong Name</div>

							<input
								required
								className="tags"
								autoComplete="off"
								type="password"
								placeholder="Password"
								name="password"
							/>
							<div id="error_pass">Wrong Password</div>

							<button type="submit" className="login">
								<a className="href">Login</a>
							</button>
							<br />
							<a href="/register">Don't have an account?</a>
						</form>
					</div>
					<div className="house">
						<img src="/Img/finallogo.png" />
					</div>
				</div>
				<div className="right">
					<img className="loginimg" src="/Img/login.png" />
				</div>
				<div className="quote">
					<img
						className="text"
						src="/Img/“Let us help you to make your day easy”.png"
					/>
				</div>
			</div>
			<script src="JS/validation.js"></script>
		</div>
	);
}

const styles = `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600;700&display=swap');
:root {
    --main-color: #04164e;
    --black: #555;
    --light-color: ;
    --bg: #d9ebf7;
    --border: .1rem solid rgba(0, 0, 0, .1);
    --box-shadow: 0 .5rem 1.5rem rgba(0, 0, 0, .1);
}
/* * {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
} */


html{
  scroll-behavior: smooth;
}
.nav {
  /* border: 2px solid red; */
  height: 90px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
  animation: to-top 1s forwards;
 /* background-color: #00a2ff; */
 
  
}
.navlist{
  /* border: 2px solid red; */
  position: absolute;
  left: 300px;
  top: 17px;
  
}
.navlist ul li {
  list-style: none;
  display: inline-block;
  list-style-type: none ;
  
}
.logo{
  position: absolute;
  left: 100px;
  top: 2px;
  font-size: 30px;
  color: #00D1FF;
}
.logoimg{
  width: 95px;
  height: 85px;
}
.navlist ul li a {
  font: lighter;
  text-decoration: none;
    font-size: 20px;
    /* border-radius: 5px; */
    color:black;
    /* font-family: 'Poppins', sans-serif; */
    
    padding: 10px;
    margin-right: 15px;
    margin-left: 50px;
    margin-top: 10px;
}
.navlist ul li a:hover{
   border-bottom: 3px solid #00D1FF;
   transition: 200ms;
}
.btn{
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 100px;
  height: 35px;
  position : absolute;
  left: 85%;
  top: 30px;
  border-radius: 20px;
  box-shadow: 0px 1px 0px 	#808080;
  border: none;
  


}
.href{
  list-style-type: none;
  list-style: none;
  text-decoration: none;
  color: black;
}
.btn:hover{
  background-color: #00D1FF;
  box-shadow: none;
  /* border-color: 1px solid black; */
  transition: 200ms;
}
.text1{
  position: absolute;
  top: 250px;
  left: 100px;
  animation: to-top 1s forwards;
}
.text2{
  position: absolute;
  top: 300px;
  left: 100px;
  animation: to-top 1s forwards;
}
.btn1{
  
  position: absolute;
  top: 530px;
  left: 100px;
  background-color: #00B3FF;
  border-radius: 10px;
  color: black;
  border: none;
  width: 156px;
  height: 49px;
  font-size: 20px;
  font: bold;
  animation: to-top 1s forwards;
}
.btn1:hover{
  background-color: white;
  border-bottom: 3px solid #00B3FF;
  transition: 300ms;
}
.img1{
  position: absolute;
  left: 50%;
  top: 200px;
  animation: to-top 1s forwards;
}
.container{
  width: 100%;
  height: 100%;
  /* animation: to-top 1s forwards; */
}

.text{
  position: absolute;
  left: 65%;
  top: 40%;
  animation: to-top 1s forwards;
  

}
.form{
  position: absolute;
  top: 35%;
  left: 15%;
  width: 300px;
  height: 350px;
  display: flex ;
  flex-direction: column;
  padding: 10px 20px;
  /* border: 2px solid red; */
  border-radius: 20px;
  box-shadow: 0px 0px 9px -1px
  
}
.signin{
  font-size: 20px;
  padding: 25px 110px;
  font-family: 'Roboto', sans-serif;
  animation: to-top 1s forwards;
}
.input1{
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 50px;
  animation: to-top 1s forwards;
}

.tags{
  margin-top: 20px;
  height: 20px;
  /* color: #00B3FF;  */
  
}

.form label{
  margin-top: -20px;
  /* width: 100%;
  height: 100%; */

  pointer-events: none;
  border-bottom: 1px solid black;
}

.login{
  margin-top: 30px;
  width: 90px;
  margin-left: 59px;
  border-radius: 10px;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  border: none;
  background-color: #00B3FF;
  animation: to-top 1s forwards;

}
.loginimg{
  position: absolute;
  left: 50%;
  width: 50%;
  top: -3%;
  
}
.house{
  position: absolute;
  left: 330px;
  top: 100px;
  animation: to-top 1s forwards;
}
@keyframes to-top {
  0% {
      transform: translateY(100%);
      opacity: 0;
  }
  100% {
      transform: translateY(0);
      opacity: 1;
  }
}
#error_name{
font-size: 10px;
color: red;
display: none;
}
#error_email{
  font-size: 10px;
  color: red;
  display: none;
}
#error_pass{
  font-size: 10px;
  color: red;
  display: none;
}
.AboutusSection{
  position: relative;
  top: 700px;
  left: -65px;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
 
}
.aboutus{
  font-size: 40px;
  position: relative;
  font-weight: bold;
  color: #444;
  left: 650px;
  top: 650px;
  
  display: inline-block;
}
.photo{
  position: relative;
  left: 1300px;
  top: -100px;
}
.header{
  font-weight: 500;
  color: rgb(61, 61, 61);
  font-size: 15px;
  
  position: relative;
  left: 120px;
  top: 40px;
}
.para{
  position: relative;
  top: 70px;
  /* left: 90px; */
  width: 250px;
  left: 75px;
  font-weight: lighter;
  color: #4e4e4e;
}

.headerpara:hover{
  box-shadow: 0px 0px 8px 1px;
  background-color: white;
  /* border-radius: 10px; */
  transition: 500ms;
}
.headerpara{
  /* border: 2px solid red; */
  background-color: rgb(204, 202, 202);
  width: 320px;
  height: 420px;
  position: relative;
  top: 3 0px;
}
.readmore{
  position: relative;
  top: 90px;
  left: 20px;
  width: 90px;
  height: 30px;
  border-radius: 10px ;
  border: none;
  background-color: rgb(145, 145, 245);
}
.readmore:hover{
  background-color: white;
  border: 1px solid rgb(241, 30, 30);
  transition: 200ms;
}
.mediaicon{
  position: relative;
  top: 100px;
  left: 100px;
  
}
.facebook{
  color: #444;
}

.insta:hover{
  transform: scale(1.2);
  transition: 200ms;
}
.facebook:hover{
  transform: scale(1.2);
  transition: 200ms;
}
.linkedin:hover{
  transform: scale(1.2);
  transition: 200ms;
}
.insta{
  position: relative;
  left: 8px;
  color: #444;
}
.linkedin{
  position: relative;
  left: 18px;
  color: #444;
}
.profiles{
  height: 200px;
  width: 200px;
  position: relative;
  left: 55px;
  top: 10px;
  font: italic;
  color: #888;
}
.name{
  color: black;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  left: 100px;
  top: 20px;
}
.name1{
  color: black;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  left: 110px;
  top: 20px;
}
/* .footer{
  border: 2px solid white;
  position: relative;
  top: 800px
} */
.footer {
  margin-top: 1rem;
  background: var(--bg);
  position: relative;
  top: 800px
}
.fas{
  font: lighter;
}
.box a{
  /* border: 2px solid red; */
  font: lighter;
  width: 200px;
}
.box i :hover{
  background-color: #008eca;
   box-shadow: 0px 0px 8px 1px;
   transition: 300ms;
}
.box h3{
  font-family: 'Nunito', sans-serif;;
}
.footer .box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;
  padding-left: 1rem;
}

.footer .box-container .box h3 {
  font-size: 1.5rem;
  padding: 1rem 0;
  color: var(--black);
}

.footer .box-container .box a {
  display: block;
  font-size: 1.3rem;
  padding: 0.4rem 0;
  color: var(--light-color);
}

.footer .box-container .box a i {
  padding-right: .5rem;
  color: var(--main-color);
}

.footer .box-container .box a:hover i {
  padding-right: 1rem;
}

.footer .credit {
  color: var(--black);
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  font-size: 1.1rem;
}

.footer .credit span {
  color: #0077ff88;
  font-weight: bold;
}`;

export default LoginPage;
