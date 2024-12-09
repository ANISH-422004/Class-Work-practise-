setInterval(() => {
    var date = new Date();
    var hourdeg = date.getHours()*30;
    var minutdeg = date.getMinutes()*6;
    var seconddeg = date.getSeconds()*6;

    document.getElementById("hour").style.transform = `rotate(${(hourdeg+minutdeg/12)}deg)`;
    document.getElementById("minute").style.transform = `rotate(${minutdeg}deg)`;
    document.getElementById("second").style.transform = `rotate(${seconddeg}deg)`;
    }, 1000);