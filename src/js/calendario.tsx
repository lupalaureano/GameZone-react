export default function constructMonthCalendar(atual: Date) {


    const mesData = [];
    let semData = [];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    const m = new Date(atual.getFullYear(), atual.getMonth() + 1, 0).getDate();
    //console.log(m);

    const monthStart = new Date(`${months[atual.getMonth()]} 1 ${atual.getFullYear()} 0:0:0`);
    const weekdayStart = monthStart.getDay();          // Day of the week(mon - sun)
    const weekdayEnd = new Date(`${months[atual.getMonth()]} ${m} ${atual.getFullYear()} 0:0:0`);
    let prevMonth
    let nextMonth

    if (atual.getMonth() == 0){
        prevMonth = new Date(`${months[11]} ${new Date(atual.getFullYear(), atual.getMonth(), 0).getDate()} ${atual.getFullYear()-1} 0:0:0`);
    }else{
        prevMonth = new Date(`${months[atual.getMonth() - 1]} ${new Date(atual.getFullYear(), atual.getMonth(), 0).getDate()} ${atual.getFullYear()} 0:0:0`);
    }   
    if (atual.getMonth() == 11){
        nextMonth = new Date(`${months[0]} ${new Date(atual.getFullYear(), atual.getMonth() + 2, 1).getDate()} ${atual.getFullYear()-1} 0:0:0`);
    }else{
        nextMonth = new Date(`${months[atual.getMonth() + 1]} ${new Date(atual.getFullYear(), atual.getMonth() + 2, 1).getDate()} ${atual.getFullYear()} 0:0:0`);
    }
    const idCreator: any = [];
    //const semanas = [];
    let isfirstweek = true;
    for (let i = 0; i < m; i++) {
        //let cadaSemana = [];
        if (isfirstweek) {
            if (weekdayStart != 0) {
                for (let x = weekdayStart; x > 0; x--) {
                    //console.log(prevMonth.getDate());
                    // console.log(x);
                    let p = prevMonth.getDate() - x + 1 + "_" + months[prevMonth.getMonth()] + "_" + prevMonth.getFullYear();
                    //console.log(p);
                    idCreator.push(p);

                }

            }
            isfirstweek = false;
        }
        idCreator.push(monthStart.getDate() + i + "_" + months[monthStart.getMonth()] + "_" + monthStart.getFullYear());

        if (i == m - 1) {
            //console.log(weekdayEnd.getDay());
            let k = 0;
            for (let l = weekdayEnd.getDay(); l < 6; l++) {

                let n = nextMonth.getDate() + k + "_" + months[nextMonth.getMonth()] + "_" + nextMonth.getFullYear();
                k += 1;
                if (n != 'NaN_undefined_NaN')
                    idCreator.push(n);

            }
        }
    }
    // console.log(idCreator);
    const id: any = [];
    idCreator.map((idArray: any, i: number) => {
        if (idArray != 'NaN_undefined_NaN')
            return id.push(idCreator[i])
    });
    //console.log(id);
    const sem = id.length / 7;
    for (let w = 0; w < sem; w++) {

        for (let i = 0; i < 7; i++) {

            // let createTd = document.createElement("td");
            // createTd.setAttribute("id", id[0]);

            const texto = id[0].split("_");

            let nomeClasse = ""


            let diaData = {
                id: id[0],
                texto: texto[0],
                class: nomeClasse,
                url: ""
            }

            if (texto[1] != months[atual.getMonth()])
                diaData.class = "other_month";

            if (diaData.id != 'NaN_undefined_NaN')
                semData.push(diaData);
            else
                id.shift();

            id.shift();
        }
        mesData.push(semData)
        semData = []

        //console.log(mesData)

    }


    const games = [{
        id: "2_September_2026",
        url: "../img/lancamentos/1.png"
    }, {
        id: "3_September_2026",
        url: "../img/lancamentos/4.png"
    }, {
        id: "4_September_2026",
        url: "../img/lancamentos/7.png"
    }, {
        id: "5_September_2026",
        url: "../img/lancamentos/8.png"
    }, {
        id: "15_September_2026",
        url: "../img/lancamentos/5.png"
    }, {
        id: "18_September_2026",
        url: "../img/lancamentos/9.png"
    }, {
        id: "24_September_2026",
        url: "../img/lancamentos/3.png"
    }, {
        id: "25_September_2026",
        url: "../img/lancamentos/2.png"
    }, {
        id: "29_September_2026",
        url: "../img/lancamentos/6.png"
    }, {
        id: "4_August_2026",
        url: "../img/lancamentos/10.png"
    }, {
        id: "6_August_2026",
        url: "../img/lancamentos/11.png"
    }, {
        id: "7_August_2026",
        url: "../img/lancamentos/12.png"
    }, {
        id: "27_August_2026",
        url: "../img/lancamentos/13.png"
    }, {
        id: "1_October_2026",
        url: "../img/lancamentos/14.png"
    }, {
        id: "2_October_2026",
        url: "../img/lancamentos/15.png"
    }, {
        id: "23_October_2026",
        url: "../img/lancamentos/16.png"
    }];






    for (let i = 0; i < games.length; i++) {

        mesData.map((semana) => {
            semana.map((dia) => {
                if (dia.id === games[i].id)
                    dia.url = games[i].url;

            })
        })

    };

    //console.log(mesData);

    return mesData

}
