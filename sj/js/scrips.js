var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var hi = document.querySelectorAll('ul > li')

//addEventListener -  обработчик события с вывовом возвращающей значени функции

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();     // перехват события
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
}

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "Удалить ";

        var newItem = this.value; // получение данных из поля input
        this.value = " ";

        ulSpisok.appendChild(newLi).append(newSpan, newItem);
    }

    deleteTodo();
})

saveBtn.addEventListener('click', function(){
      localStorage.setItem('TodoApp', ulSpisok.innerHTML );  
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
});


deleteTodo();

loadTodo();