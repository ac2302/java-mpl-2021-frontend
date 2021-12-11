import React from "react";

function HomePage() {
	return (
		<div>
			<nav className="nav">
				<div className="logo">
					<img className="logoimg" src="/Img/finallogo.png" />
				</div>
				<div className="navlist">
					<ul>
						<li>
							<a className="href" href="index.html">
								Home
							</a>
						</li>
						<li>
							<a href="#AboutusSection">About Us</a>
						</li>
						<li>
							<a className="href" href="scedule.html">
								Schedule
							</a>
						</li>
						<li>
							<a href="contactUs.html">Contact Us</a>
						</li>
					</ul>
				</div>
				<button className="btn">
					<a className="href" href="Login.html">
						SIGN IN
					</a>
				</button>
			</nav>
			<div className="text1">
				<img src="/Img/Schedule your day here.png" />
			</div>
			<div className="text2">
				<img src="/Img/We make your day more simpler.png" />
			</div>
			<button className="btn1">
				<a className="href" href="Login.html">
					Get Started
				</a>
			</button>
			<div className="img1">
				<img src="/Img/img1.png" />
			</div>
			<div className="aboutus">Our Team</div>
			<div className="AboutusSection">
				<a name="AboutusSection"></a>
				<div className="headerpara">
					<img className="profiles" src="./Img/Profile1.svg" alt="" />
					<div className="name1">Sahil Bhatt</div>
					<div className="header">Developer</div>
					<div className="para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					{/* <!-- <button className="readmore">Read More</button> --> */}
					<div className="mediaicon">
						<img className="facebook" src="/Img/facebook.png" />
						<img className="insta" src="/Img/insta.png" />
						<img className="linkedin" src="/Img/Linkedin.png" />
					</div>
				</div>

				<div className="headerpara">
					<img className="profiles" src="./Img/profile2.svg" alt="" />
					<div className="name">Aryan Chavan</div>
					<div className="header">Developer</div>
					<div className="para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					{/* <!-- <button className="readmore">Read More</button> --> */}
					<div className="mediaicon">
						<img className="facebook" src="/Img/facebook.png" />
						<img className="insta" src="/Img/insta.png" />
						<img className="linkedin" src="/Img/Linkedin.png" />
					</div>
				</div>

				<div className="headerpara">
					<img className="profiles" src="./Img/profile3.svg" alt="" />
					<div className="name">Vedant Dange</div>
					<div className="header">Developer</div>
					<div className="para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</div>
					{/* <!-- <button className="readmore">Read More</button> --> */}
					<div className="mediaicon">
						<img className="facebook" src="/Img/facebook.png" />
						<img className="insta" src="/Img/insta.png" />
						<img className="linkedin" src="/Img/Linkedin.png" />
					</div>
				</div>
			</div>
			{/* <!-- <div className="footersection"> */}
			hello
			{/* </div> --> */}
			<section className="footer">
				<div className="box-container">
					<div className="box">
						<h3>Quick Links</h3>
						<a className="href" href="index.html">
							<i className="fas fa-arrow-right"></i> Home
						</a>
						<a className="href" href="scedule.html">
							<i className="fas fa-arrow-right"></i> Schedule Meet
						</a>
						<a className="href" href="#">
							<i className="fas fa-arrow-right"></i>About Us
						</a>
						<a className="href" href="contactUs.html">
							<i className="fas fa-arrow-right"></i> Contact Us
						</a>
					</div>

					<div className="box">
						<h3>Follow Us</h3>
						<a className="href" href="#">
							<i className="fab fa-facebook-f"></i> Facebook
						</a>
						<a className="href" href="#">
							{" "}
							<i className="fab fa-twitter"></i> Twitter{" "}
						</a>
						<a className="href" href="#">
							<i className="fab fa-instagram"></i> Instagram
						</a>
						<a className="href" href="#">
							<i className="fab fa-linkedin"></i> Linkedin
						</a>
					</div>
				</div>

				<div className="credit">
					created by <span>GOD</span> | all rights reserved
				</div>
			</section>
		</div>
	);
}

export default HomePage;
