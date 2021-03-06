import { Container, Col } from '@nextui-org/react';

export const Layout =({ children })=> {
  return (
    <Container
      xs
      justify="center"
      alignItems="center"
      css={{ pt: 30 }}
    >
      <Col justify="center" align="center">
        {children}
      </Col>
    </Container>
  );
}
