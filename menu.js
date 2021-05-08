let t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 1.2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: .2
});

t1.staggerFrom(".menu ul li", 0.9, {
    x: -200, 
    opacity: 0, 
    ease:Expo.easeOut
}, 
0.3);

// ================

t1.staggerFrom(".m-1", 0.9, {
     x: 200, 
     opacity: 0, 
     ease:Expo.easeOut
}, 
0.3);

// ==================

t1.staggerFrom(".city", .5, {
     y: 200, 
     opacity: 0, 
     ease:Expo.easeOut
}, 
0.3);

t1.staggerFrom(".copyright-menu", .5, {
     y: 200, 
     opacity: 0, 
     ease:Expo.easeOut
}, 
0.3);



t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});

// !!! ATTENTION - NE PAS METTRE "a" A LA PLACE DE ".nav__link" CAR CELA ENTRE EN CONFLIT AVEC L'AUTRE BOUTON DE LA PAGE
$(document).on("click", ".nav__link", function() {
     t1.reversed(!t1.reversed());
});