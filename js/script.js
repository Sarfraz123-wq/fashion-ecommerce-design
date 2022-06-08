document.querySelector('.fa-bars').onclick = ()=>{
    document.querySelector('.nav').classList.toggle('active');
    // document.getElementsByTagName('BODY')[0].classList.toggle('navActive')
    
}
document.querySelector('.fa-times').onclick = ()=>{
    document.querySelector('.nav').classList.remove('active');
    document.getElementsByTagName('BODY')[0].classList.toggle('navActive')
}

document.querySelector('.fa-moon').onclick = ()=>{
    document.getElementsByTagName('BODY')[0].classList.toggle('dark')
    // document.querySelector('.header').classList.toggle('headerDark')
}

