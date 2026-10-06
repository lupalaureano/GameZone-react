import constructMonthCalendar from "../js/calendario";
import { useState } from "react";
export default function AppCalendario() {
    let now = new Date();

    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    // const p = document.getElementById("prev_month");
    // const n = document.getElementById("next_month");

    const [mes, setMes] = useState(constructMonthCalendar(now));
    const [selecionado, setSelecionado] = useState(meses[now.getMonth()]);
    const [atual, setAtual] = useState(now);

    const prev = () => {
        // console.log('Element was clicked!');
        const temp = atual.getMonth();
        const t = atual;
        t.setMonth(temp -1);
        setAtual(t);
        setSelecionado(meses[atual.getMonth()]);
        setMes(constructMonthCalendar(atual));
        //console.log(selecionado)
    };

    const next = () => {
        // console.log('Element was clicked!');
        const temp = atual.getMonth();
        const t = atual;
        t.setMonth(temp +1);
        setAtual(t);
        setSelecionado(meses[atual.getMonth()]);
        setMes(constructMonthCalendar(atual));
    };






    return (

        <div id="lancamentos">

            <div className="sml-title col-5">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-calendar" style={{ color: '#7c2bf5' }} viewBox="0 0 16 16">
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                </div>
                <div>

                    <h4>Calendário de Lançamentos</h4>


                </div>
            </div>

            <table className="col-12 tab_borda" id='calendario'>
                <thead>
                    <tr>

                        <th id="prev_month" onClick={prev}>
                            {'<'} </th>

                        <th id="mes">{selecionado}</th>

                        <th id="next_month" onClick={next}>
                            {'>'}
                        </th>

                    </tr>
                </thead>
            </table>
            <table className="col-12 tab_borda" >
                <thead className="week">
                    <tr>
                        <td>Dom</td>
                        <td>Seg</td>
                        <td>Ter</td>
                        <td>Qua</td>
                        <td>Qui</td>
                        <td>Sex</td>
                        <td>Sab</td>
                    </tr>
                </thead>
                <tbody id="dias" className="dias">
                    {mes.map((semana, i) => {
                        return (<tr key={i}>{semana.map((dia) => {
                            return (<td id={dia.id} className={dia.class} style={{ backgroundImage: `url(${dia.url})` }} key={dia.id}>{dia.texto} </td>)
                        })}</tr>)
                    })}
                </tbody>
            </table>
        </div>


    );
}