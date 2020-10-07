import React, { Component } from 'react';
import AdminLTE, { Content, Row, Col, Box } from 'adminlte-2-react'

export default function App() {
  return (
    <AdminLTE title={'hi'}>
      <Content>
        <Row>
          <Col>
            <Box>
              App Example
            </Box>
          </Col>
        </Row>
      </Content>
    </AdminLTE>

  );
}
