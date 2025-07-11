const routes = {
    '/' : '/src/views/home.html',
    '/dashboard' : '/src/views/dashboard.html',
    '/404' : '/src/views/404.html'
};

const indexHtml = document.getElementById('app');

async function loadView(path) {
    const view = routes[path] || routes['/404'];
    
    try {
        const response = await fetch(view);
        const viewContent = await response.text();
        
        indexHtml.innerHTML = viewContent;


        switch (path) {
            case '/':
                import ('/src/controllers/home.js')
                break;
            
            case '/dashboard':
                import ('/src/controllers/dashboard.js')
                break;
        
            default:
                console.log('hola desde js')
                break;
        }

    } catch (error) {
        indexHtml.innerHTML = `<h1> ERROR A CARGAR LA PAGINA</h1>`
    }
    
};

function navegation(path){
    history.pushState(null,null,path);
    loadView(path)
};

document.addEventListener('click', (event) =>{
    const isNewView = event.target.closest('[data-link]');
    
    if(isNewView){
        event.preventDefault();
        navegation(isNewView.getAttribute('href'));
    };
});

window.addEventListener('popstate', () => {
    loadView(location.pathname)
});


loadView(location.pathname);