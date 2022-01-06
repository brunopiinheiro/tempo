import PropTypes from "prop-types";
import { formataDataExtensa } from '../../uteis/dateUteis'


function Temperatura({
    cidade,
    pais,
    temperatura,
    tempo
}) {

    return (
        <div>
            <div className="location-box">
                <div className="location">{cidade} / {pais} </div>
                <div className="date">{formataDataExtensa(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {Math.round(temperatura)}°C
                </div>
                <div className="weather">{tempo}</div>
            </div>
        </div>
    )
}

Temperatura.propTypes = { //define campos obrigatorios para o componentes
    cidade: PropTypes.string.isRequired,
    pais: PropTypes.string.isRequired,
    temperatura: PropTypes.number.isRequired,
    tempo: PropTypes.string.isRequired
}

export default Temperatura