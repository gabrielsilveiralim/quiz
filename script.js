function clicar(){
    var cid = document.querySelector('input#txt1').value;
    var res = document.querySelector('div.res')
    res.innerHTML = `Você está morando no ${cid}`
    if (cid != 'Brasil') {
       res.innerHTML += '<p>Você é <strong>estrangeiro</strong> !</p> '
    } else {
        res.innerHTML += '<p>Você é <strong>brasileiro</strong>!</p>';
    }
} 
