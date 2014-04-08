var Todos = {};

$( document ).ready( function() {
    Todos.todoTemplate = document.getElementById('todo_template').children;
    Todos.bindEvents();
});

Todos.bindEvents = function() {
    $( 'form' ).on( 'submit', function() {
        event.preventDefault();
        newTodoEvent( this.todo.value );
    });
};


// Controller
function Todo() {

}

// View

// Model
function Store() {
    this.store = {};
}

newTodoEvent = function( data ) {
    debugger;
    $( '.todos' ).append( data );
};