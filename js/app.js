var Todos = {};

$( document ).ready( function() {
    Todos.todoTemplate = document.getElementById('#todo_template').children();
    Todos.view = new Todos.View();
    Todos.todos = new Todos.Store();
    Todos.controller = new Todos.Controller();
    Todos.view.controller = Todos.controller;
    
    $( 'form' ).on( 'submit', function() {
        event.preventDefault();
        newTodoEvent( this.todo.value );
    });
});


// Controller
function Todo() {
}

// View

// Model
function Store() {
    this.store = {};
}

newTodoEvent = function( data ) {
    $( '.todos' ).append( data );
}