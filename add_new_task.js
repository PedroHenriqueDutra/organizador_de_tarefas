function send(){
    var new_task=document.querySelector("#new_task").value;
    let tabe= document.createElement('tr');
    let tabe2=document.createElement('td');
    tabe.appendChild(tabe2);
    document.getElementById('tab').appendChild(tabe)
    tabe2.innerHTML=new_task;

 
    
}
