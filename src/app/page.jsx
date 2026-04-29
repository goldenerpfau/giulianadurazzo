'use client';

import { useEffect } from 'react';

const experiences = [
  {
    company: 'DECO',
    role: 'Assistente de Marketing & Social Media',
    period: 'São Paulo · 2025',
    text: 'Planejou, produziu e editou conteúdos para Instagram e TikTok, apoiando campanhas digitais, ativações com influenciadores, shootings, criativos para mídia paga e entregas alinhadas ao posicionamento da marca.',
    tags: ['Instagram', 'TikTok', 'Influenciadores', 'Mídia paga']
  },
  {
    company: 'Attivo Group',
    role: 'Estagiária de Marketing de Eventos',
    period: 'Ago 2024 — Dez 2024',
    text: 'Apoiou o planejamento e a execução de eventos proprietários para cinco marcas de gastronomia premium, com interface de fornecedores, propostas comerciais, acompanhamento de budget, logística e relacionamento pós-evento.',
    tags: ['Eventos premium', 'Budget', 'Fornecedores', 'Experiência']
  },
  {
    company: 'O Bem da Moda',
    role: 'Organizadora de Eventos & Comunicação',
    period: '2022 — 2023',
    text: 'Estruturou a comunicação e a operação de um evento beneficente de moda, coordenando parceiros, influenciadores, marcas, ambientação, campanha promocional, BDM Talks e relatório de performance.',
    tags: ['R$ 262.000 arrecadados', 'GRAACC', 'Moda', 'Lifestyle']
  },
  {
    company: 'BoatNet',
    role: 'Consultora Freelancer em Branding',
    period: 'Projeto independente',
    text: 'Desenvolveu identidade visual, posicionamento estratégico, tom de voz, narrativa institucional e diretrizes de comunicação para aplicação em canais digitais e apresentações comerciais.',
    tags: ['Branding', 'Identidade', 'Posicionamento', 'Storytelling']
  }
];

const projects = [
  {
    title: 'Conteúdo Digital',
    kicker: 'Social media com direção estratégica',
    text: 'Planejamento editorial, roteiros, formatos nativos, tendências e narrativa visual para Instagram e TikTok.'
  },
  {
    title: 'Eventos Premium',
    kicker: 'Experiência pensada do convite ao pós-evento',
    text: 'Produção, operação, fornecedores, ambientação, logística, ativações e experiência do consumidor.'
  },
  {
    title: 'Branding & Posicionamento',
    kicker: 'Marcas com linguagem, estética e intenção',
    text: 'Tom de voz, identidade, storytelling, narrativa institucional e aplicação estratégica em canais digitais.'
  }
];

const skills = [
  'Planejamento de Conteúdo', 'Social Media', 'Instagram', 'TikTok', 'Produção de Eventos',
  'Ativações de Marca', 'Gestão de Fornecedores', 'Influenciadores', 'Branding',
  'Mídia Paga', 'Storytelling', 'Relatórios Pós-Evento', 'Excel / Google Sheets', 'Budget', 'Performance'
];

const metrics = [
  ['R$ 262 mil', 'arrecadados para o GRAACC'],
  ['5 marcas', 'premium em eventos proprietários'],
  ['360º', 'conteúdo, evento, marca e experiência'],
  ['ESPM', 'formação em Publicidade e Propaganda']
];

