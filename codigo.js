 const menu =document.querySelectorAll(".menu li")

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const aMenu = document.querySelector(`.menu a[href = "#${id}"]`);
        if(entry.isIntersecting){
            colorMenu(aMenu,menu);
        }    
    });
},{rootMargin: "-50% 0px -50% 0px"});

menu.forEach(li =>{
    li.addEventListener("click", x =>{
        colorMenu(li.firstChild,menu);
    })
    const hash = li.firstChild.getAttribute("href");
    const target = document.querySelector(hash);
    if(target) observer.observe(target);
});
const colorMenu = (a,lista,tipo)=>{
    for (i of lista){
        let aMenu = i.firstChild;
        if(tipo === 1) aMenu = i;
        if(a === aMenu){
            aMenu.classList.add("seleccionado");
        }else{
            aMenu.classList.remove("seleccionado")
        }
    }
}
const listaSobreMi = document.querySelectorAll(".list-sobreMi li");
listaSobreMi.forEach(li =>{
    li.addEventListener("click", x => {
        mostrarContent(li);
        colorMenu(li,listaSobreMi,1)
        
    })
})
const mostrarContent = (li) =>{
    const content = document.querySelector(".contenedor")
    let clase = li.className;
    clase = clase.split(" ")[0];
    for (i of content.children){
        let claseContent = i.className;
        if(claseContent.includes(clase)){
            i.style = `display : flex;`;
        }else{
            i.style = `display : none;`;
        }
    }
}