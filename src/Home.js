import React from "react";
import styled from "styled-components";
import orange from "./orange.png";
import apple from "./apple.png";
import twitter from "./twitter.png";
import github from "./github.png";
import orangeIcon from "./orangeicon.png";

const Heading = styled.h1`
  color: #25292e;
  font-size: 3.75em;
  line-height: 1em;
  margin: 0 auto 30px auto;
  max-width: 632px;
  padding: 78px 24px 0 24px;
  text-align: center;
`;
const NavDiv = styled.div`
  display: flex;
  height: 50px;
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 24px;
  position: relative;
  top: 30px;
`;
const Orange = styled.h2`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-size: 170px 50px;
  display: block;
  float: left;
  height: 50px;
  margin-left: -9px;
  width: 170px;
  font-size: 2rem;
  color: #25292e;
`;
const SideDiv = styled.div`
  margin-top: 1.2rem;
  margin-left: 45rem;
`;
const Twitter = styled.h2`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  color: rgba(60, 66, 82, 0.8);
  display: inline-block;
  font-size: 1.25em;
  font-weight: 500;
  transition: 0.125s ease;
  will-change: transform;
`;
const Contact = styled.h2`
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    color: rgba(60, 66, 82, 0.8);
    display: inline-block;
    font-size: 1.25em;
    font-weight: 500;
    margin-left: 19px;
    position: relative;
    transition: 0.125s ease;
    will-change: transform;
}
`;
const ButtonDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  transition: 0.125s ease;
`;
const AppButton = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  animation: Orange-button 2s infinite;
  border-radius: 18px;
  cursor: text;
  height: 63px;
  margin: 0 12px 24px 12px;
  transition: 0.125s ease;
  width: 231px;
  will-change: transform;
  background: url(images/app-store-button.svg) #000000 center no-repeat;
  border-radius: 15.5px;
  height: 58px;
  width: 172px;
  color: white;
`;
const AppDiv = styled.div`
  margin-top: 0.3rem;
`;
const AppleSpan = styled.span`
  padding-top: 10rem;
  font-size: 1.3rem;
  padding-left: 1rem;
  text-align: bottom;
`;
const AppSpan = styled.span`
  padding-top: 10rem;
  font-size: 1.3rem;
  padding-left: 1rem;
  text-align: bottom;
`;
const AndroidButton = styled.div`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #4285F4;
  border-radius: 18px;
  cursor: text;
  height: 63px;
  margin: 0 12px 24px 12px;
  transition: 0.125s ease;
  width: 231px;
  will-change: transform;
`;
const OrangeImage = styled.img`
  position: absolute;
  width: 100%;
  -webkit-user-select: none;
  max-width: 100%;
  pointer-events: none;
  width: 420px;
  margin-left: -13rem;
`;
const Github = styled.h2`
  transition: 0.125s ease;
  will-change: transform;
  color: #25292e;
  display: inline-block;
  font-size: 1.25em;
  margin-bottom: 4px;
  position: relative;
`;
const FooterOrange = styled.h2`
  color: rgba(60, 66, 82, 0.4);
  font-size: 1.125em;
  font-weight: 400;
`;
const FooterDiv = styled.div`
  margin-top: 55rem;
`;
const Apple = styled.img`
  height: 2rem;
  padding-top: 0.6rem;
  padding-left: 0.3rem;

`;
const AppleDiv = styled.div`
  display: flex;
`;
const JoinSpan = styled.span`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: transparent;
  border: none;
  caret-color: #ffffff;
  color: #0000000;
  font-family: "Graphik", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  width: 231px;
  display: inherit;
  margin-top: 0.3rem;
`;
const PlaySpan = styled.span`
  caret-color: #a42fff;
  color: #ffffff;
  font-family: "Graphik", "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  width: 231px;
  display: inherit;
`;
const TwitterImg = styled.img`
  width: 2rem;
  padding-top: 0.3rem;
  position: absolute;
  right: 4rem;
  top: -0.5rem;
`;
const openGithub = (url) => {
  const win = window.open("https://github.com/Orange-Wallet", '_blank');
  if (win != null) {
    win.focus();
  }
}
const openContact = (url) => {
  const win = window.open("https://t.me/abhimanyu121", '_blank');
  if (win != null) {
    win.focus();
  }
}
const openPlayStore = (url) => {
  const win = window.open("https://play.google.com/store/apps/details?id=org.orange.wallet", '_blank');
  if (win != null) {
    win.focus();
  }
}
const TwitterSpan = styled.span``;
function Home() {
  return (
    <div className="Home">
      <NavDiv>

        <Orange>Orange Wallet</Orange>
        <SideDiv>
          <Contact onClick={openContact}>contact</Contact>
        </SideDiv>
      </NavDiv>
      <Heading>Welcome to faster Ethereum</Heading>
      <ButtonDiv>
        <AppButton>
          <AppleDiv>
            <Apple src={apple} />
            <AppDiv>
              <AppleSpan>Coming<br /></AppleSpan>
              <AppleSpan>soon</AppleSpan>
            </AppDiv>
          </AppleDiv>
        </AppButton>
        <AndroidButton onClick={openPlayStore}>
          <JoinSpan>Download on </JoinSpan>
          <PlaySpan>PlayStore</PlaySpan>
        </AndroidButton>
      </ButtonDiv>
      <OrangeImage src={orange} />
      <FooterDiv>
        <Github
          onClick={openGithub}>
          <TwitterSpan>
            <TwitterImg src={github} />
          </TwitterSpan>
          Github
        </Github>
        <FooterOrange></FooterOrange>
      </FooterDiv>
    </div >
  );
}

export default Home;
