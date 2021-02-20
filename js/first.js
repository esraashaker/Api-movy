
let NameInput = document.getElementById("NameInput");
let EmailInput = document.getElementById("EmailInput");
let phoneInput = document.getElementById("phoneInput");
let AgeInput = document.getElementById("AgeInput");
let passwardInput = document.getElementById("passwardInput");
let repasswardInput = document.getElementById("repasswardInput");
let mainBtn=document.getElementById("mainBtn");
let searchInput=document.getElementById("allMovies");
let searchwoInput=document.getElementById("word");
let pageNumber;
var posts = [];
function movies(){
var myRequest = new XMLHttpRequest();

myRequest.open("GET" , `https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2YccXbBXiTsfTSl5tfS5qJM0D1UkgNKMGQwoXv41FrZVT2NLZifLxrt1s`);

myRequest.send();


myRequest.addEventListener("readystatechange" , function(){


  if(myRequest.readyState == 4 && myRequest.status == 200)
  {
    pageNumber =  JSON.parse(  myRequest.response).page;
    posts =  JSON.parse(  myRequest.response).results;
    console.log(posts);
    displayPosts()
  }
  
});
}
movies();
function moviestest(e){
  var a = new XMLHttpRequest();
  
  a.open("GET" ,` https://api.themoviedb.org/3/search/movie?query=" ${e} "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`);
  

  a.send();
  
  
  a.addEventListener("readystatechange" , function(){
  
  
    if(a.readyState == 4 && a.status == 200)
    {
      pageNumber =  JSON.parse(  a.response).page;
      posts =  JSON.parse(  a.response).results;
      console.log(posts);
      displayPosts()
    }
    
  });
  }

searchInput.onkeyup = function() {
  moviestest(searchInput.value);
}
searchwoInput.onkeyup=function(){
  moviestest(searchwoInput.value);

}

function displayPosts()
{
  var cartoona = ``;

  for(var i=0;i<posts.length;i++)
  {

    cartoona +=`
        <div class="col-md-4 py-2">
        <div class="post">      
        <img class="w-100" src="https://image.tmdb.org/t/p/w500/${posts[i].poster_path}">
        <div class="item-post">
        <h4 class="test">${posts[i].original_title}</h4>
                <p>${posts[i].overview}</p>
                <h5>${posts[i].release_date}</h5>
                <h6>${posts[i].vote_average}</h6>
           </div>
           </div>
        </div>`

  }

  document.getElementById("myRow").innerHTML  = cartoona;
}





  

      
      function subName(){
        var Nameinp = /[a-z]{3,8}/;
        if( Nameinp.test(NameInput.value) == true && NameInput.value != "" ) 
        {
          $("#alertFirst").css("display","none");
          mainBtn.disabled=false;
          console.log("true");
        }
        else{
            $("#alertFirst").css("display","flex");
            mainBtn.disabled=true;
            console.log("false");
          
          

        }
      }
      $("#NameInput").keyup(function(){
        subName();
      })
      function subemail(){
        var Email = /^[a-z]{3,20}[0-9]{2,5}[@][a-z]{4,8}[.com]/;
        if( Email.test(EmailInput.value) == true && EmailInput.value != "" ) 
        {
          $("#alertemail").css("display","none");
          mainBtn.disabled=false;

          console.log("true");
        }
        else{
            $("#alertemail").css("display","flex");
            mainBtn.disabled=true;

            console.log("false");
        }
      }
      $("#EmailInput").keyup(function(){
        
        subemail();
        })
        function subephone(){
          var phone = /^(010|011|015|012)[0-9]{9}$/;
          if( phone.test(phoneInput.value) == true && phoneInput.value != "" ) 
          {
            $("#alertphone").css("display","none");
            mainBtn.disabled=false;

            console.log("true");
          }
          else{
              $("#alertphone").css("display","flex");
              mainBtn.disabled=true;

              console.log("false");
          }
        }
        $("#phoneInput").keyup(function(){
          
          subephone();
          })
          function subeage(){
            var age = /^[0-9]{2}$/;
            if( age.test(AgeInput.value) == true && AgeInput.value != "" ) 
            {
              $("#alertage").css("display","none");
              mainBtn.disabled=false;

              console.log("true");
            }
            else{
                $("#alertage").css("display","flex");
                mainBtn.disabled=true;

                console.log("false");
            }
          }
          $("#AgeInput").keyup(function(){
            
            subeage();
            })
            function subepassward(){
              var passward = /[a-z]{5,8}[A-Z]+[0-9]+/;
              if( passward.test(passwardInput.value) == true && passwardInput.value != "" ) 
              {
                $("#alertpassward").css("display","none");
                mainBtn.disabled=false;

                console.log("true");
              }
              else{
                  $("#alertpassward").css("display","flex");
                  mainBtn.disabled=true;

                  console.log("false");
              }
            }
            $("#passwardInput").keyup(function(){
              
              subepassward();
              })
              function suberepassward(){
                var passward = /[a-z]{5,8}[A-Z]+[0-9]+/;
                if( passward.test(repasswardInput.value) == true && repasswardInput.value != "" ) 
                {
                  $("#alertrepass").css("display","none");
                  mainBtn.disabled=false;

                  console.log("true");
                }
                else{
                    $("#alertrepass").css("display","flex");
                    mainBtn.disabled=true;

                    console.log("false");
                }
              }
              $("#repasswardInput").keyup(function(){
                
                suberepassward();
                })


              $("#test5").click(function(){
                let BoxWidth = $("#navebaar ").innerWidth();
                 console.log(BoxWidth);
                if($(".sideBar").css("left") == "0px")//hwa bara
                {
                  $(".sideBar").animate({left:`-${BoxWidth}`} , 1000);
                }
                else
                {
                  $(".sideBar").animate({left:`0px`} , 1000);
                }
              
              })
        