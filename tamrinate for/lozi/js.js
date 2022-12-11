var c =prompt("عدد را وارد کنید")
for(let i=1;i<=c;i++)
{
   

     for(let k=14;k>=i;k--)
        {
            
      
        document.write('\xa0');
       
        }
       


    for(let j=1;j<=i;j++)
    {
        document.write("*");
    }
  
    document.write("<br>");

}
for(let i=c-1;i>=1;i--){
    ;
    
    for(let k=1;k<=15-i;k++)
    {
        document.write('\xa0');
   
    }
   
    for(let j=1;j<=i;j++){
        
        
        document.write("*");
       
     
    }
    document.write("<br>");
 

}
