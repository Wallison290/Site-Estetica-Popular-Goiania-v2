"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, string>>;
  }
}

const clinicName = "Estética Popular de Goiânia";
const whatsapp = "5562982911965";

function waLink(message: string, campaign: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}&utm_source=site&utm_medium=botao&utm_campaign=${campaign}`;
}

const links = {
  hero: waLink(
    `Olá! Vim pelo site da ${clinicName} e gostaria de agendar minha avaliação.`,
    "hero",
  ),
  treatments: waLink(
    `Olá! Vim pelo site da ${clinicName}, vi os tratamentos e quero saber qual é o mais indicado para mim.`,
    "tratamentos",
  ),
  differentials: waLink(
    `Olá! Vim pelo site da ${clinicName} e gostaria de conversar com a equipe sobre os tratamentos.`,
    "diferenciais",
  ),
  results: waLink(
    `Olá! Vim pelo site da ${clinicName}, vi os resultados e gostaria de avaliar o meu caso.`,
    "resultados",
  ),
  testimonials: waLink(
    `Olá! Vim pelo site da ${clinicName} e quero tirar uma dúvida antes de agendar.`,
    "depoimentos",
  ),
  schedule: waLink(
    `Olá! Vim pelo site da ${clinicName} e quero agendar minha avaliação. Quais horários estão disponíveis?`,
    "agendamento",
  ),
  contact: waLink(
    `Olá! Vim pelo site da ${clinicName} e gostaria de falar com a equipe.`,
    "contato",
  ),
  instagram: "https://www.instagram.com/centrodeesteticapopular/",
  phone: "tel:+5562982911965",
  map: "https://www.google.com/maps/search/?api=1&query=Av.%2085%2C%20499%2C%20Setor%20Sul%2C%20Goi%C3%A2nia%20GO%2C%2074080-010",
};

const treatments = [
  {
    number: "01",
    title: "Rejuvenescimento facial",
    description:
      "Tratamentos que estimulam a renovação da pele e valorizam sua beleza natural.",
    items: [
      "Limpeza de pele",
      "Skinbooster",
      "Bioestimuladores de colágeno",
      "Toxina botulínica",
    ],
    interest: "facial",
  },
  {
    number: "02",
    title: "Estética corporal",
    description:
      "Protocolos voltados à firmeza, ao contorno corporal e ao seu bem-estar.",
    items: [
      "Corrente russa",
      "Tratamentos para flacidez",
      "Eletroestimulação muscular",
      "Protocolos personalizados",
    ],
    interest: "corporal",
  },
  {
    number: "03",
    title: "Cuidados especializados",
    description:
      "Procedimentos direcionados a necessidades específicas, realizados após avaliação.",
    items: [
      "Tratamento de vasinhos (PEIM)",
      "Micropigmentação labial",
      "Ventosaterapia",
      "Cuidados relacionados ao lipedema",
    ],
    interest: "especializados",
  },
  {
    number: "04",
    title: "Movimento e qualidade de vida",
    description:
      "Práticas que ajudam a desenvolver força, mobilidade e consciência corporal.",
    items: [
      "Pilates nos aparelhos",
      "Fortalecimento muscular",
      "Mobilidade e flexibilidade",
      "Acompanhamento individualizado",
    ],
    interest: "pilates",
  },
];

const reviews = [
  {
    name: "FJ Transportes",
    text: "Moro em MT e duas vezes ao ano vou a Goiânia especificamente para ser atendida pela Adriana. Ótima profissional e trabalho excelente.",
  },
  {
    name: "Nathalie Alves Marques Quito",
    text: "Minhas experiências na clínica são maravilhosas. Estou na terceira aplicação de PEIM e o resultado está incrível.",
  },
  {
    name: "Ana Claudia Lopes",
    text: "A Estética Popular é referência em atendimento e qualidade. Não consigo deixar a clínica.",
  },
  {
    name: "Elisangela Caetano",
    text: "Atendimento excelente, lugar aconchegante, produtos de qualidade, preço acessível e profissionalismo.",
  },
  {
    name: "Ludmila Godoi",
    text: "Excelente atendimento das profissionais, estrutura superconfortável e procedimentos de muita qualidade.",
  },
  {
    name: "Adriana Soares da Silva",
    text: "Excelente prestação de serviço, preço acessível e qualidade no atendimento.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: clinicName,
  image:
    "https://estetica-popular-goiania.vercel.app/assets/images/foto-hero-adriana.png",
  telephone: "+55 62 98291-1965",
  url: "https://estetica-popular-goiania.vercel.app",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. 85, nº 499, Quadra F-24, Lote 63, Setor Sul",
    addressLocality: "Goiânia",
    addressRegion: "GO",
    postalCode: "74080-010",
    addressCountry: "BR",
  },
  sameAs: [links.instagram],
  openingHours: [
    "Mo 08:00-18:00",
    "Tu-We 09:00-18:00",
    "Th 09:00-19:00",
    "Fr 09:00-16:00",
  ],
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27.3 4.6A15.4 15.4 0 0 0 3.1 23.2L1 31l8-2.1a15.4 15.4 0 0 0 7.4 1.9h.1A15.4 15.4 0 0 0 27.3 4.6Zm-10.8 23.6h-.1a12.7 12.7 0 0 1-6.5-1.8l-.5-.3-4.7 1.2L6 22.8l-.3-.5a12.7 12.7 0 1 1 10.8 5.9Zm7-9.5c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2l-1.2 1.5c-.2.3-.5.3-.9.1a10.3 10.3 0 0 1-3-1.8 11.6 11.6 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.7c.1-.2.1-.5 0-.7l-1.2-3c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.5 7.1 6.3 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.9.3-.9.3-1.7.2-1.9-.1-.2-.5-.3-.9-.5Z" />
    </svg>
  );
}

function SectionWave({ color = "#ffffff" }: { color?: string }) {
  return (
    <svg
      className="section-wave"
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,110 480,8 720,32 C960,56 1200,104 1440,56 L1440,110 L0,110 Z"
        fill={color}
      />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    let observer: IntersectionObserver | undefined;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      revealItems.forEach((item) => observer?.observe(item));
    }

    const trackClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-track]",
      );
      if (!target) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: target.dataset.track || "click_site",
        tratamento_interesse: target.dataset.interest || "",
      });
    };

    document.addEventListener("click", trackClick);
    return () => {
      observer?.disconnect();
      document.removeEventListener("click", trackClick);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span>Estética Popular</span>
          <small>Goiânia</small>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#tratamentos">Tratamentos</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#resultados">Resultados</a>
          <a href="#adriana-bezerra">Adriana</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className="button button-primary header-cta"
          href={links.schedule}
          target="_blank"
          rel="noreferrer"
          data-track="click_whatsapp_header"
        >
          Agendar avaliação
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Navegação mobile">
            <a href="#tratamentos">Tratamentos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#resultados">Resultados</a>
            <a href="#adriana-bezerra">Adriana</a>
            <a href="#depoimentos">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-pattern" aria-hidden="true" />
          <img
            className="hero-image"
            src="/assets/images/foto-hero-adriana.png"
            alt="Adriana Bezerra, responsável pela Estética Popular de Goiânia"
            width="783"
            height="1376"
            fetchPriority="high"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Estética regenerativa em Goiânia</p>
            <h1>
              Cuidar de você,
              <em>respeitando quem você é.</em>
            </h1>
            <p className="hero-lead">
              Tratamentos estéticos e bem-estar com escuta, naturalidade e
              protocolos pensados para a sua individualidade.
            </p>
            <div className="hero-actions">
              <a
                className="button button-accent"
                href={links.hero}
                target="_blank"
                rel="noreferrer"
                data-track="click_whatsapp_hero"
              >
                Falar no WhatsApp
                <ArrowIcon />
              </a>
              <a className="text-link text-link-light" href="#tratamentos">
                Ver tratamentos ↓
              </a>
            </div>
            <p className="microcopy microcopy-light">
              Atendimento presencial com agendamento prévio.
            </p>
            <div className="hero-proof">
              <div>
                <strong>Acessível</strong>
                <span>Cuidado de qualidade ao seu alcance</span>
              </div>
              <div>
                <strong>Natural</strong>
                <span>Resultados que respeitam seus traços</span>
              </div>
              <div>
                <strong>Acolhedor</strong>
                <span>Um espaço seguro para você</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section treatments-section" id="tratamentos">
          <div className="container">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Tratamentos</p>
                <h2>
                  Cuidado completo para
                  <span> rosto, corpo e bem-estar.</span>
                </h2>
              </div>
              <p>
                Cada plano começa com uma conversa. A equipe entende seus
                objetivos e orienta os cuidados mais adequados para o seu
                momento.
              </p>
            </div>

            <div className="treatment-grid">
              {treatments.map((treatment) => (
                <article
                  className="treatment-card"
                  key={treatment.number}
                  data-reveal
                >
                  <span className="card-number">{treatment.number}</span>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.description}</p>
                  <ul>
                    {treatment.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    className="card-link"
                    href={links.treatments}
                    target="_blank"
                    rel="noreferrer"
                    data-track="click_whatsapp_tratamentos"
                    data-interest={treatment.interest}
                  >
                    Quero saber mais <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>

            <div className="treatment-gallery" data-reveal>
              <figure>
                <img
                  src="/assets/images/foto-botox-adriana.png"
                  alt="Adriana apresentando uma explicação sobre toxina botulínica"
                  width="390"
                  height="486"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Informação antes de tudo</strong>
                  <span>Entenda cada etapa do seu cuidado.</span>
                </figcaption>
              </figure>
              <div className="treatment-gallery-copy">
                <p className="eyebrow">Avaliação individual</p>
                <h3>O procedimento certo começa pela escuta.</h3>
                <p>
                  Não trabalhamos com protocolos prontos. Conversamos sobre o
                  que você deseja, avaliamos suas necessidades e explicamos as
                  possibilidades com clareza.
                </p>
              </div>
              <figure>
                <img
                  src="/assets/images/foto-microvasos-adriana.png"
                  alt="Procedimento especializado para tratamento de microvasos"
                  width="846"
                  height="1264"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Cuidado especializado</strong>
                  <span>Técnica, atenção e acompanhamento.</span>
                </figcaption>
              </figure>
            </div>

            <div className="section-cta" data-reveal>
              <a
                className="button button-primary"
                href={links.treatments}
                target="_blank"
                rel="noreferrer"
                data-track="click_whatsapp_tratamentos"
              >
                Encontrar meu tratamento
              </a>
              <p>Conte o que você busca e receba uma orientação inicial.</p>
            </div>
          </div>
        </section>

        <section className="image-band" id="diferenciais">
          <img
            className="image-band-bg"
            src="/assets/images/foto-procedimento-adriana.png"
            alt=""
            aria-hidden="true"
            width="768"
            height="1373"
            loading="lazy"
          />
          <div className="image-band-overlay" aria-hidden="true" />
          <div className="container image-band-content">
            <div className="section-heading section-heading-light" data-reveal>
              <div>
                <p className="eyebrow eyebrow-light">Por que escolher a clínica</p>
                <h2>
                  Técnica e acolhimento
                  <span> em cada detalhe.</span>
                </h2>
              </div>
              <p>
                Uma experiência de cuidado acessível, respeitosa e construída
                para que você se sinta segura em todas as etapas.
              </p>
            </div>
            <div className="differential-grid">
              <article className="differential-item" data-reveal>
                <span>01</span>
                <h3>Qualidade acessível</h3>
                <p>Cuidado responsável sem abrir mão da qualidade.</p>
              </article>
              <article className="differential-item" data-reveal>
                <span>02</span>
                <h3>Naturalidade</h3>
                <p>Protocolos que respeitam sua expressão e individualidade.</p>
              </article>
              <article className="differential-item" data-reveal>
                <span>03</span>
                <h3>Atendimento acolhedor</h3>
                <p>Escuta atenta em um ambiente confortável e próximo.</p>
              </article>
              <article className="differential-item" data-reveal>
                <span>04</span>
                <h3>Espaço inclusivo</h3>
                <p>Respeito e segurança para todas as pessoas.</p>
              </article>
            </div>
            <a
              className="button button-accent"
              href={links.differentials}
              target="_blank"
              rel="noreferrer"
              data-track="click_whatsapp_diferenciais"
            >
              Conversar com a equipe
            </a>
          </div>
          <SectionWave />
        </section>

        <section className="section results-section" id="resultados">
          <div className="container results-layout">
            <div className="results-visual" data-reveal>
              <div className="results-collage">
                <img
                  className="result-main"
                  src="/assets/images/foto-estetica-regenerativa-adriana.png"
                  alt="Evolução de pele após protocolo de estética regenerativa"
                  width="603"
                  height="606"
                  loading="lazy"
                />
                <img
                  className="result-secondary"
                  src="/assets/images/foto-resultado-adriana.png"
                  alt="Exemplos de evolução acompanhada em tratamentos estéticos"
                  width="600"
                  height="603"
                  loading="lazy"
                />
              </div>
              <div className="results-badge">
                <strong>Casos reais</strong>
                <span>com autorização de imagem</span>
              </div>
            </div>
            <div className="results-copy" data-reveal>
              <p className="eyebrow">Resultados e evolução</p>
              <h2>
                Um plano que acompanha
                <span> a sua jornada.</span>
              </h2>
              <p className="lead">
                Bons resultados nascem da combinação entre avaliação,
                expectativas realistas e acompanhamento próximo.
              </p>
              <div className="result-steps">
                <div>
                  <span>01</span>
                  <p>
                    <strong>Avaliação</strong>
                    Entendemos seu momento, sua rotina e seus objetivos.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <p>
                    <strong>Plano individual</strong>
                    Definimos um protocolo coerente com suas necessidades.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <p>
                    <strong>Evolução acompanhada</strong>
                    Orientamos os cuidados e acompanhamos cada etapa.
                  </p>
                </div>
              </div>
              <p className="result-note">
                Casos reais e comparativos de evolução são apresentados com
                autorização. Os resultados variam conforme cada pessoa.
              </p>
              <a
                className="button button-primary"
                href={links.results}
                target="_blank"
                rel="noreferrer"
                data-track="click_whatsapp_resultados"
              >
                Quero avaliar meu caso
              </a>
            </div>
          </div>
        </section>

        <section className="section professional-section" id="adriana-bezerra">
          <div className="container professional-layout">
            <div className="professional-copy" data-reveal>
              <p className="eyebrow">Quem cuida de você</p>
              <h2>
                Adriana
                <span> Bezerra.</span>
              </h2>
              <p className="professional-role">
                Responsável pela Estética Popular de Goiânia
              </p>
              <p>
                Adriana construiu uma proposta de cuidado que une estética,
                bem-estar e acesso. Seu atendimento é reconhecido pela
                proximidade, pelo olhar individual e pela busca de resultados
                naturais.
              </p>
              <p>
                A confiança atravessa distâncias: há clientes que viajam de
                outros estados para serem atendidas por ela. Cada encontro
                começa com escuta e informação clara, para que você participe
                das decisões sobre o seu cuidado.
              </p>
              <a
                className="text-link"
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Acompanhar no Instagram <ArrowIcon />
              </a>
            </div>
            <figure className="professional-figure" data-reveal>
              <img
                src="/assets/images/foto-quem-e-adriana.png"
                alt="Retrato profissional de Adriana Bezerra"
                width="768"
                height="1368"
                loading="lazy"
              />
              <figcaption>
                <strong>Escuta, naturalidade e presença.</strong>
                <span>Um cuidado pensado para você.</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section experience-section" id="depoimentos">
          <div className="container">
            <div className="experience-intro">
              <div className="experience-feature" data-reveal>
                <span className="quote-mark">“</span>
                <p className="eyebrow">Experiência de quem já veio</p>
                <h2>
                  Atendimento que faz
                  <span> você querer voltar.</span>
                </h2>
                <p>
                  As avaliações destacam a qualidade dos procedimentos, o
                  ambiente acolhedor e a atenção da equipe.
                </p>
                <a
                  className="button button-outline"
                  href={links.testimonials}
                  target="_blank"
                  rel="noreferrer"
                  data-track="click_whatsapp_depoimentos"
                >
                  Tirar uma dúvida
                </a>
              </div>
              <figure className="team-card" data-reveal>
                <img
                  src="/assets/images/foto-equipe-adriana.png"
                  alt="Equipe da Estética Popular de Goiânia"
                  width="293"
                  height="390"
                  loading="lazy"
                />
                <figcaption>
                  <strong>Uma equipe pronta para acolher você.</strong>
                  <span>Atendimento próximo, respeitoso e sem pressa.</span>
                </figcaption>
              </figure>
            </div>
            <div className="reviews-grid" aria-label="Avaliações do Google">
              {reviews.map((review) => (
                <article className="review-card" key={review.name} data-reveal>
                  <div className="stars" aria-label="5 de 5 estrelas">
                    ★★★★★
                  </div>
                  <blockquote>“{review.text}”</blockquote>
                  <p>{review.name}</p>
                  <span>Avaliação no Google</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="schedule-section" id="agendamento">
          <div className="schedule-shape schedule-shape-one" aria-hidden="true" />
          <div className="schedule-shape schedule-shape-two" aria-hidden="true" />
          <div className="container schedule-layout">
            <div className="schedule-copy" data-reveal>
              <p className="eyebrow eyebrow-light">Seu próximo passo</p>
              <h2>
                Agendar é simples.
                <span> Comece por uma conversa.</span>
              </h2>
              <p>
                Nossa equipe orienta você com clareza e encontra o melhor
                horário para o seu atendimento.
              </p>
            </div>
            <div className="schedule-flow" data-reveal>
              <div>
                <span>01</span>
                <p>
                  <strong>Chame no WhatsApp</strong>
                  Fale diretamente com a equipe.
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Conte seu objetivo</strong>
                  Diga como podemos ajudar.
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Escolha seu horário</strong>
                  Encontre a melhor opção para você.
                </p>
              </div>
              <a
                className="button button-accent button-wide"
                href={links.schedule}
                target="_blank"
                rel="noreferrer"
                data-track="click_whatsapp_agendamento"
              >
                Quero agendar minha avaliação
              </a>
              <p className="microcopy microcopy-light">
                Atendimento presencial no Setor Sul, em Goiânia.
              </p>
            </div>
          </div>
          <SectionWave color="#f8f5f9" />
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-layout">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">Onde estamos</p>
              <h2>
                Venha cuidar de você
                <span> com a gente.</span>
              </h2>
              <div className="contact-block">
                <span>Endereço</span>
                <p>
                  Av. 85, nº 499, Quadra F-24, Lote 63
                  <br />
                  Setor Sul, Goiânia – GO, CEP 74080-010
                </p>
              </div>
              <div className="contact-block">
                <span>Horários</span>
                <ul className="hours-list">
                  <li>
                    <strong>Segunda-feira</strong>
                    <span>08:00–18:00</span>
                  </li>
                  <li>
                    <strong>Terça e quarta</strong>
                    <span>09:00–18:00</span>
                  </li>
                  <li>
                    <strong>Quinta-feira</strong>
                    <span>09:00–19:00</span>
                  </li>
                  <li>
                    <strong>Sexta-feira</strong>
                    <span>09:00–16:00</span>
                  </li>
                  <li>
                    <strong>Sábado e domingo</strong>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href={links.contact}
                  target="_blank"
                  rel="noreferrer"
                  data-track="click_whatsapp_contato"
                >
                  Agendar pelo WhatsApp
                </a>
                <a
                  className="text-link"
                  href={links.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  Como chegar <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="map-shell" data-reveal>
              <iframe
                title="Mapa da Estética Popular de Goiânia"
                src="https://www.google.com/maps?q=Av.%2085%2C%20499%2C%20Setor%20Sul%2C%20Goi%C3%A2nia%2C%20GO%2C%2074080-010&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-card">
                <strong>Atendimento presencial</strong>
                <span>Agende antes de vir.</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand-footer" href="#inicio">
              <span>Estética Popular</span>
              <small>Goiânia</small>
            </a>
            <p>
              Estética regenerativa, bem-estar e cuidado acessível no coração de
              Goiânia.
            </p>
          </div>
          <div>
            <h3>Navegue</h3>
            <a href="#tratamentos">Tratamentos</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#resultados">Resultados</a>
            <a href="#depoimentos">Avaliações</a>
          </div>
          <div>
            <h3>Fale com a clínica</h3>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              @centrodeesteticapopular
            </a>
            <a href={links.phone}>(62) 98291-1965</a>
            <a href={links.map} target="_blank" rel="noreferrer">
              Setor Sul, Goiânia – GO
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Estética Popular de Goiânia.</span>
          <span>Atendimento com agendamento.</span>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={links.schedule}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar atendimento pelo WhatsApp"
        data-track="click_whatsapp_flutuante"
      >
        <WhatsAppIcon />
        <span>Agendar</span>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
