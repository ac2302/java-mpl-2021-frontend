import React from "react";
// import "./ContactUsPage.css";

function ContactUsPage() {
	return (
		<div>
			<style>{styles}</style>
			<div className="section-gap"></div>
			<div className="bg">
				<div className="wrapper">
					<h3 className="global-title text-center">Contact us</h3>
					<div className="d-grid contact-view">
						<div className="cont-details">
							<div className="cont-top">
								<div className="cont-left text-center">
									<span className="fa fa-phone text-primary"></span>
								</div>

								<div className="cont-right">
									<h6>Call Us</h6>
									<p>
										<a href="#">+91 888 888 1212</a>
									</p>
								</div>
							</div>

							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-envelope-o text-primary"></span>
								</div>
								<div className="cont-right">
									<h6>Email Us</h6>
									<p>
										<a href="mailto:example@mail.com" className="mail">
											somebody69@gmail.com
										</a>
									</p>
								</div>
							</div>

							<div className="cont-top margin-up">
								<div className="cont-left text-center">
									<span className="fa fa-map-marker text-primary"></span>
								</div>
								<div className="cont-right">
									<h6>Address</h6>
									<p>Malad, Mumbai, India.</p>
								</div>
							</div>
						</div>

						<div className="map-content">
							<form action="#" method="post">
								<div className="twice-two">
									<input
										type="text"
										className="form-control"
										name="w3lName"
										id="w3lName"
										placeholder="Name"
										required=""
									/>
									<input
										type="email"
										className="form-control"
										name="w3lSender"
										id="w3lSender"
										placeholder="Email"
										required=""
									/>
								</div>

								<div className="twice">
									<input
										type="text"
										className="form-control"
										name="w3lSubject"
										id="w3lSubject"
										placeholder="Subject"
										required=""
									/>
								</div>

								<textarea
									name="w3lMessage"
									className="form-control"
									id="w3lMessage"
									placeholder="Message"
									required=""
								></textarea>
								<button type="submit" className="btn btn-contact">
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const styles = `@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;600;700&display=swap");
* {
	font-family: "Nunito", sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
	border: none;
	text-decoration: none;
	text-transform: capitalize;
}

html {
	/* font-size: 62.5%; */
	scroll-behavior: smooth;
	/* scroll-padding-top: 9rem;
    overflow-x: hidden; */
}

/* .nav {
    position: sticky;
    height: 5rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background: hsl(191, 100%, 58%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 9%;
    animation: to-top 1s forwards;
}

.nav .logoimg {
    height: 3.5rem;
    width: 3rem;
}

.nav .navlist {
    margin-left: 5rem;
}

.nav .navlist a {
    font-size: 1.2rem;
    color: #053742;
    margin-right: 3rem;
    font-weight: bold;
}

.nav .navlist a:hover {
    color: #ffffff;
    border-bottom: 3px solid #00D1FF;
    transition: 200ms;
}


/* button style */
.btn-contact {
	position: relative;
	top: 100px;
}

.nav .btn {
	background-color: #053742;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	border-radius: 50px;
	box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease 0s;
	cursor: pointer;
	outline: none;
}

.nav .btn a {
	font-size: 1.1rem;
	color: #ff4c29;
	font-weight: bold;
}

.nav .btn a:hover {
	color: #fef9ef;
}

.nav .btn:hover {
	background-color: #000000;
	box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
	color: #fff;
	transform: translateY(-7px);
}

.wrapper {
	width: 80%;
	background: rgb(239, 248, 255);
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 2rem;
}

@media (min-width: 576px) {
	.wrapper {
		max-width: 540px;
	}
}

@media (min-width: 768px) {
	.wrapper {
		max-width: 720px;
	}
}

@media (min-width: 992px) {
	.wrapper {
		max-width: 960px;
	}
}

@media (min-width: 1200px) {
	.wrapper {
		max-width: 1140px;
	}
}

.d-grid {
	display: grid;
}

.text-center {
	text-align: center;
}

.text-left {
	text-align: left;
}

.text-right {
	text-align: right;
}

button,
select {
	outline: none;
	appearance: none;
}

button,
.btn,
select {
	cursor: pointer;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

a {
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

p {
	margin: 0;
	padding: 0;
}

/* Section top bottom gap */

.section-gap {
	padding: 1rem 0;
}

@media screen and (max-width: 767px) {
	.section-gap {
		padding: 3.5rem 0;
	}
}

@media screen and (max-width: 480px) {
	.section-gap {
		padding: 3rem 0;
	}
}

/* / Section top bottom gap */

/* title-styling */

h3.global-title {
	font-size: 40px;
	line-height: 45px;
	color: #16191e;
	margin-bottom: 50px;
	text-transform: capitalize;
}

@media screen and (max-width: 767px) {
	h3.global-title {
		font-size: 40px;
		line-height: 45px;
	}
}

@media screen and (max-width: 600px) {
	h3.global-title {
		font-size: 35px;
		line-height: 40px;
	}
}

@media screen and (max-width: 500px) {
	h3.global-title {
		font-size: 30px;
		line-height: 35px;
	}
}

/* / title-styling */

/* contact1 */

.margin-up {
	margin-top: 2.5rem;
}

h4.sub-title {
	font-size: 16px;
	margin: 0;
	color: #4cb1ff;
	font-weight: normal;
}

.contact-view {
	grid-template-columns: 1fr 1.3fr;
	grid-gap: 30px;
}

.cont-top {
	display: grid;
	grid-template-columns: 20px auto;
	grid-column-gap: 20px;
}

.twice {
	margin-bottom: 20px;
}

.cont-details span.fa {
	font-size: 22px;
	color: #4cb1ff;
	display: block;
	margin-top: 3px;
}

.cont-details h6 {
	font-size: 20px;
	color: #051b35;
	font-weight: 600;
}

.cont-details p,
.cont-details p a {
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	color: #696969;
	margin-top: 3px;
}

.cont-details p a:hover {
	text-decoration: underline;
	opacity: 0.8;
	color: #051b35;
}

.cont-details address {
	margin: 25px 0;
}

.cont-details address p {
	margin: 5px 0;
}

.twice-two {
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr;
	margin-bottom: 20px;
}

.map-content form input,
.map-content form textarea {
	background: #f8f9fa;
	border: 2px solid rgba(85, 85, 85, 0.3);
	color: rgb(73, 73, 73);
	font-size: 16px;
	padding: 12px 15px;
	width: 100%;
	border-radius: 4px;
	height: 55px;
}

.map-content h5 {
	font-size: 25px;
	line-height: 30px;
	margin-bottom: 20px;
	color: #000000;
}

.map-content form textarea {
	resize: none;
	min-height: 140px;
}

.map-content form input:focus,
.map-content form textarea:focus {
	outline: none;
	border: 2px solid #051b35;
	background: #fff;
	box-shadow: none;
}

button.btn-contact {
	border: none;
	font-size: 16px;
	padding: 15px 30px;
	margin: 400px -170px 0;
	color: #fff;
	background: #4cb1ff;
	border-color: #4cb1ff;
	display: inline-block;
	font-weight: 400;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	height: 50px;
	width: 200px;
}

.cont-details h6 a {
	color: #051b35;
}

/* contact1-responsive */

@media (max-width: 992px) {
	.cont-details p,
	.cont-details p a {
		font-size: 16px;
	}
	.cont-details h5 {
		font-size: 32px;
		line-height: 35px;
	}
	.contact-view {
		grid-template-columns: 1fr;
	}
	.map-content {
		margin-top: 40px;
	}
}

@media (max-width: 480px) {
	.twice-two {
		grid-template-columns: 1fr;
	}
	button.btn-contact {
		width: 100%;
	}
}
`;

export default ContactUsPage;
