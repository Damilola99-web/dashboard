const menuButton = document.querySelector('#menu-btn');
const closeButton = document.querySelector('#close-btn');
const aside = document.querySelector('aside');
const themeToggler = document.querySelector('.theme-toggler');

menuButton.addEventListener('click', () => {
	aside.style.display = 'block';
});

closeButton.addEventListener('click', () => {
	aside.style.display = 'none';
});

themeToggler.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme')
})

// const [home, setHome] = useState(true);
// const [favourite, setfavourite] = useState(false);

// const clickHome = ()=> {
//     setHome(true)
//     setfavourite(false)
// }
// const clickfavourite = ()=> {
//     setHome(false)
//     setfavourite(true)
// }

// <button onclick={clickHome} classname={home? 'dark font active' : 'dark font'}>Home</button>;
// <button onclick={clickfavourite} classname={favourite? 'dark font active' : 'dark font'}>Favourite</button>
