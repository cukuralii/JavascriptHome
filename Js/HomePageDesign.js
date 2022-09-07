
let UserName = prompt("Lütfen Adınızı Giriniz")
let UserSurname = prompt("Lütfen Soyadınızı Giriniz")

if(UserName !=null && UserSurname.length>2)
{
    var mesaj = document.querySelector('#UserMessage')
    mesaj.innerHTML = ` Hosgeldiniz ${UserName} ${UserSurname}' bey Sizleri Aramızda görmek büyük seref :)`;
 


}
else
{
    alert("bilgileri eksiksiz doldurun")
}


const countDate = new Date('7 Sep, 2022 21:45:00').getTime()

function newtime(){
    const now = new Date().getTime();
    let time = countDate-now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;

    let h = Math.floor(time/(hour));
    let m = Math.floor((time % (hour))/(minute));
    let s = Math.floor((time % (minute))/(second));


    document.getElementById('hour').innerText=h
    document.getElementById('minute').innerText=m
    document.getElementById('second').innerText=s
}

setInterval(function() {
    newtime()
},1000)