/** @format */
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//SECTION

const section = document.querySelector("section");
const endText = section.querySelector("h1");

//ScrollMagic

//Scene
const controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
  duration: 15000,
  triggerElemnt: intro,
  triggerHook: 0.5,
})
  .setPin(intro)
	.addTo( controller );
  
//Text Animation 
const textAnime = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
let scene2 = new ScrollMagic.Scene( {
	duration: 8000,
	triggerelement: intro,
	triggerHook: 0
} )
	.setTween( textAnime )
	.addTo( controller );
//Video Animation

let accelamount = 0.8;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
	scrollpos = e.scrollPos / 1000;
} );




setInterval( () =>
{
	delay += ( scrollpos - delay ) * accelamount;
		video.currentTime = scrollpos;
}, 33.3 );
