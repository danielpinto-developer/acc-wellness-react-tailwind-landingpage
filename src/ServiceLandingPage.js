import React from "react";
import tw from "twin.macro";
import Header from "components/headers/light"; // THIS is SimpleHeader
import Footer from "components/footers/FiveColumnWithInputForm";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground";

const PageWrapper = tw.div`flex flex-col min-h-screen bg-white`;
const Main = tw.main`flex-grow`;

export default function Landing() {
  return (
    <PageWrapper>
      <Header />
      <Main>
        <FeatureStats />
      </Main>
      <Footer />
    </PageWrapper>
  );
}
