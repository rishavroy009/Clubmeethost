

burger= document.querySelector(".burger");
navbarh=document.querySelector(".nav1");
// navbar=document.querySelector(".h-nav");
home=document.querySelector("#navbar_home");
about=document.querySelector("#navbar_about");
developers=document.querySelector("#navbar_developers");
contactus=document.querySelector("#navbar_contactus");
searchhere=document.querySelector("#navbar_searchhere");
searchbtn=document.querySelector("#navbar_searchbutton");
// burger= document.querySelector(".burger")
// burger= document.querySelector(".burger")

/* <nav class="nav1" >
<a href="" class="head1 v-class-resp" id="navbar_home">Home</a>
<a href="#anchor_about" class="head1 v-class-resp" id="navbar_about">About</a>
<a href="../FA1/developer.html" class="head1 v-class-resp" id="navbar_developers">Developers</a>
<a href="#anchor_contactus" class="head1 v-class-resp" id="navbar_contactus">Contact Us</a>
<a href="#anchor_feedback" class="head1 v-class-resp" id="navbar_feedback">Feedback</a>
<input class="in1 v-class-resp" id="navbar_searchhere" placeholder="Search here...">
<button id="navbar_searchbutton"  class="btn1 v-class-resp" ></button>
<div class="burger">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>
</nav>  */


burger.addEventListener('click',()=>{

    
    navbarh.classList.toggle('h-nav');
    about.classList.toggle('v-class-resp');
    home.classList.toggle('v-class-resp');
    developers.classList.toggle('v-class-resp');
    contactus.classList.toggle('v-class-resp');
    searchhere.classList.toggle('v-class-resp');
    searchbtn.classList.toggle('v-class-resp');


    


})

function validateForm()
{
    // alert("I am working");
    
    var returnval=true;
    
    var name=document.getElementById("fname1").value;
    var email=document.getElementById("femail1").value;
    var phoneno=document.getElementById("fphone1").value;
    var a="@chitkara.edu.in";

    if(name.length<5)
    {
        
        // alert("The name is too short");
        document.getElementById("form1error_name").innerHTML="Name is too short";
        returnval=false;
        
    }

    if(email.includes(a))
    {
        

    }
    else
    {
        document.getElementById("form1error_email").innerHTML="Enter a Chitkara Email ID";
        returnval=false;
    }

    if(phoneno.length!=10)
    {
        document.getElementById("form1error_phone").innerHTML="Enter a valid phone no.";
        returnval=false;
    }

    if(returnval==true)
    {
        alert("Thanks for contacting. We will connect with you soon");

    }
    else
    {
        alert("Please enter correct details to submit the form");
    }

    

    return(returnval);

}

function validateFForm()
{
    
    
     
    var returnval=true;
    
    var name=document.getElementById("fname2").value;
    var email=document.getElementById("femail2").value;
    var phoneno=document.getElementById("fphone2").value;
    var a="@chitkara.edu.in";

    if(name.length<5)
    {
        
        // alert("The name is too short");
        document.getElementById("form2error_name").innerHTML="Name is too short";
        returnval=false;
        
    }

    if(email.includes(a))
    {  

    }
    else
    {
        document.getElementById("form2error_email").innerHTML="Enter a Chitkara Email ID";
        returnval=false;
    }

    if(phoneno.length!=10)
    {
        document.getElementById("form2error_phone").innerHTML="Enter a valid phone no.";
        returnval=false;
    }

    if(returnval==true)
    {
        alert("Thanks for your feedback. We will work on it. ");

    }
    else
    {
        alert("Please enter correct details to submit the form");
    }

    return(returnval);
}

function clubsrch()
{
    var srch = document.getElementsByClassName("in1")[0].value;
    
    var a= "Tech Clubs";
    var b="Event Clubs";
    var c="About";
    var d="Contact";
    var e="Feedback"
    
    

    if(srch==a)
    {
        window.location="#anchor_techclubs";

    }
    else if(srch==b)
    {
        window.location="#anchor_eventclubs";
    }
    else if(srch==c)
    {
        window.location="#anchor_about";
    }
    else if(srch==d)
    {
        window.location="#anchor_about";
    }
    else if(srch==e)
    {
        window.location="#anchor_feedback";
    }

}


