let items =Array.from(document.querySelectorAll(".circle"))
let dropZone=Array.from(document.querySelectorAll(".dropZone"))




items.forEach(item=>{
    item.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text",e.target.id)
        // console.log("start");
        
    })
    item.addEventListener("dragend",()=>{
        // console.log("end");
    })
})



dropZone.forEach(zone  =>{
    zone.addEventListener("dragenter",()=>{
        //  console.log("enter");
    })
    zone.addEventListener("dragleave",()=>{
        // console.log("leave");
    })
    zone.addEventListener("dragover",(e)=>{
        e.preventDefault();
     })
    zone.addEventListener("drop",(e)=>{
        let droppeditem=e.dataTransfer.getData("text")
        let droppedid=document.getElementById(droppeditem)
      

       
         console.log(zone);
        
      



    })
})

   





