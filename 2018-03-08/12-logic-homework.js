'use strict';

window.logic = (function () {
  var idNext = function (todos) {
    return todos.reduce(function (id, todoItem) {
      return id <= todoItem.id
        ? todoItem.id + 1 // greater than id of current item
        : id; // is greater than id of any item so far
    }, 0);
  };

  return {
    // Given previous state and text string, return next state:
    // new item with text at end of todos array.
    addItem: function (state, text) {
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: idNext(state.todos),
          completed: false,
          text: text,
        }),
      });
    },

    // Given previous state and visibilityFilter string, return next state.
    changeFilter: function (state, visibilityFilter) {
      return Object.assign({}, state, {
        view: Object.assign({}, state.view, {
          visibilityFilter: visibilityFilter,
        }),
      });
    },

    // Given previous state and index of item, return next state:
    // item has opposite value of completed property.
    toggleCompleted: function (state, index) {
      return Object.assign({}, state, {
        todos: state.todos.map(function (todoItem, i) {
          if (i === index) {
            return Object.assign({}, todoItem, {
              completed: !todoItem.completed,
            });
          }

          return todoItem;
        }),
      });
    },
  };
}());
