



function Popular (mainHead,artHead,month,year,category,content) {
    this.mainHead = mainHead;
    this.artHead = artHead;
    this.month = month;
    this.year = year;
    this.category = category;
    this.content = content;
    
}

let popular1 = new Popular("Manage payment settings","25 Feb,"," 2013,","Server & Database","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur...") ;
let popular2 = new Popular("Transfer account ownership","24 Feb","2013","Website Dev","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur...")






let questionAcardion=()=>{

    let question = document.querySelector(".question-section-wrap");
    const questionContent = document.querySelectorAll(".question-content")
    question.addEventListener("click",e=>{
      
        if(e.target.classList.contains("question-header")){
    let next= e.target.nextElementSibling;
            
           if(next.classList.contains("active")){
               next.classList.remove("active")
           }
           else{
    
            removeActive()
            next.classList.add("active");
           }
        
            // if(next.classList.contains("active")){
            //     next.classList.remove("active");
            // }
    
    
    
    
        }
     
    })
    
    const removeActive = ()=>{
    questionContent.forEach(e=>{
    
    e.classList.remove("active")
    
    })
    
    
    } 

}
questionAcardion();
let body = document.querySelector("body");

let menu = document.getElementById("nav-container");
let menuBar = document.getElementById("menu-bar");

menuBar.addEventListener("click",()=>{

    menu.classList.toggle("active");
    body.classList.toggle("active")

})