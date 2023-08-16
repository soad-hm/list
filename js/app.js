const inputelem= document.getElementById('itemInput')
const addbtn=document.getElementById('addButton')
const clearbtn=document.getElementById('clearButton')
const todolistelem=document.getElementById('todoList')
let Arrayy=[]
function addnewtodo(){
    let newtodotitle=inputelem.value;
    let newobj={
    id:Arrayy.length+1,
    title:newtodotitle,
    complate:false,
}
inputelem.value =' '
Arrayy.push(newobj)
setlocalstorage(Arrayy)
todogenarator(Arrayy)

}
function setlocalstorage(todoList){
localStorage.setItem('todo',JSON.stringify(todoList))
}
function todogenarator(todoList){
    todolistelem.innerHTML= ' '
    let newtodoli,newtodolable,newtododelete,newtodocompelate
    todoList.forEach(function(todo) {
        console.log(todo);
        newtodoli=document.createElement('li')
        newtodoli.className='completed well'

        newtodolable=document.createElement('label')
        newtodolable.innerHTML=todo.title
        // newtodolable.innerHTML=todo.title 
        newtodocompelate=document.createElement('button')
        newtodocompelate.className='btn btn-success'
        newtodocompelate.innerHTML='complate'
        newtodocompelate.setAttribute('onclick','editit('+todo.id+')')
       

         newtododelete=document.createElement('button')
        newtododelete.className='btn btn-danger'
        newtododelete.innerHTML='delete'
        newtododelete.setAttribute('onclick','removeit('+todo.id+')')
 if(todo.complate){
            newtodoli.className='uncomplated well'
            newtodocompelate.innerHTML='unComplate'   
        }
        newtodoli.append(newtodolable,newtodocompelate,newtododelete)
        
        todolistelem.append(newtodoli)
       
    });
}
function eaditit(todoit){
let mainlocalstoraged=json.parse(localStorage.getItem("todo"))
Arrayy=mainlocalstoraged
Arrayy.forEach(function(todo){
    if(todo.id === todoit){
        todo.complate = !todo.complate
    }
})
setlocalstorage(Arrayy)
todogenarator(Arrayy)

}
function removeit(todoit){
   let mainlocalstorage =JSON.parse(localStorage.getItem("todo"))
   Arrayy=mainlocalstorage
   let maintodoindex=mainlocalstorage.findIndex(function(i){
   return i.id=todoit
})
Arrayy.splice(maintodoindex,1)
setlocalstorage(Arrayy)
todogenarator(Arrayy)
}
function getlocalstorage(){
    let lst=JSON.parse(localStorage.getItem('todo'))
   if(lst){
    Arrayy=lst
   }
   else{
    Arrayy=[]
   }
   todogenarator(Arrayy)
}
function clearbb(){
    Arrayy=[]
    todogenarator(Arrayy)
    localStorage.removeItem('todo')
}
window.addEventListener('load',getlocalstorage)
addbtn.addEventListener('click',addnewtodo)
clearbtn.addEventListener('click',clearbb)
inputelem.addEventListener('keydown',function(event){
    if(event.code==='Enter'){
    addnewtodo();
    }
})