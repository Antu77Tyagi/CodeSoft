const input=document.querySelector('input');
let string="";
const val=document.querySelectorAll('.btn')
for (const item of val) {
    item.addEventListener('click',()=>{
    if(item.innerHTML =='='){
                string=eval(string);
                input.value=string;
            }
            else if(item.innerHTML == 'AC'){
                    string="";
                    input.value=string;  
                }
                else if(item.innerHTML=='del'){
                    let s=input.value;
             input.value=s.substring(0,input.value.length-1);
                }
                else {
                      string= string + item.innerHTML
                     input.value=string;                        
}})
}