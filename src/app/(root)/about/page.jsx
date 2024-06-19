import AboutContents from '@/components/AboutContents';
import Container from '@/components/common/Container';
import React from 'react';

const AboutPage = () => {
    return (
        <Container className=''>
            <h3>About page</h3>
            <br />
            <AboutContents />
        </Container>
    );
};

export default AboutPage;