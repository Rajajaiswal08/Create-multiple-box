var container = document.getElementById("container");
var addBtn = document.getElementById("add-btn");

addBtn.addEventListener(
    "click",
    function(){
        var box = document.createElement("div");
        box.classList.add("box")
       box.innerHTML = `<div class="tray">
                         <button><img src="delete.png" /></button>
                           </div>
                         <textarea name="" id=""></textarea>`;


                        var btn = box.children[0].children[0]
                         btn.addEventListener(
                            "dblclick",
                            function(){
                                btn.parentNode.parentNode.remove();     // 2nd method trivising
                                 // box.remove();   // 1st normal method
                            }
                         )
 
                         container.append(box);
    }
)