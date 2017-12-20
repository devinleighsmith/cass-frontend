import * as React from "react"
import {
    Grid,
    Row,
    Col
  } from 'react-bootstrap'
  import OnDutySheriffs from '../modules/sheriffs/containers/OnDutySheriffs';
  import UnassignedTaskList from '../modules/tasks/containers/UnassignedTaskList';
class Home extends React.PureComponent {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={3}>
                        <h1>Unassigned Tasks</h1>
                        <UnassignedTaskList />
                    </Col>
                </Row>
                <Row>
                    <Col lg={10}>
                        <h1>Sheriffs</h1>
                        <OnDutySheriffs />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Home;