import React from "react"

import { StyledAboutUs, Title, Block, Position, Avatars } from "./styled"
import valeriiNegruSrc from "../../img/about-us/Valerii_Negru.png"
import arturCurnicovSrc from "../../img/about-us/Artur_Curnicov.png"
import vadimDonesSrc from "../../img/about-us/Vadim_Dones.png"
import corinaBugaSrc from "../../img/about-us/Corina_Buga.png"
import ionTurcanuSrc from "../../img/about-us/Ion_Turcanu.png"
import dimaHinevSrc from "../../img/about-us/Dima_Hinev.png"
import dariaBalutselSrc from "../../img/about-us/Daria_Balutsel.png"
import alexeiCasianSrc from "../../img/about-us/Alexei_Casian.png"
import danyloZadoinovSrc from "../../img/about-us/Danylo_Zadoinov.png"
import vladimirOsadciucSrc from "../../img/about-us/Vladimir_Osadciuc.png"
import mariaElenaDobrovolschiSrc from "../../img/about-us/Maria_Elena_Dobrovolschi.png"
import alexandruBulatSrc from "../../img/about-us/Alexandru_Bulat.png"
import dumitruCondreaSrc from "../../img/about-us/Dumitru_Condrea.png"
import grigoreBarbaneagraSrc from "../../img/about-us/Grigore_Barbaneagra.png"
import vladimirScutelnicSrc from "../../img/about-us/Vladimir_Scutelnic.png"
import vladimirGurovSrc from "../../img/about-us/Vladimir_Gurov.png"
import marinaCudalbSrc from "../../img/about-us/Marina_Cudalb.png"

import Avatar from "../../components/avatar"

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Title id="about-us-title">About Us</Title>
      <Block id="about-us-block-scrum-master">
        <Position>Scrum master</Position>
        <Avatars id="about-us-team-leads-avatars">
          <Avatar imgSrc={valeriiNegruSrc}>Valerii Negru</Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-team-leads">
        <Position>Team Leads</Position>
        <Avatars id="about-us-team-leads-avatars">
          <Avatar imgSrc={arturCurnicovSrc}>Artur Curnicov</Avatar>
          <Avatar imgSrc={vadimDonesSrc}>Vadim Dones</Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-product-owner">
        <Position>Product Owner</Position>
        <Avatars>
          <Avatar imgSrc={corinaBugaSrc}>Corina Buga</Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-product-owner">
        <Position>AM Team</Position>
        <Avatars>
          <Avatar imgSrc={ionTurcanuSrc}>Ion S Turcanu</Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-product-owner">
        <Position>UI Team</Position>
        <Avatars>
          <Avatar imgSrc={dimaHinevSrc}>Dima Hinev</Avatar>
          <Avatar imgSrc={dariaBalutselSrc}>Daria Balutsel</Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-product-owner">
        <Position>Backend Team</Position>
        <Avatars>
          <Avatar imgSrc={alexeiCasianSrc}>Alexei Casian</Avatar>
          <Avatar imgSrc={danyloZadoinovSrc}>Danylo Zadoinov</Avatar>
          <Avatar imgSrc={vladimirOsadciucSrc}>Vladimir Osadciuc </Avatar>
          <Avatar imgSrc={mariaElenaDobrovolschiSrc}>
            Maria Elena Dobrovolschi{" "}
          </Avatar>
        </Avatars>
      </Block>
      <Block id="about-us-block-product-owner">
        <Position>Testing Team</Position>
        <Avatars>
          <Avatar imgSrc={alexandruBulatSrc}>Alexandru Bulat</Avatar>
          <Avatar imgSrc={dumitruCondreaSrc}>Dumitru Condrea</Avatar>
          <Avatar imgSrc={grigoreBarbaneagraSrc}>Grigore Barbaneagra </Avatar>
          <Avatar imgSrc={vladimirScutelnicSrc}>Vladimir Scutelnic</Avatar>
          <Avatar imgSrc={vladimirGurovSrc}>Vladimir Gurov</Avatar>
          <Avatar imgSrc={marinaCudalbSrc}>Marina Cudalb</Avatar>
        </Avatars>
      </Block>
    </StyledAboutUs>
  )
}

export default AboutUs
