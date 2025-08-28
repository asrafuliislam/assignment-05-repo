


document.getElementById('Call-btn').addEventListener('click', function(e){
    e.preventDefault()
    const coins = parseInt(document.getElementById('Coin').innerText)

    if(coins>0){
        alert('calling');
        const newCoin = coins-20;
        document.getElementById('Coin').innerText = newCoin;
    }
    else{
        alert('you have to recharge')
    }
})