let listCoursesBlock = document.querySelector("#list-courses");
const courseApi = "http://localhost:3000/courses";

function start() {
    // getCourses(function(course) {
    //     renderCourses(course);  renderCourses cũg là 1 func nên có cách viết 2
    // })
    getCourses(renderCourses);
    handleCreateForm()
}

start();

// Function
function getCourses(callback) {
    fetch("http://localhost:3000/courses")
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}

function createCourse(data, callback) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options) 
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    fetch(courseApi + '/' + id, options) 
        .then(function(response) {
            response.json();
        })
        .then(function() {
            let courseItem = document.querySelector(".course-item-${course.id}")
            if(courseItem) {
                courseItem.remove()
            }
        });
}

function renderCourses(courses) {
    let htmls = courses.map(function(course) {
        return `<li class="course-item-${course.id}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <button onclick ="handleDeleteCourse(${course.id})">Xóa</button>
        </li>`
    })
    listCoursesBlock.innerHTML = htmls.join("")
}

function handleCreateForm() {
    let createBtn = document.querySelector("#create")
    createBtn.onclick = function() {
        let name = document.querySelector('input[name = "name"]').value;
        let description = document.querySelector('input[name = "description"]').value;       
        let formData = {
            name: name,
            description: description
        }
        createCourse(formData,function() {
            getCourses(renderCourses);
        });
    }
}
