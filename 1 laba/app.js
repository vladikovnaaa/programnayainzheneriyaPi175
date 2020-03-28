    //Лабораторная работа №1
    var express = require('express');
    var app = express();

    var server = app.listen(7998, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
    })
    //Пункт 1 http://localhost:7998/p1/865
        app.get("/p1/:znach", (req, result)=>
        {
            var num={
                num: req.params.znach,
            }
            var json = JSON.stringify(num);
            result.send(json);
        });
   // Пункт 2 http://localhost:7998/p2/?a=2&b=5&c=-7
    app.get('/p2', (req, result)=>
{
        var a = req.query.a;
        var b = req.query.b;
        var c = req.query.c;
        var Discriminant = Math.pow(b,2)-4*a*c;
        var number={};

        if (Discriminant < 0)
            number.answer="Этот дискриминант меньше 0";

        else if (Discriminant==0)
            number.x=-b / (2 * a);

        else
        {
            number.x1=x1=(-b + (Math.sqrt(Discriminant))) / (2 * a);
            number.x2=x2 =(-b - (Math.sqrt(Discriminant))) / (2 * a);
        };

        var json = JSON.stringify(number);
        result.send(json);
});

    //Пункт 3 http://localhost:7998/p3/?date=02.06.2025
    app.get('/p3', (req, result)=>
    {
        var getDate=new Date(req.query.date);
        var day = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        var json = JSON.stringify({date: day[getDate.getDay()]});
        result.send(json);
    });

    //Пункт 4 http://localhost:7998/p4/8

    app.get("/p4/:parametr",  (req, result) =>
    {
        var n = req.params.num;
        var a = 3,
            b = 3;
        for (let i = 3; i <= n; i++) {
            var temp = a + b;
            a = b;
            b = temp;
        };
        result.send({
            "число Фибоначчи": b
        });
    });

    //Пункт 5 http://localhost:7998/p5/38
    app.get("/p5/:parametr",  (req, result) =>
    {
        var n = req.params.reg;
        var RUS = [
            [
                "22",
                "Алтайский край"
            ],
            [
                "23",
                "Краснодарский край"
            ],
            [
                "24",
                "Красноярский край"
            ],
            [
                "28",
                "Амурская область"
            ],
            [
                "29",
                "Архангельская область"
            ],
            [
                "30",
                "Астраханская область"
            ],
            [
                "31",
                "Белгородская область"
            ],
            [
                "32",
                "Брянская область"
            ],
            [
                "33",
                "Владимирская область"
            ],
            [
                "34",
                "Волгоградская область"
            ],
            [
                "35",
                "Вологодская область"
            ],
            [
                "36",
                "Воронежская область"
            ],
            [
                "37",
                "Ивановская область"
            ],
            [
                "38",
                "Иркутская область"
            ],
            [
                "39",
                "Калининградская область"
            ],
            [
                "40",
                "Калужская область"
            ],
            [
                "41",
                "Камчатский край"
            ],
            [
                "42",
                "Кемеровская область"
            ],
            [
                "43",
                "Кировская область"
            ],
            [
                "44",
                "Костромская область"
            ],
            [
                "77",
                "г. Москва"
            ],
            [
                "79",
                "Еврейская автономная область"
            ],
            [
                "75",
                "Забайкальский край"
            ],
            [
                "07",
                "Кабардино-Балкарская Республика"
            ],
            [
                "99",
                "Иные территории, включая город и космодром Байконур"
            ],
            [
                "09",
                "Карачаево-Черкесская Республика"
            ],
            [
                "45",
                "Курганская область"
            ],
            [
                "46",
                "Курская область"
            ],
            [
                "47",
                "Ленинградская область"
            ],
            [
                "48",
                "Липецкая область"
            ],
            [
                "49",
                "Магаданская область"
            ],
            [
                "50",
                "Московская область"
            ],
            [
                "51",
                "Мурманская область"
            ],
            [
                "83",
                "Ненецкий автономный округ"
            ],
            [
                "52",
                "Нижегородская область"
            ],
            [
                "53",
                "Новгородская область"
            ],
            [
                "54",
                "Новосибирская область"
            ],
            [
                "55",
                "Омская область"
            ],
            [
                "56",
                "Оренбургская область"
            ],
            [
                "57",
                "Орловская область"
            ],
            [
                "58",
                "Пензенская область"
            ],
            [
                "59",
                "Пермский край"
            ],
            [
                "25",
                "Приморский край"
            ],
            [
                "60",
                "Псковская область"
            ],
            [
                "01",
                "Республика Адыгея (Адыгея)"
            ],
            [
                "04",
                "Республика Алтай"
            ],
            [
                "02",
                "Республика Башкортостан"
            ],
            [
                "03",
                "Республика Бурятия"
            ],
            [
                "05",
                "Республика Дагестан"
            ],
            [
                "06",
                "Республика Ингушетия"
            ],
            [
                "08",
                "Республика Калмыкия"
            ],
            [
                "10",
                "Республика Карелия"
            ],
            [
                "11",
                "Республика Коми"
            ],
            [
                "91",
                "Республика Крым"
            ],
            [
                "12",
                "Республика Марий Эл"
            ],
            [
                "13",
                "Республика Мордовия"
            ],
            [
                "14",
                "Республика Саха (Якутия)"
            ],
            [
                "15",
                "Республика Северная Осетия - Алания"
            ],
            [
                "16",
                "Республика Татарстан (Татарстан)"
            ],
            [
                "17",
                "Республика Тыва"
            ],
            [
                "19",
                "Республика Хакасия"
            ],
            [
                "61",
                "Ростовская область"
            ],
            [
                "62",
                "Рязанская область"
            ],
            [
                "63",
                "Самарская область"
            ],
            [
                "78",
                "Санкт-Петербург"
            ],
            [
                "64",
                "Саратовская область"
            ],
            [
                "65",
                "Сахалинская область"
            ],
            [
                "66",
                "Свердловская область"
            ],
            [
                "92",
                "Севастополь"
            ],
            [
                "67",
                "Смоленская область"
            ],
            [
                "26",
                "Ставропольский край"
            ],
            [
                "68",
                "Тамбовская область"
            ],
            [
                "69",
                "Тверская область"
            ],
            [
                "70",
                "Томская область"
            ],
            [
                "71",
                "Тульская область"
            ],
            [
                "72",
                "Тюменская область"
            ],
            [
                "18",
                "Удмуртская Республика"
            ],
            [
                "20",
                "Чеченская Республика"
            ],
            [
                "21",
                "Чувашская Республика - Чувашия"
            ],
            [
                "86",
                "Ханты-Мансийский автономный округ - Югра"
            ],
            [
                "87",
                "Чукотский автономный округ"
            ],
            [
                "89",
                "Ямало-Ненецкий автономный округ"
            ],
            [
                "76",
                "Ярославская область"
            ]
        ];
        for (let index = 0; index < RUS.length; index++) {
            if (RUS[index][0]===n) {
                result.send({
                    'название региона России': RUS[index][1]
                });
            };

        };
        result.send("Совпадений нет");
    });
