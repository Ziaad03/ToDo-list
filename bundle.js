/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
// src/modules/logic.js

class Todo {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.completed = false;
    }
  
    toggleComplete() {
      this.completed = !this.completed;
    }
  
    updateDetails({ title, description, dueDate, priority }) {
      if (title) this.title = title;
      if (description) this.description = description;
      if (dueDate) this.dueDate = dueDate;
      if (priority) this.priority = priority;
    }
  }
  
  class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      this.todos.push(todo);
    }
  
    removeTodo(todoTitle) {
      this.todos = this.todos.filter(todo => todo.title !== todoTitle);
    }
  
    getTodos() {
      return this.todos;
    }
  }
  
  class App {
    constructor() {
      this.projects = [];
      this.projects.push(new Project('Default'));
    }
  
    addProject(name) {
      const project = new Project(name);
      this.projects.push(project);
    }
  
    removeProject(name) {
      this.projects = this.projects.filter(project => project.name !== name);
    }
  
    getProject(name) {
      return this.projects.find(project => project.name === name);
    }
  
    getAllProjects() {
      return this.projects;
    }
  
    addTodoToProject(projectName, todo) {
      const project = this.getProject(projectName);
      if (project) {
        project.addTodo(todo);
      }
    }
  
    removeTodoFromProject(projectName, todoTitle) {
      const project = this.getProject(projectName);
      if (project) {
        project.removeTodo(todoTitle);
      }
    }
  }
  
  
  

/***/ }),

/***/ "./src/modules/mediator.js":
/*!*********************************!*\
  !*** ./src/modules/mediator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/modules/logic.js");
// src/modules/mediator.js



const mediator = (() => {
  const app = new _logic__WEBPACK_IMPORTED_MODULE_0__.App();

  const createTodo = (projectName, title, description, dueDate, priority) => {
    const todo = new _logic__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority);
    app.addTodoToProject(projectName, todo);
    return todo;
  };

  const deleteTodo = (projectName, todoTitle) => {
    app.removeTodoFromProject(projectName, todoTitle);
  };

  const createProject = (name) => {
    app.addProject(name);
  };

  const deleteProject = (name) => {
    app.removeProject(name);
  };

  const getProjects = () => {
    return app.getAllProjects();
  };

  const getTodos = (projectName) => {
    const project = app.getProject(projectName);
    return project ? project.getTodos() : [];
  };

  return {
    createTodo,
    deleteTodo,
    createProject,
    deleteProject,
    getProjects,
    getTodos,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediator);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mediator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mediator */ "./src/modules/mediator.js");


let header = document.getElementById('header')

const h11 = document.createElement('h1')
h11.textContent="press the button to add a project or todo idk "

let btn = document.createElement('button')
btn.textContent = "press here"

header.appendChild(h11)
header.appendChild(btn)

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1Q0FBdUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFnQztBQUNoQzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOztBQUVvQzs7QUFFcEM7QUFDQSxrQkFBa0IsdUNBQUc7O0FBRXJCO0FBQ0EscUJBQXFCLHdDQUFJO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDNUN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tZWRpYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3JjL21vZHVsZXMvbG9naWMuanNcblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuICBcbiAgICB0b2dnbGVDb21wbGV0ZSgpIHtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gIXRoaXMuY29tcGxldGVkO1xuICAgIH1cbiAgXG4gICAgdXBkYXRlRGV0YWlscyh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfSkge1xuICAgICAgaWYgKHRpdGxlKSB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICBpZiAoZGVzY3JpcHRpb24pIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIGlmIChkdWVEYXRlKSB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgaWYgKHByaW9yaXR5KSB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuICB9XG4gIFxuICBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbiAgXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICBcbiAgICByZW1vdmVUb2RvKHRvZG9UaXRsZSkge1xuICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby50aXRsZSAhPT0gdG9kb1RpdGxlKTtcbiAgICB9XG4gIFxuICAgIGdldFRvZG9zKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XG4gICAgfVxuICB9XG4gIFxuICBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdEZWZhdWx0JykpO1xuICAgIH1cbiAgXG4gICAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICBcbiAgICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcbiAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSAhPT0gbmFtZSk7XG4gICAgfVxuICBcbiAgICBnZXRQcm9qZWN0KG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgIH1cbiAgXG4gICAgZ2V0QWxsUHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgICB9XG4gIFxuICAgIGFkZFRvZG9Ub1Byb2plY3QocHJvamVjdE5hbWUsIHRvZG8pIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgcmVtb3ZlVG9kb0Zyb21Qcm9qZWN0KHByb2plY3ROYW1lLCB0b2RvVGl0bGUpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgeyBUb2RvLCBQcm9qZWN0LCBBcHAgfTtcbiAgIiwiLy8gc3JjL21vZHVsZXMvbWVkaWF0b3IuanNcblxuaW1wb3J0IHsgVG9kbywgQXBwIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IG1lZGlhdG9yID0gKCgpID0+IHtcbiAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAocHJvamVjdE5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgYXBwLmFkZFRvZG9Ub1Byb2plY3QocHJvamVjdE5hbWUsIHRvZG8pO1xuICAgIHJldHVybiB0b2RvO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAocHJvamVjdE5hbWUsIHRvZG9UaXRsZSkgPT4ge1xuICAgIGFwcC5yZW1vdmVUb2RvRnJvbVByb2plY3QocHJvamVjdE5hbWUsIHRvZG9UaXRsZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgYXBwLmFkZFByb2plY3QobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgYXBwLnJlbW92ZVByb2plY3QobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFwcC5nZXRBbGxQcm9qZWN0cygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9zID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGFwcC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuZ2V0VG9kb3MoKSA6IFtdO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBnZXRUb2RvcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lZGlhdG9yO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWVkaWF0b3IgZnJvbSBcIi4vbW9kdWxlcy9tZWRpYXRvclwiO1xuXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpXG5cbmNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbmgxMS50ZXh0Q29udGVudD1cInByZXNzIHRoZSBidXR0b24gdG8gYWRkIGEgcHJvamVjdCBvciB0b2RvIGlkayBcIlxuXG5sZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbmJ0bi50ZXh0Q29udGVudCA9IFwicHJlc3MgaGVyZVwiXG5cbmhlYWRlci5hcHBlbmRDaGlsZChoMTEpXG5oZWFkZXIuYXBwZW5kQ2hpbGQoYnRuKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9