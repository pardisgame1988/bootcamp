var char=prompt("یک کلمه وارد کنید");
document.write(char,"<br>");
for(let i=char.length;i>=0;i--)
{
    document.write(char.substring(i,i-1));

   
}