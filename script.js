let tasks = [];

// Adding tasks in list

const addtask = () => {
    const input = document.getElementById('taskinput');
    const text = input.value.trim();
    if (text === "") {
        return;
    }

    const newtask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks = [...tasks, newtask];
    input.value = "";

    rendertask();
}

// Removing tasks in list 

const removetask = (id) => {

    tasks = tasks.filter(task => task.id !== id);

    rendertask();
}

// Toggle Tasks

const toggletask = (id) => {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    rendertask();
}

// Render Tasks

const rendertask = () => {
    const tasklist = document.getElementById('tasklist');

    tasklist.innerHTML = tasks.map(task => `

    <li class = "${task.completed ? "completed" : ''}">

        <span onclick = "toggletask(${task.id})" >
             ${task.text}
        </span>

        <button onclick = "removetask(${task.id})">❌</button>

    </li >

    `).join(" ");

    completedstats();
}

// Completed Tasks stats

const completedstats = () => {
    const count = tasks.reduce((acc, task) => {
        return task.completed ? acc + 1 : acc;
    }, 0);
    document.getElementById('stats').innerText = `
    Completed: ${count} / ${tasks.length}`;
}