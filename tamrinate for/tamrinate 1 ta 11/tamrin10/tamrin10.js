var n1=prompt(" عدد اول برای جدول ضرب وارد کنید");
var  n2=prompt(" عدد  دوم برای جدول ضرب وارد کنید");
document.write( n1," * ",n2,"<br>")
if(n1>n2)
{
   let max=n1;
   let  min=n2;
}
else
{
max=n2;
min=n1;
}
for(let i=1;i<=max ;i++)
{
   
    for(let j=1;j<=min;j++)
    {
        var z=i*j;
        document.write(z," ")
    }  
    
    document.write("<br>")
}