import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import logo from "images/logo.svg";
import logo2 from "images/logo2.svg";

// ✅ This is your banner with fixed height + full width background
const Container = styled.div`
  ${tw`relative w-full overflow-hidden`}
  height: 200px;
`;

// ✅ Full-width background
const BannerImage = styled.img`
  ${tw`w-full h-full`}
  object-fit: cover;
  display: block;
`;

// ✅ Centered logo on top
const CenteredLogo = styled.img`
  ${tw`absolute left-1/2 top-1/2`}
  transform: translate(-50%, -50%);
  width: 25rem;
  height: auto;

  @media (min-width: 640px) {
    width: 30rem;
  }
`;

export default function Light() {
  return (
    <Container>
      <BannerImage src={logo2} alt="ACC Wellness Banner" />
      <CenteredLogo src={logo} alt="ACC Wellness Logo" />
    </Container>
  );
}
