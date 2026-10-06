import {constructMonthCalendar} from '../js/calendario'
export default function AppCalendario () {
        
    
        const p = document.getElementById("prev_month");
        const n = document.getElementById("next_month");


        p.addEventListener('click', () => {
            //console.log('Element was clicked!');
            const temp = now.getMonth();
            now.setMonth(temp - 1);
            constructMonthCalendar();
        });

        n.addEventListener('click', () => {
            //console.log('Element was clicked!');
            const temp = now.getMonth();
            now.setMonth(temp + 1);
            constructMonthCalendar();
        });

        

        constructMonthCalendar();


    return(
       
    <div id="lancamentos">

        <div className="sml-title col-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-calendar" style={{color: '#7c2bf5'}} viewBox = "0 0 16 16">
                    <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
            </div>
            <div>

                <h4>Calendário de Lançamentos</h4>


            </div>
        </div>

        <table className="col-12 tab_borda">
            <thead>
                <tr>

                    <th id="prev_month">
                       {'<'} </th>

                    <th id="mes">Setembro</th>

                    <th id="next_month">
                       {'>'}
                    </th>

                </tr>
            </thead>
        </table>
        <table className="col-12 tab_borda">
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
                <tr>
                    <td className="other_month">30</td>
                    <td className="other_month">31</td>
                    <td>1</td>
                    <td >2</td>
                    <td >3</td>
                    <td>4</td>
                    <td >5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>14</td>
                    <td >15</td>
                    <td>16</td>
                    <td>17</td>
                    <td >18</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td >24</td>
                    <td >25</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>28</td>
                    <td >29</td>
                    <td>30</td>
                    <td className="other_month">1</td>
                    <td className="other_month">2</td>
                    <td className="other_month">3</td>
                </tr>
            </tbody>
        </table>
    </div>

    
    );
}