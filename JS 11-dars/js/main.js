let toDolList = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;


function addTask() {
     let taskName = document.getElementById('taskInput').value;
     if (taskName !=''){
         let obj = {
             tartib: tr++,
             name: taskName,
             complete: false
         };
         toDolList.push(obj);
         chizish();
         allTask = toDolList.length;
         document.getElementById('allTask').innerText = allTask;
     }
}
function chizish() {
     let list = '';
     toDolList.forEach(function (item) {
          list += '<li class="list-group-item">'+
                     '<input '+(item.complete ? "checked" : "") +' onchange="completed(this)" type="checkbox" id=" '+item.tartib+' " class="mr-2"><label for="'+item.tartib+'">'+item.name+'</label>'
                  '</li>'
     });

     document.getElementById('list').innerHTML = list;
     document.getElementById('comlateTask').innerHTML = completeTask;
     let progressW = (completeTask * 100) / allTask;
     document.getElementById("progress").style.width = progressW + "%";
}
function completed(input) {
    let searchId = input.getAttribute("id");
    let checked = input.getAttribute("checked");
    toDolList.forEach(function (item,i ) {
       if (item.tartib == searchId){
           toDolList[i].complete = item.complete ? false : true;
       }
    });
    console.log(checked);
    if (checked == null){
        completeTask++
    }else {
        completeTask--
    }
    chizish();
};