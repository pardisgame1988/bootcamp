var n=[1,13,22,123,49];
min=10000;
min2=10000;
    for(let i=0;i<=4;i++)
{  
  if(n[i]<min)
  {
    min2=min;
    min=n[i];
  }
  else if(n[i]<min2)
  {
    min2=n[i];
  }

}
    
   

document.write(min2,"  دومین  عدد کوچک")
