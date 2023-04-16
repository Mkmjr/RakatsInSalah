import React from "react";
import './Rakats.css';

function App(props)
{
    return(
        <div className="Table-container">
            <table className="customTable">
                <thead>
                <tr>
                    <th>S No.</th>
                    <th>{props.prayer}</th>
                    <th>Sunnah</th>
                    <th>Farad</th>
                    <th>Sunnah</th>
                    <th>Nafl</th>
                    <th>Witr</th>
                    <th>Nafl</th>
                    <th>Total Rakats</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <th>Fajr</th>
                    <td className="Muakkadah">2</td>
                    <td>2</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>4</td>
                </tr>
                <tr>
                    <th>2</th>
                    <th>Zuhr</th>
                    <td className="Muakkadah">4</td>
                    <td>4</td>
                    <td className="Muakkadah">2</td>
                    <td>2</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>12</td>
                </tr>
                <tr>
                    <th>3</th>
                    <th>Asr</th>
                    <td>4</td>
                    <td>4</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>8</td>
                </tr>
                <tr>
                    <th>4</th>
                    <th>Maghrib</th>
                    <td>Nil</td>
                    <td>3</td>
                    <td className="Muakkadah">2</td>
                    <td>2</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>7</td>
                </tr>
                <tr>
                    <th>5</th>
                    <th>Isha</th>
                    <td>4</td>
                    <td>4</td>
                    <td className="Muakkadah">2</td>
                    <td>2</td>
                    <td className="Witr">3</td>
                    <td>2</td>
                    <td>17</td>
                </tr>
                <tr>
                    <th>6</th>
                    <th>Jummah</th>
                    <td className="Muakkadah">4</td>
                    <td>2</td>
                    <td className="Muakkadah">4+2</td>
                    <td>2</td>
                    <td>Nil</td>
                    <td>Nil</td>
                    <td>14</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;