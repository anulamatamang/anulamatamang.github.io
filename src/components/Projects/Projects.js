import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Slider from '../Slider/Slider';
import styles from './Projects.module.css';

const Projects = () => {
  const openModal = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
  };

  const closeModal = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  };
  return (
    <Section nopadding id='projects'>
      <div id='myModal' class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeModal}>
            &times;
          </span>
          <Slider />
        </div>
      </div>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        <BlogCard>
          <Img src={'images/kidconnect/kidconnect1.png'} />
          <TitleContent>
            <HeaderThree title>KidConnect</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            KidConnect is a social networking application that I developed for
            the HCI lab at Boise State University (BSU). It was designed and
            developed to be used by children (ages 7 - 12). Some of the major
            functionalites of KidConnect are: creating, commenting on and
            sharing of post, friending, direct messaging and group creation. It
            laid a groundwork for further research at BSU to examine how
            children interact and share information with their peers within
            social media. The live application is used for collecting data from
            child subjects within lab settings due to which I am not allowed to
            show the working demo of the application. Please refer to the slider
            below to view some screenshots from KidConnect.
          </CardInfo>
          <div>
            <TitleContent
              style={{ marginTop: '10px', textDecoration: 'underline' }}
            >
              Technologies
            </TitleContent>
            <TagList>
              <Tag key={1}>React</Tag>
              <Tag key={2}>Firebase</Tag>
              <Tag key={3}>Google Analytics</Tag>
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks>Code</ExternalLinks>
            <ExternalLinks onClick={openModal}>Slider</ExternalLinks>
          </UtilityList>
        </BlogCard>

        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => (
            <BlogCard key={id}>
              <Img src={image} />
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent
                  style={{ marginTop: '10px', textDecoration: 'underline' }}
                >
                  Technologies
                </TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={source}>Code</ExternalLinks>
                <ExternalLinks href={visit}>Live</ExternalLinks>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
