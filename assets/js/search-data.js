// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "Associate Professor in Computer Security at the University of Birmingham and Tech Lead for AI Verification at the Singapore AI Safety Hub (SASH). Research focuses on verifiable AI safety, zero-knowledge proofs, and privacy.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research projects and ventures.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open-source projects and contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-promoted-to-associate-professor-in-computer-science-at-the-university-of-birmingham",
          title: 'Promoted to Associate Professor in Computer Science at the University of Birmingham.',
          description: "",
          section: "News",},{id: "news-awarded-aria-funding-for-our-project-on-privacy-preserving-ai-safety-verification-using-zero-knowledge-proofs-with-mirco-giacobbe-and-yang-zhang",
          title: 'Awarded ARIA funding for our project on privacy-preserving AI safety verification using zero-knowledge...',
          description: "",
          section: "News",},{id: "news-launched-zeroth-research-a-non-profit-making-intelligent-systems-safe-with-mathematical-certainty",
          title: 'Launched Zeroth Research, a non-profit making intelligent systems safe, with mathematical certainty.',
          description: "",
          section: "News",},{id: "news-awarded-a-foresight-institute-grant-for-zk-attestation-for-ai-security-with-luca-arnaboldi",
          title: 'Awarded a Foresight Institute grant for ZK attestation for AI security (with Luca...',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-www-2026-evasion-under-blockchain-sanctions",
          title: 'Paper accepted at WWW 2026: Evasion Under Blockchain Sanctions.',
          description: "",
          section: "News",},{id: "news-mentoring-two-spar-spring-2026-projects-proving-model-equality-in-zero-knowledge-and-proving-safety-properties-of-guardrail-models",
          title: 'Mentoring two SPAR Spring 2026 projects: Proving Model Equality in Zero-Knowledge and Proving...',
          description: "",
          section: "News",},{id: "news-joined-the-singapore-ai-safety-hub-sash-as-tech-lead-for-ai-verification-leading-its-technical-work-on-verifying-ai-systems-i-remain-at-the-university-of-birmingham-and-stay-involved-with-zeroth-research-as-an-associate-member",
          title: 'Joined the Singapore AI Safety Hub (SASH) as Tech Lead for AI Verification,...',
          description: "",
          section: "News",},{id: "projects-privacy-preserving-ai-safety-verification",
          title: 'Privacy-preserving AI Safety Verification',
          description: "ARIA-funded project developing mathematical foundations for verifying AI safety guarantees without revealing sensitive model or data details.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aria_ai_safety/";
            },},{id: "projects-identifying-money-laundering-on-the-blockchain",
          title: 'Identifying Money Laundering on the Blockchain',
          description: "Completed InnovateUK CyberASAP project developing modern blockchain AML techniques with low false-positive rates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blockchain_aml/";
            },},{id: "projects-nimiq-blockchain",
          title: 'Nimiq Blockchain',
          description: "Researcher 2017–2026 and Nimiq Foundation board member 2019–2026. Recursive zk-SNARKs and consensus protocols — the origin of my zero-knowledge work.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nimiq/";
            },},{id: "projects-verifiable-ai-inference",
          title: 'Verifiable AI Inference',
          description: "Open-source zero-knowledge prover for LLM inference, making international AI agreements verifiable. At the Singapore AI Safety Hub (SASH).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sash_verifiable_inference/";
            },},{id: "projects-spar-mentoring",
          title: 'SPAR Mentoring',
          description: "SPAR Spring 2026: two mentorship projects bridging AI safety and zero-knowledge proofs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spar_mentoring/";
            },},{id: "projects-zeroth-research",
          title: 'Zeroth Research',
          description: "Co-founded in 2025 (CTO until 2026); now Associate Member. Non-profit making intelligent systems safe, with mathematical certainty.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zeroth_research/";
            },},{id: "projects-zk-attestation-for-ai-security",
          title: 'ZK Attestation for AI Security',
          description: "Foresight Institute grant exploring zero-knowledge attestation mechanisms for AI security and integrity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zk_ai_security/";
            },},{id: "teaching-foundations-of-cybersecurity",
          title: 'Foundations of Cybersecurity',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2015_cybersecurity/";
            },},{id: "teaching-theory-of-modern-privacy-research",
          title: 'Theory of Modern Privacy Research',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2016_theory_privacy/";
            },},{id: "teaching-msc-projects",
          title: 'MSc Projects',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2021_msc_projects/";
            },},{id: "teaching-network-security-amp-cryptography",
          title: 'Network Security &amp;amp; Cryptography',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2021_nsc/";
            },},{id: "teaching-security-amp-networks",
          title: 'Security &amp;amp; Networks',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2021_security_and_networks/";
            },},{id: "teaching-ug-projects",
          title: 'UG Projects',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2021_ug_projects/";
            },},{id: "teaching-msc-projects",
          title: 'MSc Projects',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2022_msc_projects/";
            },},{id: "teaching-network-security-amp-cryptography",
          title: 'Network Security &amp;amp; Cryptography',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2022_nsc/";
            },},{id: "teaching-security-amp-networks",
          title: 'Security &amp;amp; Networks',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2022_security_and_networks/";
            },},{id: "teaching-ug-projects",
          title: 'UG Projects',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2022_ug_projects/";
            },},{id: "teaching-security-amp-networks",
          title: 'Security &amp;amp; Networks',
          description: "",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2023_security_and_networks/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%70%61%62%65%72%72.%6E%65%74", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=z46F9RgAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/paberr", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pascal-berrang", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/paberr", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/124/6255.html", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.birmingham.ac.uk/staff/profiles/computer-science/academic-staff/berrang-pascal.aspx", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
