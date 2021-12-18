import React from "react";
import {Col, FloatingLabel, Form, Row} from "react-bootstrap";

function SelectProvince(props){
    return(
        <Form.Group as={Col} md="6" controlId="user-birthplace-province">
            <FloatingLabel  label="Seleziona la Provicia di Nascita">
            <Form.Select aria-label="Provincia" onChange={props.seveProvince}>
                <option value="">Non Specificato</option>
                <option value="AG">Agrigento</option>
                <option value="AL">Alessandria</option>
                <option value="AN">Ancona</option>
                <option value="AO">Aosta</option>
                <option value="AR">Arezzo</option>
                <option value="AP">Ascoli Piceno</option>
                <option value="AT">Asti</option>
                <option value="AV">Avellino</option>
                <option value="BA">Bari</option>
                <option value="BT">Barletta-Andria-Trani</option>
                <option value="BL">Belluno</option>
                <option value="BN">Benevento</option>
                <option value="BG">Bergamo</option>
                <option value="BI">Biella</option>
                <option value="BO">Bologna</option>
                <option value="BZ">Bolzano</option>
                <option value="BS">Brescia</option>
                <option value="BR">Brindisi</option>
                <option value="CA">Cagliari</option>
                <option value="CL">Caltanissetta</option>
                <option value="CB">Campobasso</option>
                <option value="CI">Carbonia-iglesias</option>
                <option value="CE">Caserta</option>
                <option value="CT">Catania</option>
                <option value="CZ">Catanzaro</option>
                <option value="CH">Chieti</option>
                <option value="CO">Como</option>
                <option value="CS">Cosenza</option>
                <option value="CR">Cremona</option>
                <option value="KR">Crotone</option>
                <option value="CN">Cuneo</option>
                <option value="EN">Enna</option>
                <option value="EE">Estero</option>
                <option value="FM">Fermo</option>
                <option value="FE">Ferrara</option>
                <option value="FI">Firenze</option>
                <option value="FG">Foggia</option>
                <option value="FC">Forl&igrave;-Cesena</option>
                <option value="FR">Frosinone</option>
                <option value="GE">Genova</option>
                <option value="GO">Gorizia</option>
                <option value="GR">Grosseto</option>
                <option value="IM">Imperia</option>
                <option value="IS">Isernia</option>
                <option value="SP">La spezia</option>
                <option value="AQ">L'aquila</option>
                <option value="LT">Latina</option>
                <option value="LE">Lecce</option>
                <option value="LC">Lecco</option>
                <option value="LI">Livorno</option>
                <option value="LO">Lodi</option>
                <option value="LU">Lucca</option>
                <option value="MC">Macerata</option>
                <option value="MN">Mantova</option>
                <option value="MS">Massa-Carrara</option>
                <option value="MT">Matera</option>
                <option value="VS">Medio Campidano</option>
                <option value="ME">Messina</option>
                <option value="MI">Milano</option>
                <option value="MO">Modena</option>
                <option value="MB">Monza e della Brianza</option>
                <option value="NA">Napoli</option>
                <option value="NO">Novara</option>
                <option value="NU">Nuoro</option>
                <option value="OG">Ogliastra</option>
                <option value="OT">Olbia-Tempio</option>
                <option value="OR">Oristano</option>
                <option value="PD">Padova</option>
                <option value="PA">Palermo</option>
                <option value="PR">Parma</option>
                <option value="PV">Pavia</option>
                <option value="PG">Perugia</option>
                <option value="PU">Pesaro e Urbino</option>
                <option value="PE">Pescara</option>
                <option value="PC">Piacenza</option>
                <option value="PI">Pisa</option>
                <option value="PT">Pistoia</option>
                <option value="PN">Pordenone</option>
                <option value="PZ">Potenza</option>
                <option value="PO">Prato</option>
                <option value="RG">Ragusa</option>
                <option value="RA">Ravenna</option>
                <option value="RC">Reggio di Calabria</option>
                <option value="RE">Reggio nell'Emilia</option>
                <option value="RI">Rieti</option>
                <option value="RN">Rimini</option>
                <option value="RM">Roma</option>
                <option value="RO">Rovigo</option>
                <option value="SA">Salerno</option>
                <option value="SS">Sassari</option>
                <option value="SV">Savona</option>
                <option value="SI">Siena</option>
                <option value="SR">Siracusa</option>
                <option value="SO">Sondrio</option>
                <option value="TA">Taranto</option>
                <option value="TE">Teramo</option>
                <option value="TR">Terni</option>
                <option value="TO">Torino</option>
                <option value="TP">Trapani</option>
                <option value="TN">Trento</option>
                <option value="TV">Treviso</option>
                <option value="TS">Trieste</option>
                <option value="UD">Udine</option>
                <option value="VA">Varese</option>
                <option value="VE">Venezia</option>
                <option value="VB">Verbano-Cusio-Ossola</option>
                <option value="VC">Vercelli</option>
                <option value="VR">Verona</option>
                <option value="VV">Vibo valentia</option>
                <option value="VI">Vicenza</option>
                <option value="VT">Viterbo</option>
            </Form.Select>
        </FloatingLabel>
        </Form.Group>

    );
}

export default SelectProvince;