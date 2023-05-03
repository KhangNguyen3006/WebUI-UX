import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div className='w-1200 d-flex flex-column'>
                <Row>

                    <Col sm={6}>
                        <div className="rectangle p-2 m-2">
                            <div className="rectangle-mini">
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="rectangle-linear-gradient p-2 m-3">
                        </div>
                    </Col>

                    <Col sm={6}>
                        <div className="pentagon-main">
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Home