import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography";

// ✅ NO absolute, NO flex-grow, NO overlap
const Container = tw.div`w-full bg-blue-900 text-gray-100 px-4 flex flex-col flex-grow min-h-0`;
const Content = tw.div`max-w-screen-xl w-full mx-auto flex-grow flex flex-col justify-center items-center py-24 md:py-32`;
const HeadingContainer = tw.div`text-center`;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100`;
const Description = tw(
  SectionDescription
)`text-gray-400 max-w-screen-md mx-auto`;

const AdditionalText = tw.div`mt-12 text-center text-xl text-gray-300 max-w-screen-md`;

export default ({
  subheading = "",
  heading = "Site Under Maintenance",
  description = "We're making improvements to serve you better.",
  additionalText = (
    <>
      Our team is currently performing scheduled updates. <br />
      We’ll be back shortly — thank you for your patience and trust.
    </>
  ),
}) => {
  return (
    <Container>
      <Content>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <AdditionalText>{additionalText}</AdditionalText>
      </Content>
    </Container>
  );
};
