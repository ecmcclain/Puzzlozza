import '../styles/Calendar.css'
import CalVis from  '../components/CalVis';

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Calendar = () => {
    return (
        <section id="calendar">
            <br></br><br></br><br></br><br></br>
            Testing calendar
            <Card>
                {/* <Container> */}
                    <CalVis />
                {/* </Container> */}
            </Card>
        </section>
    )
}

export default Calendar



