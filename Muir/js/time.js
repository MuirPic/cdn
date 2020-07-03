function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("01/08/2019 00:00:00");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (e_daysold - daysold) * 24;
    hrsold = Math.floor(e_hrsold);
    showtime.innerHTML = daysold + "天";
    //showtime.innerHTML=daysold+"天"+hrsold+"小时";
}
show_date_time();