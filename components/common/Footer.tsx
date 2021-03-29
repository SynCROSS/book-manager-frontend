import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterBlock>
      Copyright &copy; {new Date().getFullYear()} All rights Reserved Made By{' '}
      <a
        href="https://github.com/SynCROSS/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SynCROSS
      </a>
    </FooterBlock>
  );
};

export default Footer;
