var cl = console.log;
const todoform= document.getElementById("todoform");
const todocontrol=document.getElementById("todoitem");

const todocontainer=document.getElementById("todocontainer");
const updatebtn=document.getElementById("updatebtn");
const submitbtn=document.getElementById("submitbtn");
const skilllist=document.getElementById("skilllist");
let todoarr=[];

const ondelete=(eve)=>{
	let getcomfirm=confirm(`are you sure,you want to remove this todo item?`);
	 cl(getconfirm);
	 if(getconfirm===true){
		 cl(ele)
	let deleteid=ele.closest("li").id;
	cl(deleteid);
	let getindex=todoarr.findindex(todo=>todo.todoid===deleted)
	 todoarr.splice(getindex,1)
	 cl(todoarr);
	 localstorage.setitem("todos",json.stringify(todoarr));
           listtemplating(todoarr);
		   swal.fire({
			   title:`todo item is removed sucessfully!!!`
			    icon:'sucess',
				timer:2500
	 })
	 }else{
		 return
	 }
	 
				
	

const onedit=()=>{
	//cl(ele)
	//cl(ele.closet("li"))
	// cl(ele.closest("li").getAttribute("id"));
	let editid=ele.closest("li").getAttribute("Id");
	let editobj=todoarr.find(todo=>todo.todoid===editid);
     localstorage.setitem("editid",editid);
     todocontrol.value=editobj.todoitem;
	 updatebtn.classlist.remove("d-none");
	 submitbtn.classlist.add("d-none");
	 
}

	 
const listtemplating=(arr)=>{
let todolist=`<ul class="list-group">`
	
	arr.foreach(todoobj=>{
		todolist=`<li class="list-group-item font-weight-bold" id="${todoobj.todoitem}">
		               <s>
		${todoobj.todoitem}
		               <span class="float-left">
					   <i class="fa-solid fa-pen-to-square text-primary"onclick="onedit(this)"></i>
		              <i class="fa-solid fa-trash-can text-danger ml-2" onclick="ondelete(this)"> </i>
						</span> 
						</li>`
	};
	todoslist+=`</ul>`
	todocontainer.innerhtml=todolist;
}


lf(localstorage.getitem("todos")){
	todoarr= json.parse( localstorage.getitem("todos"));
	listtemplating(todoarr)
}
	let todolist=<'ul class="list-group">'
	
	todoarr.foreach(todoobj=>{
		todolist='<li class="list-group-item font-weight-bold">${todoobj.todoobj.todoitem}
		<span class="float-right">
		<i class="fa-solid fa-pen-to-square" text-primary fa-2x">></i>
	<i class="fa-solid fa-trash-can text-danger fa-2x ml-4"></i>
				</span>
				</li>
	};
	
}

  
const genrateuuid=()=>{
	return{
	urn (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};
	


const ontodoadd =(eve)=>{
	eve.preventdefault();
	let newtodo={
		todoitem:todocontrol.value,
		todoid:generateuuid()
	};
todoarr.push(newtodo);
	localstorage.setitem("todos",json.stringify(todoarr))
	listtemplating(todoarr)
	swal.fire{{
		title:`new todo item ${newtodo.todoitem} is added is added sucessfully!!!`
		icon:'sucess',
		timer:2500
	}}
	eve.target.reset();
}




const onupdate=()=>{
	let updatedvalue=todocontrol.value;//updatedtodoid
	 //cl(updatedvalue)
	 let updateid=localstorage.getitem("editid");
	 cl(updateid)
	 for(i=0;i<todoarr.length;i++){
		 if(todoarr[i].todoid===updateid){
			 todoarr[i].todoitem=updatevalue;
			   break;
		 }
	 }
	 localstorage.setitem("todos",json.stringify(todoarr));
	 listtemplating(todoarr);
	 swal.fire{{
		title:` todo item ${updated} is updated sucessfully!!!`
		icon:'sucess',
		timer:2500
	 }}
	 todoform.reset();
	 updatebtn.classlist.add("d-none");
	 submitbtn.classlist.remove("d-none");

}
		 
}

todoform.addEventListener("submit",ontodoadd)
updatebtn.addEventListener("click",onupdate){
	
})
	
