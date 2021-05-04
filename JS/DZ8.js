let a, b;

function fPosNegZero() {
    a = +prompt("Введите число: ");
    if (isNaN(a))
        alert("Ошибка в исходных данных!");
    else if (a>0) alert(a + " - положительное число");
    else if (a===0) alert("Вы ввели ноль");
    else alert(a + " - отрицательное число");
}

function fAge() {
    a = +prompt("Ваш возраст: ");
    if (isNaN(a) || (a<0) || (a>120))
        alert("Ошибка в исходных данных!");
    else if ((a>=0)&&(a<1)) alert("Младенчество");
    else if ((a>=1)&&(a<3)) alert("Преддошкольный возраст");
    else if ((a>=3)&&(a<6)) alert("Дошкольный возраст");
    else if ((a>=6)&&(a<10)) alert("Младший школьный возраст");
    else if ((a>=10)&&(a<15)) alert("Подростковый возраст");
    else if ((a>=15)&&(a<21)) alert("Юношеский возраст");
    else if ((a>=21)&&(a<60)) alert("Зрелый возраст");
    else if ((a>=60)&&(a<75)) alert("Пожилой возраст");
    else if ((a>=75)&&(a<90)) alert("Старческий возраст");
    else alert("Долгожители");
}

function fModule() {
    a = +prompt("Введите число: ");
    if (isNaN(a))
        alert("Ошибка в исходных данных!");
    else if (a>=0) alert('|' + a + "| = " + a);
    else alert('|' + a + "| = " + a*(-1));
}

function fTime() {
    a = prompt("Введите время в формате (чч:мм:сс) : ");
    let h = +(a.slice(0,2));
    let m = +(a.slice(3,2));
    let s = +(a.slice(6,2));
    if ((a.charAt(2)!==':')||(a.charAt(5)!==':')||isNaN(h)||isNaN(m)||isNaN(s)||(h<0)||(h>23)||(m<0)||(m>59)||(s<0)||(s>59))
        alert("Ошибка в исходных данных!");
    else
        alert("Время указано корректно");
}

function fQuarter() {
    a = +prompt("Введите координату X: ");
    b = +prompt("Введите координату Y: ");
    if (isNaN(a) || isNaN(b))
        alert("Ошибка в исходных данных!");
    else if ((a===0) && (b===0)) alert ("Выбрано начало координат");
    else if ((a===0) && (b!==0)) alert ("Точка находится на оси Y");
    else if ((a!==0) && (b===0)) alert ("Точка находится на оси X");
    else if ((a>0) && (b>0)) alert ("Точка находится в первой четверти");
    else if ((a<0) && (b>0)) alert ("Точка находится во второй четверти");
    else if ((a<0) && (b<0)) alert ("Точка находится в третей четверти");
    else alert ("Точка находится в четвёртой четверти");
}