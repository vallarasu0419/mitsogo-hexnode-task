import React from "react";
import styled from "styled-components";
import CountryDropdown from "../../Components/CountryDropdown";

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
  margin-top: 25px;
`;

const InnerContainer = styled.div`
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: block;
    justify-items: center;
  }
`;

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
    justify-items: center;
  }
`;

const StyledLink = styled.a`
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;
  color: #556575;
  cursor: pointer;
  transition: color 0.2s ease;
  font-weight: 500;
  &:hover {
    color: black;
  }
`;

const FooterText = styled.p`
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;
  color: gray;
  margin-top: 8px;
`;

const BottomFooter = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <ResponsiveContainer>
          <CountryDropdown hovered={true} direction={"up"} />
          <div>
            <span>
              <StyledLink
                href="https://www.hexnode.com/legal/terms-of-use/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </StyledLink>{" "}
              -{" "}
              <StyledLink
                href="https://www.hexnode.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy
              </StyledLink>{" "}
              -{" "}
              <StyledLink
                href="https://www.hexnode.com/legal/cookies-policy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookies
              </StyledLink>
            </span>
          </div>
        </ResponsiveContainer>

        <FooterText>
          Copyright © 2024 Mitsogo Inc. All Rights Reserved.
        </FooterText>
      </InnerContainer>
    </FooterContainer>
  );
};

export default BottomFooter;
