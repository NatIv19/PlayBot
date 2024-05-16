let tries = 5;

const gameBotFunction = function () {
    let mysteryNumber;
    let answer;
  

    let start = confirm("Привет! Сыграем? Угадай число от 0 до 100. У тебя есть "+tries+" попыток.");
    if (start){
        mysteryNumber = randomGenerate(0, 100);
        for (let i = 0; i < tries; i++){
            console.log("i=", i);
            if (i == 0) answer = +prompt("Я загадал число! Напиши свой вариант");
            else answer = +prompt("У тебя осталось " + (tries-i) + " попыток. Напиши свой вариант");         
            
            if (answer === null) {
                alert("Уже уходишь? Возвращайся...");
                break;
            }
            if (!isNumber(answer))
            {
                alert("Ты ввел не число! Попробуй еще разок...");
                i--;
                console.log("i=", i);
                continue;
            }
            if (answer == mysteryNumber) {
                tries += 5;
                let winner = confirm("Ура! Поздравляю с победой! Тебе добавится 5 дополнительных попыток в следующем раунде. Продолжим?");
                if (!winner)
                {
                    tries = 0;
                    return;
                }
                else gameBotFunction();
                
                
            }
            else if (answer<mysteryNumber) {
                alert("Я загадал число больше, чем твоё. Попробуй еще"); 
                if (tries - i-1 == 0) {
                    let finish = confirm("Количество попыток истекло. Очень жаль... Сыграем еще?"); 
                    if (finish) gameBotFunction();
                    else return;
                }
            }
            else if (answer>mysteryNumber) {
                alert("Я загадал число меньше, чем твоё. Попробуй еще"); 
                if (tries - i-1 == 0) {
                    let finish = confirm("Количество попыток истекло. Очень жаль... Сыграем еще?"); 
                    if (finish) gameBotFunction();
                    else return;
                }
            }
          
        }
        
        }
    console.log(mysteryNumber);
}

function randomGenerate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function isNumber(text) {
    return !isNaN(parseFloat(text))&&isFinite(text); 
}

gameBotFunction();