$( document ).ready( function() {
    $( 'form' ).on( 'submit', function() {
        event.preventDefault();
        newTodoEvent( this.todo.value );
    });
});

newTodoEvent = function( data ) {
    $( '.todos' ).append( data );
};

var template = function( data ) {
    
}