import React from 'react';
import Section from '../components/Layout/Section';
import Intro from '../components/Intro';
import PoisonPicker from '../components/PoisonPicker';
import ProjectList from '../components/Projects/ProjectList';
import ContactHeader from '../components/ContactHeader';
import Contact from '../components/Layout/Contact/Contact';

const Home = () => {
  return (
    <>
      <Section
        sectionNumber='01'
        bgColor='#FFFFFF'
        hasButton='yes'
        paddingTop='10%'
        paddingBottom='5%'
        numTop='8%'
      >
        <Intro />
      </Section>
      <Section
        sectionNumber='02'
        bgColor='#FA2841'
        hasButton='no'
        paddingTop='0'
        paddingBottom='0'
        numTop='0'
      >
        <PoisonPicker />
      </Section>
      <ProjectList />
      <Section
        sectionNumber='03'
        bgColor='#FFFFFF'
        hasButton='yes'
        paddingTop='3%'
        paddingBottom='5%'
        numTop='0'
      >
        <ContactHeader />
      </Section>
      <Contact />
    </>
  );
};

export default Home;
