gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo',{
    opacity:0,
    duration:3
})
let intro =gsap.timeline({
    scrollTrigger:{
        trigger:'header',
        start:'top top',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        end: '+=1000',
    }
});
intro.to('.intro-logo',{
    scale:1.2,
})

/* PRIMER SECTION*/
let elemento =gsap.timeline({
    scrollTrigger:{
        trigger:'.elemento-1',
        start:'top 50%',
        scrub:true,
        end:'+=100',
        pin: true,
        /*markers: true*/
    }
});
elemento.from('.video',{
    y: 100
},'<')
elemento.from('.title',{
    scale:5.8,
    y: 400
},'<')

/*SEGUNDO SECTION*/

/*FUEGO*/
let fuego =gsap.timeline({
    scrollTrigger:{
        trigger:'.fuego',
        start:'top 54%',
        scrub:true,
        end:'+=100',
        pin: true,
        /*markers: true*/
    }
});
fuego.from('.title2',{
    scale:5,
    y: 200,
    x:-2370,
},'<');
fuego.from('.img1', {
    opacity:0,
    y:300,
    x:800,
},'<');

/*TIERRA*/
let tierra = gsap.timeline({
    scrollTrigger: {
        trigger: '.tierra',
        start: 'top 40%',  
        end: '+=80',      
        scrub: true,       
        pin: true,  
        /*markers: true*/       
    }
});
tierra.from('.title3', {
    scale: 5,   
    y: 800,     
    x: -650,    
    transformOrigin: 'left',
}, '<');
tierra.from('.img2', {
    opacity: 0,
    y: 900,      
    x: 800,      
    transformOrigin: 'right',
}, '<'); 

/*AIRE*/
let aire = gsap.timeline({
    scrollTrigger: {
        trigger: '.aire',
        start: 'top 50%',  
        end: '+=80',      
        scrub: true,       
        pin: true,   
        /*markers: true*/      
    }
});
aire.from('.title4', {
    scale: 5,   
    y: 800,     
    x: -150,    
    transformOrigin: 'right',
}, '<');
aire.from('.img3', {
    opacity: 0,
    y: 300,      
    x: 800,      
    transformOrigin: 'left',
}, '<');  

/*AGUA*/
let agua = gsap.timeline({
    scrollTrigger: {
        trigger: '.agua',
        start: 'top 50%',  
        end: '+=80',      
        scrub: true,       
        pin: true,
        /*markers: true*/         
    }
});
agua.from('.title5', {
    scale: 5,   
    y: 1200,     
    x: -150,    
    transformOrigin: 'right',
}, '<');
agua.from('.img4', {
    opacity: 0,
    y: 300,      
    x: 800,      
    transformOrigin: 'left',
}, '<'); 









