# elementary
<html lang="en">
<head>
<title>Precision Tools</title>
 <style>
* {
margin: 0;
padding: 0;
 box-sizing: border-box;
font-family: times new roman;
 }
  nav {
position: sticky;
top: 0;
background: black;
padding: 15px;
text-align: center;
z-index: 1000;
}
nav a {
color: white;
text-decoration: none;
margin: 0 15px;
font-weight: bold;
}
.hero {
background: white;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 20px;
}
.hero h1 {
font-size: 3rem;
margin-bottom: 10px;
}
.cta-button {
background: green;
color: white;
padding: 12px 24px;
text-decoration: none;
border-radius: 5px;
margin-top: 20px;
}
.hero h2 {
font-size: 3rem;
margin-bottom: 10px;
}
.cta-button {
background: green;
color: white;
padding: 12px 24px;
text-decoration: none;
border-radius: 5px;
margin-top: 20px;
}
.team-section {
padding: 50px 20px;
text-align: center;
}
.team-container {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
margin-top: 30px;
}
.card {
border: 1px solid black;
width: 250px;
padding: 20px;
border-radius: 8px;
box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}
.card img {
width: 100px;
height: 100px;
background: black;
border-radius: 50%;
margin-bottom: 15px;
}
 .contact-section {
  background: white;
  padding: 50px 20px;
  text-align: center;
form {
 max-width: 400px;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 text-align: left;
 }
 input, textarea {
margin-bottom: 15px;
padding: 10px;
border: 1px solid black;
border-radius: 4px;
}
button {
background: white;
color: white;
padding: 10px;
border: none;
border-radius: 4px;
cursor: pointer;
}

</style>  
</head>
<body>
<nav>
<a href="#">Home</a> 
<a href="#team">Team</a> 
<a href="#contact">Contact</a>
</nav>
<hr width="80%">
<div class="hero">

<h2>Welcome to Precision Tools</h2>
<p> Engineering the future with accuracy and care. We deliver high-quality engineering solutions with <br>precision, innovation,
 and reliability </p>
 <br>
<a href="#contact" class="cta-button">see our page</a>
</div>

<br><br>
<div id="team" class="team-section">
<h2>Meet Our Team</h2>
 <center>
<p>Our talented professionals driving innovation</p>
<br>
  </center>
<div class="team-container">
 <div class="card">
<div style="margin:auto" class="card img"></div>
<h3>Ajay R.</h3>
<p><b>CEO & Founder</b></p>
<p>Visionary leader with 15+ years of experience.</p>
 </div>

<div class="card">
<div style="margin:auto" class="card img"></div>

<h3>Rahul Singh</h3>
<p><b>Head of Design</b></p>
<p>Expert in modern product design.</p>
</div>
<div class="card">
<div style="margin:auto" class="card img"></div>

<h3>Akshay Khanna</h3>
<p><b>Lead Engineer</b></p>
<p>Specialist in mechanical systems and innovation.</p>
</div>
</div>
</div>
<br><br>





<section id="contact">
<center>
<h2>Contact Us</h2>
<p>We hear from you</p>
<form>
<p>
<input type="text" placeholder="Enter your full name" size="40" required>
</p>
<p>
<input type="email" placeholder="Enter your email address" size="40" required>
</p>
<p>
<textarea rows="5" cols="42" placeholder="Write your message here." required></textarea>
</p>
<p>
<button type="submit"> Send Message</button>
</p>
</form>
</center>
</section>
<br><br>

<footer>
<h2 align="center">
<hr width="90%">
<p> 2026 Precision Tools Inc.  Built with using html or CSS</p>
</h2>
</footer>
</body>
</html>
