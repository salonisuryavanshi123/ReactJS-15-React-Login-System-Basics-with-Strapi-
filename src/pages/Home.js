import React from 'react'
import { Col, Row } from 'reactstrap'

export default function Home() {
  return (
    <>
        <header>Header</header>
        <main>
            <Row className='h-100'>
                <Col sm={2}>
                    <aside>Aside</aside>
                </Col>
                <Col sm={8}>
                    <section>Section</section>
                </Col>
            </Row>
        </main>
        <footer>Footer</footer>
    </>
    
  )
}
