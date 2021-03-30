import styled from 'styled-components';

const FooterBlock = styled.footer`
  width: 100%;
  padding: 0.5rem;

  font-size: 14px;
  background-color: #f8f8f8;
  color: #999;
`;

const Footer = () => {
  return (
    <FooterBlock>
      Copyright &copy; {new Date().getFullYear()} Made By{' '}
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
