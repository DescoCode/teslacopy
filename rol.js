window.addEventListener('scroll', function(event){ 
   if (window.scrollY > 3000) {
      document.getElementById("main").style.display = "none";
   } else {
      document.getElementById("main").style.display = "block";
   }
 });

 