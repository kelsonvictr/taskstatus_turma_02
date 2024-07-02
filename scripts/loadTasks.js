const teamMembers = [
    'kelson-almeida', 
    'pedro-oliveira',
    'caroline-andrade',
    'pablo-miranda',
    'artur-lucas', 
    'jucymara-lacet',
    'daniela-barreto',
    'luisa-silva',
    'tatiane-fontes',
    'brasimar-henrique',
    'luiz-reis',
    'thiago-andrade',
    'alik-breno',
    'sarah-bichler',
    'jackeline-pereira',
    'giordano-ferreira',
    'priscilla-almeida',
    'luiz-gonzaga',
    'arrys-hanry',
    'waldir-pontual'
];

teamMembers.forEach(member => {
    const script = document.createElement('script');
    script.src = `db/${member}/tasks.js`;
    script.onload = () => {
        const tasksVariableName = `${member.replace('-', '_')}_tasks`;
        const tasks = window[tasksVariableName];
        if (Array.isArray(tasks)) {
            renderTasks(tasks);
        } else {
            console.error(`Failed to load tasks for ${member}`);
        }
    };
    document.head.appendChild(script);
});

function renderTasks(tasks) {
    tasks.forEach(task => {
        const cardHtml = `
            <div class="card">
                <div class="task">Task: ${task.name}</div>
                <div class="description">Description: ${task.description}</div>
                <div class="responsible">Responsible: ${task.responsible}</div>
            </div>
        `;
        if (document.getElementById(task.status)) {
            document.getElementById(task.status).innerHTML += cardHtml;
        } else {
            console.error('Invalid status: ' + task.status);
        }
    });
}
