'use strict';

let wish =["Счастливого дня рождения! Пусть все твои мечты сбываются!", "Поздравляю с днем рождения! Пусть каждый твой шаг будет направлен к успеху и счастью!", "С днем рождения Алина!", "пускай у тебя будет все что ты хочешь!", "на этой встрече ты будешь лучше всех", "с днем рождения, пускай ты станешь еще сигмовей", "пускай тебе подарят все что тебе нужно", "в твои десять лет каждый день твои дела будут отлично", "автоответчик Миша желает тебе счастя", "ты лучшая", "твой брат желает тебе всего хорошего", "Лев передает с днем рождения", "Ева говорит что ты ее лучшая подруга","все твои друзья передают тебе счастья и здоровья", "от о всех родителей со встречи с днем рождения Алина"]
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genirator(){
    let a= getRandomInt(0, 14)
    document.getElementById('quote').innerHTML=wish[a]
}




