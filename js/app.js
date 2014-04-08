var Todos = {};

$( document ).ready( function() {
    Todos.todoTemplate = document.getElementById('todo_template').children;
    Todos.bindEvents();
});

Todos.bindEvents = function() {
    $( 'form' ).on( 'submit', function() {
        event.preventDefault();
        Todos.createTodo( this.todo.value );
    });
};



// Controller
Todos.createTodo = function(data) {
    // Add Todo to the store
    
    // Append todo to the view
};

// View

// Model
Todos.store = function() {
    this.store = {};
};

Todos.Todo = function( data ) {
    this.id = Todos.store.store.length ;

};

newTodoEvent = function( data ) {
    // Add Todo to the store
    // Append todo to the view
    var template = Todos.todoTemplate;
    $( '.todos' ).append( data );
};