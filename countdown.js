(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDown = new Date("12/24/2022 23:00").getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;
                let days = document.getElementsByClassName("days");
                for(let i = 0; i < days.length; i++) {
                    days[i].innerText = Math.floor(distance / (day));
                }
                let hours = document.getElementsByClassName("hours");
                for(let i = 0; i < hours.length; i++) {
                    hours[i].innerText = Math.floor((distance % (day)) / (hour));
                }
                let minutes = document.getElementsByClassName("minutes");
                for(let i = 0; i < minutes.length; i++) {
                    minutes[i].innerText = Math.floor((distance % (hour)) / (minute));
                }
                let seconds = document.getElementsByClassName("seconds");
                for(let i = 0; i < seconds.length; i++) {
                    seconds[i].innerText = Math.floor((distance % (minute)) / second);
                }

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("title").style.display = "none";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("done").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());