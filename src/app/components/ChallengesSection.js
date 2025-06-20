'use client';

import { Container } from 'react-bootstrap';
import Image from 'next/image';

const challenges = [
  {
    icon: 'https://cdn.prod.website-files.com/659fb2624108883f9bb2a031/659fd85ae5a690f41d5e7f7d_coding.svg',
    title: 'No technical skills?',
    description: 'You have no experience developing software and no code tools are too confusing or limited in their functionality'
  },
  {
    icon: 'https://cdn.prod.website-files.com/659fb2624108883f9bb2a031/659ffac75e79506731129cce_Vector.svg',
    title: 'High agency prices?',
    description: 'Sick of big agencies treating you like numbers and trying to get as much money from you as possible'
  },
  {
    icon: 'https://cdn.prod.website-files.com/659fb2624108883f9bb2a031/659ffb17f54598765266e700_Vector-1.svg',
    title: 'Slow in-house team?',
    description: 'Hiring developers, designers, product managers, QA engineer stakes months and costs way more than you can afford'
  },
  {
    icon: 'https://cdn.prod.website-files.com/659fb2624108883f9bb2a031/659ffb1822c2ff725a78d841_Vector-2.svg',
    title: 'You don\'t talk "tech"?',
    description: 'You don\'t understand technical jargon and you are not sure what are best practices, or bad coding practices'
  }
];

export default function ChallengesSection() {
  return (
    <section className="challenges-section bg-light">
      <Container>
        <div className="text-center mb-5">
          <p className="text-uppercase text-muted mb-2" style={{ letterSpacing: '0.05em', fontSize: '0.875rem' }}>
            YOU WANT TO START A SAAS STARTUP, BUT...
          </p>
          <h2 className="display-5 fw-bold mb-3">Struggling to get started?</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            Non-technical SaaS founders face numerous challenges, and we are here to help you overcome them. Do any of these sound familiar to you?
          </p>
        </div>

        <div className="challenges-grid">
          <div className="challenges-content">
            {challenges.map((challenge, index) => (
              <div key={index} className="challenge-card">
                {/* <span className="challenge-icon" role="img" aria-label={challenge.title}>
                  {challenge.icon}
                </span> */}
                <Image src={challenge.icon} alt={challenge.title} width={30} height={30} />
                <h3 className="challenge-title mt-3">{challenge.title}</h3>
                <p className="challenge-description">{challenge.description}</p>
              </div>
            ))}
          </div>
          
          <div className="challenges-illustration">
            <Image
              src="/challenges-illustration.svg"
              alt="Challenges Illustration"
              width={500}
              height={500}
              priority
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
} 