const videos = [
  { number: 1, label: 'Conteúdo DECO' },
  { number: 2, label: 'Evento e bastidores' },
  { number: 3, label: 'Produção em campo' },
  { number: 4, label: 'Experiência premium' },
  { number: 5, label: 'Branding em movimento' }
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="navbar" aria-label="Navegação principal">
        <a href="#home" className="brand" aria-label="Giuliana Durazzo">GD</a>
        <div className="navLinks">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiências</a>
          <a href="#projects">Projetos</a>
          <a href="#videos">Vídeos</a>
        </div>
        <a className="navCta" href="mailto:giu190.durazzo@gmail.com">Contato</a>
      </nav>

      <section id="home" className="hero section">
        <div className="heroGrid" data-reveal>
          <div className="heroCopy">
            <p className="eyebrow">São Paulo · Marketing · Social Media · Eventos · Branding</p>
            <h1>Giuliana Durazzo</h1>
            <p className="heroLead">Portfólio editorial para marcas, conteúdos e experiências com estética premium, leitura cultural e execução estratégica.</p>
            <div className="heroActions">
              <a href="#projects" className="button primary">Ver portfólio</a>
              <a href="https://linkedin.com/in/giuliana-durazzo-370008227" className="button secondary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="heroPanel" aria-label="Resumo profissional">
            <span>Formada pela ESPM</span>
            <strong>Marketing, social media, eventos e branding para marcas com ambição estética.</strong>
            <p>Experiência com marcas premium, influenciadores, conteúdo digital, eventos, ativações, experiência do consumidor e narrativa de marca.</p>
          </aside>
        </div>
      </section>

      <section id="about" className="section about" data-reveal>
        <p className="sectionLabel">Sobre</p>
        <div className="split">
          <h2>Comunicação com repertório, direção e entrega.</h2>
          <p>Atuação entre estratégia e execução: transformar posicionamento em conteúdo, campanha, evento e experiência. O foco é construir presença de marca com clareza, consistência visual e impacto percebido.</p>
        </div>
      </section>

      <section className="section metrics" data-reveal>
        {metrics.map(([value, label]) => (
          <div className="metric" key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="experience" className="section" data-reveal>
        <div className="sectionHeader">
          <p className="sectionLabel">Experiências</p>
          <h2>Trajetória conectada a marca, conteúdo e experiência.</h2>
        </div>
        <div className="experienceGrid">
          {experiences.map((item) => (
            <article className="experienceCard" key={item.company}>
              <div>
                <p>{item.period}</p>
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
              </div>
              <p className="cardText">{item.text}</p>
              <div className="tagRow">
                {item.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects" data-reveal>
        <div className="sectionHeader center">
          <p className="sectionLabel">Projetos</p>
          <h2>Três frentes. Uma mesma régua: estratégia, estética e execução.</h2>
        </div>
        <div className="projectGrid">
          {projects.map(project => (
            <article className="projectCard" key={project.title}>
              <span>{project.kicker}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="videos" className="section videos" data-reveal>
        <div className="sectionHeader">
          <p className="sectionLabel">Vídeos</p>
          <h2>Conteúdos em formato limpo, visual e direto.</h2>
        </div>
        <div className="videoGrid">
          {videos.map(video => (
            <article className="videoCard" key={video.number}>
              <video
                src={`/videos/video-${video.number}.mp4`}
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload noplaybackrate"
                aria-label={video.label}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" data-reveal>
        <p className="sectionLabel">Skills</p>
        <div className="skillsWrap">
          {skills.map(skill => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="section differentials" data-reveal>
        <div className="sectionHeader center">
          <p className="sectionLabel">Diferenciais</p>
          <h2>Perfil híbrido: sensibilidade estética com disciplina de execução.</h2>
        </div>
        <div className="diffGrid">
          <article><strong>01</strong><h3>Olhar premium</h3><p>Leitura de marca, estética, cultura e comportamento para criar presença com sofisticação.</p></article>
          <article><strong>02</strong><h3>Execução 360º</h3><p>Conteúdo, fornecedores, produção, budget, influenciadores, evento e relatório pós-ação.</p></article>
          <article><strong>03</strong><h3>Visão estratégica</h3><p>Construção de narrativa com foco em objetivo de marca, consistência e percepção de valor.</p></article>
        </div>
      </section>

      <section id="contact" className="section finalCta" data-reveal>
        <p className="sectionLabel">Contato</p>
        <h2>Vamos construir a próxima experiência de marca.</h2>
        <div className="contactLinks">
          <a href="https://linkedin.com/in/giuliana-durazzo-370008227" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://wa.me/5511943949478" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="mailto:giu190.durazzo@gmail.com">Email</a>
        </div>
      </section>
    </main>
  );
}
