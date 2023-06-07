function typeWriter(el){
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';

    textArray.forEach((letter, i) => {
        setTimeout(() => (el.innerHTML += letter), 200 * i);
    });

    /*Para repetir
    setInterval(() => typeWriter(el), 8000)
    */
}
typeWriter(digitacao);