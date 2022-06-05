function send(){
    var new_task=document.querySelector("#new_task").value;
    
    
    c=document.querySelector('input[name="type"]:checked').value;
    var tabe
    var tabe2
    var tabe3
    var tabe4
    var tabe5
    if(c== 1){
            tabe= document.createElement('tr');
            tabe2=document.createElement('td');
            tabe.appendChild(tabe2);
            document.getElementById('tab').appendChild(tabe)
            tabe2.innerHTML=new_task;}
        else{
            if (c==2){
            tabe= document.createElement('tr');
            tabe2=document.createElement('td');
            tabe3=document.createElement('td')
            tabe.appendChild(tabe2);
            tabe.appendChild(tabe3)
            document.getElementById('tab').appendChild(tabe)
            tabe3.innerHTML=new_task;
            }else{
                if(c==3){
            tabe= document.createElement('tr');
            tabe2=document.createElement('td');
            tabe3=document.createElement('td')
            tabe4=document.createElement('td')

            tabe.appendChild(tabe2);
            tabe.appendChild(tabe3);
            tabe.appendChild(tabe4)
            document.getElementById('tab').appendChild(tabe)
            tabe4.innerHTML=new_task;}
            else{
                if(c==4){
            tabe= document.createElement('tr');
            tabe2=document.createElement('td');
            tabe3=document.createElement('td')
            tabe4=document.createElement('td')
            tabe5=document.createElement('td')
            tabe.appendChild(tabe2);
            tabe.appendChild(tabe3);
            tabe.appendChild(tabe4);
            tabe.appendChild(tabe5);
            document.getElementById('tab').appendChild(tabe)
            tabe5.innerHTML=new_task;
                }
            }
        }
    }
 
    
}
