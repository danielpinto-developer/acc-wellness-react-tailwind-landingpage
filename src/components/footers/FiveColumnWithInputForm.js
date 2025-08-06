import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

// ✅ Removed negative margins and added full width
const Container = tw.div`w-full bg-gray-100 text-gray-700 py-10`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

const CopywrightNotice = tw.p`mt-8 text-center text-sm sm:text-base font-medium text-gray-500`;

export default () => {
  return (
    <Container>
      <Content>
        <CopywrightNotice>
          &copy; {new Date().getFullYear()} ACC Wellness. All Rights Reserved.
        </CopywrightNotice>
      </Content>
    </Container>
  );
};
