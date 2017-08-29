$( document ).ready(function(){
    var $newTaskInput = $('#newTaskInput');
    var $taskList = $('#taskList');
    var taskTouchStart;
    var taskTouchEnd;
    var taskTouchStartX;
    var taskTouchEndX;

    $('#addNewTask').on('click', function(){
        var newTask = '<li><span>' + $newTaskInput.val() +'</span></li>';
        $taskList.append( newTask);
        $newTaskInput('');
    });
});