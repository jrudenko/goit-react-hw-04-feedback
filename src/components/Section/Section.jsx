import React from "react";
import PropTypes from 'prop-types';

import { Title, Container } from "./Section.styled";

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <>{children}</>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;