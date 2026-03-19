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
          description: "",
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
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-privacy-preserving-ai-safety-verification",
          title: 'Privacy-preserving AI Safety Verification',
          description: "ARIA-funded project with Mirco Giacobbe applying zero-knowledge proofs to verify AI safety properties without revealing model or data details.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aria_ai_safety/";
            },},{id: "projects-identifying-money-laundering-on-the-blockchain",
          title: 'Identifying Money Laundering on the Blockchain',
          description: "InnovateUK CyberASAP funded project developing modern blockchain AML techniques with low false-positive rates.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/blockchain_aml/";
            },},{id: "projects-nimiq-blockchain",
          title: 'Nimiq Blockchain',
          description: "Researcher since 2017. Applied cryptography, zero-knowledge proofs, and consensus protocols.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nimiq/";
            },},{id: "projects-zeroth-research",
          title: 'Zeroth Research',
          description: "Co-Founder &amp; CTO. Making intelligent systems safe, with mathematical certainty.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/zeroth_research/";
            },},{id: "projects-zk-attestation-for-ai-security",
          title: 'ZK Attestation for AI Security',
          description: "Foresight Institute grant with Luca Arnaboldi exploring zero-knowledge attestation mechanisms for AI security.",
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
          window.open("https://www.linkedin.com/in/pascal-berrang-53287999", "_blank");
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
