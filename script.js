/*Code For Expanding Cards in Gallery */
const panels=document.querySelectorAll(".panel")

panels.forEach(panel =>{
    panel.addEventListener("click",()=>{
        removeClassActive()
        panel.classList.add("active")
    })
})

function removeClassActive(){
panels.forEach(panel =>{
    panel.classList.remove("active")
})
}
/*---*/

/* Code Logic for Progress Bar  */
const circles=document.querySelectorAll(".circle");
const images=['abt4.jpeg','abt0.jpg','abt2.jpeg','abt1.jpeg']

const imgHolder=document.getElementById("imgHolderAbt");

let ind=0;
let width=0;
imgHolder.style.backgroundImage="url("+images[ind]+")";
const nextBtn=document.getElementById("next");
const prevBtn=document.getElementById("prev");
prevBtn.addEventListener("click",()=>{
    
   
    if(ind>0){
    
    circles[ind].classList.remove("active1");
   
    width-=105;
    console.log(String(width)+"px")
    document.getElementById("progress").style.width=String(width)+"px";
   
    ind--;
    imgHolder.style.backgroundImage="url("+images[ind]+")";
    if(width<315 && ind!=3){
        nextBtn.disabled=false;
        nextBtn.style.backgroundColor="rgba("+64+","+121+","+195+",0.994)";;
        nextBtn.style.color="wite";
    } 
    
   
    }
    else{
       
        ind=0;
        imgHolder.style.backgroundImage="url("+images[ind]+")";
        circles[ind].classList.add("active1");
    }
})
nextBtn.addEventListener("click",()=>{
    if(ind==circles.length-1){
        ind=circles.length-1;
       
    }    
   
    else{

     ind++;
     imgHolder.style.backgroundImage="url("+images[ind]+")";
     if(ind==3 && width==210)
     {
         nextBtn.disabled=true;
         nextBtn.style.backgroundColor="grey";
         nextBtn.style.color="white";
     }
    
     circles[ind].classList.add("active1");
     width+=105;
     console.log(String(width)+"px")
     document.getElementById("progress").style.width=String(width)+"px";
    }
})
/*-----*/

