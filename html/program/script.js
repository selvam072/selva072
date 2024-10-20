
      function tea(){
      var d=document.getElementById("s").value
      if((10==d.length)&&((d[0]>=6)&&(d[0]<=9)))
      {
            alert("the  given number is valid")
      }else{
            alert("the  given number is invalid")
      }
}
 function hi(){
      var d=document.getElementById("one").value
      if((10==d.length)&&((d[0]>=6)&&(d[0]<=9)))
      {
            alert("the  given number is valid")
      }else{
            alert("the  given number is invalid")
      }
}

      function nick(){
      var sa=document.getElementById("no").value
      var sel=true
      var sell=false
      var selll=true
      var sellll=false
      for (var i=0;i<sa.length;i++)
      {
            if((sa[i]>='A')&&(sa[i]<='Z'))
            {
               sel=false  
            }
            if (sa[i]=='@')
            {
                  sell=true
            }
            if (sa[i]=='.')
            {
                  selll=false
            }
            if ((sa[i]>='a')&&(sa[i]<='z'))
            {
                  sellll=true
            }
      }
      if (sel==true && sell==true && selll==false && sellll==true )
      {
            alert ("valid")
      }
      else{
            alert("invalid")
      }
}
     function mick(){
      var gg=document.getElementById("hang").value
            var one=true
            var two=true
            var three=true
            var four=true
            var five=true
      for (var i=0;i<gg.length;i++)
      {
            if ((gg.length>=8)&&(gg.length<=16))
            {
               one=false
            }
            if ((gg[i]>='A')&&(gg[i]<='Z'))
            {
                  two=false
            }
            if ((gg[i]>=0)&&(gg[i]<=9))
            {
                  three=false
            }
            if ((gg[i]>='a')&&(gg[i]<='z'))
            {
                  four=false
            }
            if ((gg[i]=='@')||(gg[i]=='#')||(gg[i]=='$')||(gg[i]=='*')||(gg[i]=='~')||(gg[i]=='!')||(gg[i]=='^')||(gg[i]=='&'))
            {
                  five=false
            }
      }

         if (one==false && two==false && three==false && four==false && five==false )
         {
            alert ("valid")
         }
         else {
            alert ("invalid")
            alert ("PASSWORD SHOULD MUST HAVE ONE UPPER CASE AND ONE LOWER CASE AND ONE SPECIAL CHARACTER AND ONE NUMERIC AND LENGTH >=8 BUT <=16")
            
         }
   } 

   //confirmpassword//
   function fick(){
      var password=document.getElementById("kk").value
         var gg=document.getElementById("hang").value
         if(password==gg)
         {
            alert("both the passwords are similar!")
            window.location.href="index40.html"
         }
         else{
            alert("both the passwords are not similar!")
         }

   }
   
   
       
function oick(){
      var gg=document.getElementById("han").value
            var one=true
            var two=true
            var three=true
            var four=true
            var five=true
      for (var i=0;i<gg.length;i++)
      {
            if ((gg.length>=8)&&(gg.length<=16))
            {
               one=false
            }
            if ((gg[i]>='A')&&(gg[i]<='Z'))
            {
                  two=false
            }
            if ((gg[i]>=0)&&(gg[i]<=9))
            {
                  three=false
            }
            if ((gg[i]>='a')&&(gg[i]<='z'))
            {
                  four=false
            }
            if ((gg[i]=='@')||(gg[i]=='#')||(gg[i]=='$')||(gg[i]=='*')||(gg[i]=='~')||(gg[i]=='!')||(gg[i]=='^')||(gg[i]=='&'))
            {
                  five=false
            }
      }

         if (one==false && two==false && three==false && four==false && five==false )
         {
            alert ("valid")
          
         }
   
         else {
            alert ("invalid")
            alert (" Dear User! PASSWORD SHOULD MUST HAVE ONE UPPER CASE AND ONE LOWER CASE AND ONE SPECIAL CHARACTER AND ONE NUMERIC AND LENGTH >=8 BUT <=16")
            
         }
   }
   


      



   function mass(){
      var vv=[{'username':'sql','password':'sql@123'},{'username':'webtech','password':'webtech@123'},{'username':'java','password':'java@123'},{'username':'python','password':'python@123'}]
        var ss=document.getElementById("a").value
        var ee=document.getElementById("b").value
        var ll=true
        for (var i=0;i<vv.length;i++)
        {
            if (vv[i]['username']==ss){
                   if (vv[i]['password']==ee){
                        ll=false
                   }
            }
        }
        if(ll==false){
            window.location.href="index1.html"
        }
        else{
            alert("invalid usename and password")
        }
   }
         
         