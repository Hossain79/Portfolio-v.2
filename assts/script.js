const moreBtn = document.querySelector('.more-btn');
const lessBtn = document.querySelector('.less-btn');
const moreCardShow = document.querySelector('.show-card');
const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.burger');
const about = document.querySelector('.navItem-about');
const skill = document.querySelector('.navItem-skill');
const project = document.querySelector('.navItem-project');
const resume = document.querySelector('.navItem-resume');


moreBtn.addEventListener('click', (e) => {
	e.preventDefault();
	moreCardShow.classList.remove('more-card');
	moreBtn.classList.add('more-btn-hide');
	lessBtn.classList.remove('less-btn-hide');
});

lessBtn.addEventListener('click', (e) => {
	e.preventDefault();
	moreCardShow.classList.add('more-card');
	moreBtn.classList.remove('more-btn-hide');
	lessBtn.classList.add('less-btn-hide');
});

let menuOpen = false;
menuBtn.addEventListener('click', (e) => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
		burger.classList.remove('hamburger-close');
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
		burger.classList.add('hamburger-close');
	}
});
window.addEventListener('click', (e) => {
	if (e.target === about) {
		burger.classList.add('hamburger-close');
		menuBtn.classList.remove('open');
		menuOpen = false;
	} else if (e.target === skill) {
		burger.classList.add('hamburger-close');
		menuBtn.classList.remove('open');
		menuOpen = false;
	} else if (e.target === project) {
		burger.classList.add('hamburger-close');
		menuBtn.classList.remove('open');
		menuOpen = false;
	} else if (e.target === resume) {
		burger.classList.add('hamburger-close');
		menuBtn.classList.remove('open');
		menuOpen = false;
	} else console.log('Sharif Hossain Portfolio');
});
