const copyBtn = document.querySelector('#copyBtn');
copyBtn.addEventListener('click', function(){
    const email = document.createElement('textarea');
    email.value = "oliwiergebczynski@gmail.com";
    email.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(email);
    email.select();
    document.execCommand('copy');
    document.body.removeChild(email);
    alert("Skopiowano email do schowka")
})