/* Coding Carousel */
let html=[`
  
           <p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 5vmin;">Educational Details<br>
            <span style="font-size: 2.75vmin;">( Please Checkout my academics )</span></p>
      
            <div class="graduation" style="display: flex; justify-content: center;margin-top: -7vmin;">
                <div class="eduHolder1">
                <p style="text-align:center ;margin-left: 3vmin;font-weight: bold;font-size: 3.75vmin;color: rgb(59, 159, 222);">Graduation</p>
                <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>College:</b> IIMT College of Engineering,Greater Noida,UP</p>
                <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black;"><b>Degree:</b> B.Tech CSE(AI)</p>
                <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>Batch:</b> 2022-2026</p>
                
                <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>Grades:</b> 8.5 (Gold medal in Mathematics) </p>
            </div>
            </div>
        <div class="EduHolder"  style="display: flex; justify-content: center;">
           
        <div class="classXII">
           <p style="text-align: left;margin-left: 3vmin;font-weight: bold;font-size: 3.75vmin;color: rgb(59, 159, 222); text-align: center;">Class XII</p>
           <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black;"><b>School:</b> St. Joseph's convent High School,CBSE</p>
           <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>Stream:</b> Pure Science</p>
           <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black;"><b>Batch:</b> 2021-2022</p>
           
           <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black;"><b>Grades:</b> 86.5%</p>
   
        </div>
        <div class="ClassX"  style="margin-left:7vmin;">
            <p style="text-align: left;margin-left: 3vmin;font-weight: bold;font-size: 3.75vmin;color: rgb(59, 159, 222);text-align: center;">Class X</p>
            <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>School:</b> St. Joseph's convent High School,CBSE</p>
            <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>Stream:</b> Matriculation(Standard Maths)</p>
            <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black;"><b>Batch:</b> 2019-2020</p>

            <p style="text-align: left;margin-left: 3vmin;font-size: 2.5vmin;color: black; "><b>Grades:</b> 91%</p>
            </div>
        
        `, 
    `<p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 5vmin;">Skills<br>
    <span style="font-size: 2.75vmin;">( Skills are the fuel of life )</span></p>
    <div class="container" style="display: flex;width: 100%; height: 50px;">
    <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="html.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line red"></div>
       </div>
    </div>
    <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="css.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line red"></div>
        </div>
    </div>
 
</div>

<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="js.webp" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line red"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="icon.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line blue"></div>
        </div>
    </div>
 
</div>


<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="seo.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line yellow"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="github.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line green"></div>
        </div>
    </div>
 
</div>


<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="java.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line red"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="C++.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line green"></div>
        </div>
    </div>
 
</div>

<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="dsa.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line blue"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="testing.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line yellow"></div>
        </div>
    </div>
 
</div>
<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="android.webp" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line green"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="python.jpg" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line red"></div>
        </div>
    </div>
 
</div>


<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="django.svg" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line blue"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="IOT.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line yellow"></div>
        </div>
    </div>
 
</div>



<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="mysql.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line blue"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="php.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line green"></div>
        </div>
    </div>
 
</div>



<div class="container" style="display: flex;width: 100%; height: 50px;">
   <div class="skill1 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
      <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
           <img src="ml.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
       </div>
       <div class="borderDiv" style="margin-left: 5px;">
               <div class="line yellow"></div>
       </div>
   </div>
   <div class="skill2 border" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
       <div class="imgBox" style="width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
            <img src="devops.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
        </div>
        <div class="borderDiv" style="margin-left: 5px;">
                <div class="line yellow "></div>
        </div>
    </div>
 
</div>




</div>`,`     

         
<p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 5vmin;">Achievements<br>
    <span style="font-size: 2.75vmin;">( Achievements today are stepping stones for tommorrow )</span></p>

    <p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 3.75vmin;">Hackathons</p>
    <div class="achieveHolderHackathon">
        <ol>
        <li>Smart-O-Hack Series2 - MAIT,New Delhi - <b>1st Positon</b></li>
        <li>Hack@BVP 5.0 - BVP,New Delhi - <b>1st Position</b></li>
        <li>HackMait 3.0 - MAIT,New Delhi - <b>2nd Position</b></li>
        <li>Technothon - Sharda University,Greater Noida - <b>3rd Position</b></li>
        <li>Ideathon - Lingya's Vidyapeeth,Faridabad - <b>2nd Position</b></li>
        <li>SRM Builds 4.0 - SRM,Sonepat - <b>2nd Position</b></li>
        <li>Mind Installers - IIMT,Greater Noida- <b>2nd Position</b></li>
        <li>Software Hackathon - IIMT BCA Department - <b>2nd Position</b></li>     
        </ol>       
    </div>

    <p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 3.75vmin;">Coding Conquest</p>
    <div class="achieveHolderHackathon">
        <ol>
        <li>Code Euler - IIMT Greater Noida - <b>1st Positon</b></li>
        <li>Code Studio - Coding Ninjas- <b>30,000+ exps</b></li>
        <li>March Long Two 2022 Contest- Codechef- <b>Global Rank: 655</b></li>
    </div>
</div>`,`   <p style="text-align: center;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 5vmin;">Personal Details<br>
<span style="font-size: 2.75vmin;">( Welcome to my World )</span></p>
<div class="storyContainer">
<p style="margin-left: 3vmin;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 4vmin;">The 'My' Story<br>
    <p style="margin-left: 3vmin;">Hello, I am <b>Aritra Chakraborty</b> hailing from Rupnarayanpur,West Bengal.I am a 20 year old passionate <b>software developer</b> focussing primarily on <b>web and android development</b>.I participated in 10 national level hackathons and <b>won 8 out of them</b>.Apart from development and hackathons I like reading books on<b> business and self growth</b>.I also play a lot with <b>IOT and electronics</b> using Arduino,Esp8266(Node MCU),Esp32 to develop hardware solutions.Started a new journey as an entrepreneur as of the <b>CEO and director</b> of <b>TechHubIndia</b> providing services on technology consulting and development founded in 7th December 2023.</p>
</p>
<p style="margin-left: 3vmin;color: rgb(59, 159, 222);font-weight: bold; margin-top: -0.15vmin;font-size: 4vmin;">Social Links<br>
    <div class="container" style="display: flex;width: 100%; height: 50px;">
        <div class="skill1" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
           <div class="imgBox" style="display: flex; justify-content:center; align-items: center;width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                <img src="linkedin.webp" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                <a href="https://www.linkedin.com/in/aritra-chakraborty-396604217/" target="_blank">Linkedin</a>
            </div>
         </div>
         <div class="skill2" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
            <div class="imgBox" style="display: flex; justify-content:center; align-items: center;width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                 <img src="github.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                <a href="https://github.com/AritraChakraborty2003" class="href" target="_blank">Github</a>
                </div>
    </div>
    </div>
    <div class="container" style="display: flex;width: 100%; height: 50px;">
        <div class="skill1" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
           <div class="imgBox" style="display:flex;justify-content: center; align-items:center;width:  30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                <img src="leetcode.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                <a href="https://leetcode.com/Aritra_Codes/" class="href" target="_blank">leetcode</a>
            </div>
        </div>
         <div class="skill2" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
            <div class="imgBox" style="display: flex;justify-content: center;align-items: center;width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                 <img src="gfg.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                    <a href="https://auth.geeksforgeeks.org/user/aritrachakraborty487/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target="_blank">GeeksforGeeks</a>
                </div>
    </div>
    </div>
    <div class="container" style="display: flex;width: 100%; height: 50px;">
        <div class="skill1" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
           <div class="imgBox" style="display:flex;justify-content: center;align-items: center;width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                <img src="coding ninjas.webp" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                <a href="https://www.codingninjas.com/studio/profile/Aritra_codes" target="_blank">Codestudio</a>
            </div>
         </div>
         <div class="skill2" style="display: flex;justify-content: center;align-items: center;width: 50%; height: 50px;">
            <div class="imgBox" style="display: flex;justify-content: center;align-items: center;width: 30px; height: 40px;margin-top: 3px;margin-left: 3px;">
                 <img src="codechef.png" style="max-width: 100%;max-height: 100%;object-fit: contain;">
                <a href="https://www.codechef.com/users/aritra_codes" target="_blank">Codechef</a>
                </div>
    </div>
    </div>
    
</div>`]
nextBtn.addEventListener("click",()=>{
    document.getElementById("AboutBox").innerHTML=html[ind];
})
prevBtn.addEventListener("click",()=>{
    document.getElementById("AboutBox").innerHTML=html[ind];
})


/* Hamburger Logic */
const ham=document.getElementById("ham");
const navHam=document.getElementById("navHam");
ham.addEventListener("click",()=>{
   if(window.getComputedStyle(navHam).display === "none"){
        navHam.style.display="block";
   }
   else{
         navHam.style.display="none";
   }
})

