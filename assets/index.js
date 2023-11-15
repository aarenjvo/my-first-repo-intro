var fibLogo = $(".FibLogo");
fibLogo.fadeOut(1);
fibLogo.fadeIn(4000);
fibLogo.delay(300);
fibLogo.animate({opacity: 1}, 600);

// Start Scroll Fade Functioning for Logo

// const faders = document.querySelectorAll('.FibLogo')

// const appearOptions = {
//   threshold: 1,
//   rootMargin: 0px 0px -200px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {    entry.target.classList.add('appear');
//             appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
//                                                 appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });
                                                
                                                
// End Scroll Fade Functioning
                                                
var menuSection = $(".menu-section");
menuSection.fadeOut(1);
menuSection.fadeIn(6000);
menuSection.delay(300);
menuSection.animate({opacity: 1}, 600);

var mathFav = $(".mathfav-section");
mathFav.fadeOut(1);
mathFav.fadeIn(7000);
mathFav.delay(300);
mathFav.animate({opacity: 1}, 600);

var locationHours = $(".locationhours-section");
locationHours.fadeOut(1);
locationHours.fadeIn(12000);
locationHours.dealy(300);
locationHours.animate({opacity: 1}, 600);