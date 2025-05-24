import React, { useState, useEffect } from 'react';
import { Briefcase, Cpu, Lightbulb, Linkedin, Github, Mail, Phone, MapPin, User, Brain, Code, Database, Cloud, ShieldCheck, Users, BookOpen, Award, MessageSquare, Send, Menu, X, Settings, Zap, GitMerge, Server, Network } from 'lucide-react';


const portfolioData = {
  name: "Yan Salim",
  role: "Tech Leader | DevSecOps | Analista de Segurança da Informação",
  contact: {
    email: "yan_salim@hotmail.com", 
    phone: "+55 34 99172-3233",
    location: "Araguari - MG, Brasil",
    linkedin: "https://www.linkedin.com/in/yan-salim-3a796160/", 
    github: "https://github.com/yansalim",
  },
  professionalSummary: "Profissional com 10 anos de experiência em projetos inovadores, atuando como Tech Leader, DevSecOps e Analista de Segurança da Informação. Especialista em desenvolvimento ágil (Scrum), implementação de soluções em nuvem (AWS, Azure, GCP), automação de processos (Docker, Kubernetes, CI/CD) e segurança cibernética (firewalls, testes de intrusão, conformidade LGPD). Capacidade de liderança, gestão de equipes e análise técnica. Experiência em consultoria de inovação, análise de requisitos e coordenação de projetos para otimização de ambientes e entrega de soluções escaláveis.",
  skills: [
    
    { name: "Consultoria de Inovação", icon: <Lightbulb size={20} className="mr-2" />, category: "Gestão e Liderança" },
    { name: "Liderança de Equipes", icon: <Users size={20} className="mr-2" />, category: "Gestão e Liderança" },
    { name: "Desenvolvimento Ágil (Scrum)", icon: <Zap size={20} className="mr-2" />, category: "Metodologias" },
    { name: "Segurança Cibernética", icon: <ShieldCheck size={20} className="mr-2" />, category: "Segurança" },
    { name: "Blue Team & Red Team", icon: <ShieldCheck size={20} className="mr-2" />, category: "Segurança" },
    { name: "Firewalls (pfSense, Fortinet)", icon: <Network size={20} className="mr-2" />, category: "Segurança" },
    { name: "Testes de Intrusão", icon: <ShieldCheck size={20} className="mr-2" />, category: "Segurança" },
    { name: "Conformidade LGPD", icon: <ShieldCheck size={20} className="mr-2" />, category: "Segurança" },
    { name: "AWS", icon: <Cloud size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "Azure", icon: <Cloud size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "GCP", icon: <Cloud size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "DigitalOcean", icon: <Cloud size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "Docker", icon: <Settings size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "Kubernetes", icon: <Settings size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "CI/CD", icon: <GitMerge size={20} className="mr-2" />, category: "Cloud & DevOps" },
    { name: "Python (Automações)", icon: <Code size={20} className="mr-2" />, category: "Desenvolvimento" },
    { name: "Node.js", icon: <Code size={20} className="mr-2" />, category: "Desenvolvimento" },
    { name: "Angular", icon: <Code size={20} className="mr-2" />, category: "Desenvolvimento" },
    { name: "Android (Revisão)", icon: <Code size={20} className="mr-2" />, category: "Desenvolvimento" },
    { name: "iOS (Revisão)", icon: <Code size={20} className="mr-2" />, category: "Desenvolvimento" },
    { name: "Infraestrutura Híbrida", icon: <Server size={20} className="mr-2" />, category: "Infraestrutura" },
    { name: "Redes Ubiquiti", icon: <Network size={20} className="mr-2" />, category: "Infraestrutura" },
    { name: "ERP Sankhya (Suporte)", icon: <Database size={20} className="mr-2" />, category: "Sistemas" },
    // Adicionar aqui novas habilidades
  ],
  projects: [ 
              
  ],
  experiences: [
    {
      role: "Tech Leader",
      company: "Crosoften, Uberlândia",
      period: "2 anos (Recente)", 
      responsibilities: [
        "Liderança de equipe no desenvolvimento de projetos com metodologias ágeis (Scrum).",
        "Revisão de código em Node.js, Angular, Android e iOS; implementação de melhorias técnicas.",
        "Coordenação de deploys com práticas de CI/CD e colaboração com times DevOps.",
        "Consultoria em inovação e análise técnica para novos projetos, garantindo entregas ágeis."
      ]
    },
    {
      role: "DevSecOps",
      company: "Crosoften, Uberlândia",
      period: "2 anos",
      responsibilities: [
        "Implementação de infraestruturas multi-cloud (AWS, Azure, GCP, Digital Ocean).",
        "Deploys seguros com Docker e Kubernetes; automações em Python para otimização de processos.",
        "Gerenciamento de QA e desenvolvimento, assegurando integração contínua.",
        "Consultoria de segurança para projetos com integrações externas e publicação em Android/iOS."
      ]
    },
    {
      role: "Analista DevSecOps",
      company: "yansalim.dev",
      period: "Outubro/2022 - Atual",
      responsibilities: [
        "Consultoria em segurança cibernética e infraestrutura, atuando com empresas terceiras.",
        "Desenvolvimento de soluções customizadas para ambientes corporativos."
      ]
    },
    {
      role: "Analista de Infraestrutura e Segurança da Informação",
      company: "Genyx Solar",
      period: "9 meses",
      responsibilities: [
        "Gerenciamento de infraestrutura híbrida com redes Ubiquiti e firewalls Fortinet.",
        "Implementação de backups em nuvem e análise preventiva de vulnerabilidades.",
        "Implementação de práticas de segurança para usuários.",
        "Coordenação time de suporte.",
        "Suporte implantação ERP Sankhya."
      ]
    },
    {
      role: "Analista de Segurança da Informação",
      company: "Panice Tecnologia, Uberlândia-MG",
      period: "6 meses",
      responsibilities: [
        "Configuração e manutenção de firewalls (pfSense e Fortinet) com base em práticas recomendadas.",
        "Realização de testes de intrusão e levantamento de vulnerabilidades (blue team e red team).",
        "Elaboração de relatórios para conformidade com a LGPD, propondo melhorias na segurança de dados.",
        "Suporte técnico Sankhya a usuários corporativos e parceiros terceirizados."
      ]
    },
    {
      role: "Analista de Sistemas",
      company: "Computertec, Araguari-MG",
      period: "1 ano",
      responsibilities: [
        "Desenvolvimento e manutenção de servidores locais e em nuvem para empresas terceirizadas.",
        "Configuração de firewalls e otimização de redes cabeadas e sem fio para maior eficiência operacional.",
        "Implantação de soluções de TI para integração com sistemas empresariais."
      ]
    },
    {
      role: "Analista de Sistemas e Recursos",
      company: "Delphi Informática, Araguari-MG",
      period: "6 meses",
      responsibilities: [
        "Análise de requisitos para implementação de servidores voltados a ERPs empresariais.",
        "Manutenção preventiva e corretiva de sistemas para suporte a processos internos de empresas clientes."
      ]
    },
    {
      role: "Técnico de Informática",
      company: "Binários Informática, Araguari-MG",
      period: "1 ano",
      responsibilities: [
        "Manutenção de hardware e software para ambientes corporativos e residenciais.",
        "Configuração de sistemas Windows e Linux para servidores locais, garantindo alta disponibilidade.",
        "Suporte técnico e instalação de redes locais, otimizando conectividade para clientes empresariais."
      ]
    },
    {
      role: "Diretor de Tecnologia e Projetos",
      company: "Piron Health, Uberlândia-MG",
      period: "3 anos",
      responsibilities: [
        "Coordenação de times técnicos e de design para o desenvolvimento de produtos digitais inovadores.",
        "Gestão de clusters na Azure, com foco em escalabilidade e alta performance.",
        "Apresentação de projetos em programas de aceleração, impulsionando visibilidade e investimento."
      ]
    }
  ],
  education: [
    {
      course: "Ciência da Computação", 
      institution: "Estácio (EAD - Cursando)", // Adicionado instituição e status
      icon: <BookOpen size={24} className="text-indigo-500" />
    }

  ],
  certifications: [
    { name: "Especialista Ciberataque - IGTI", icon: <Award size={20} className="mr-2 text-teal-500" /> },
    { name: "Especialista Segurança Cibernética - IGTI", icon: <ShieldCheck size={20} className="mr-2 text-teal-500" /> },
    { name: "Scrum Foundation Professional Certificate (SFPC) - Certiprof", icon: <Users size={20} className="mr-2 text-teal-500" /> }
  ],
  languages: [ 
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário (em desenvolvimento)" }
  ],
  
};

// Componente de Navegação
const Navbar = ({ onNavigate, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = ["Início", "Sobre", "Habilidades", ...(portfolioData.projects && portfolioData.projects.length > 0 ? ["Projetos"] : []), "Experiência", "Educação", "Contato"];


  const handleItemClick = (item) => {
    onNavigate(item.toLowerCase().replace('ê', 'e')); 
    setIsOpen(false);
  };
  
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => onNavigate('início')}>{portfolioData.name}</h1>
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <button 
              key={item} 
              onClick={() => handleItemClick(item)}
              className={`hover:text-blue-400 transition-colors duration-300 ${currentSection === item.toLowerCase().replace('ê', 'e') ? 'text-blue-400 font-semibold border-b-2 border-blue-400' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-md shadow-xl">
          {navItems.map(item => (
            <button 
              key={item} 
              onClick={() => handleItemClick(item)}
              className={`block w-full text-left px-4 py-3 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300 ${currentSection === item.toLowerCase().replace('ê', 'e') ? 'text-blue-400 font-semibold' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Componente hero section
const HeroSection = ({ onNavigate }) => (
  <section id="início" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white flex flex-col justify-center items-center text-center p-8 pt-24 md:pt-32"> {/* Aumentado padding-top */}
    <img 
      src={`https://placehold.co/150x150/4A5568/FFFFFF?text=${portfolioData.name.substring(0,1)}${portfolioData.name.split(" ")[1]?.[0] || 'S'}&font=montserrat`} 
      alt={`Foto de ${portfolioData.name}`}
      className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-blue-500 shadow-xl"
      onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/150x150/E2E8F0/4A5568?text=${portfolioData.name.substring(0,1)}${portfolioData.name.split(" ")[1]?.[0] || 'S'}`; }}
    />
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">{portfolioData.name}</h1>
    <p className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in-up">{portfolioData.role}</p>
    <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-500 flex flex-col sm:flex-row">
      {portfolioData.projects && portfolioData.projects.length > 0 && (
        <button 
          onClick={() => onNavigate('projetos')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Meus Projetos
        </button>
      )}
      <button 
        onClick={() => onNavigate('contato')}
        className="bg-transparent hover:bg-blue-500 text-blue-300 font-semibold hover:text-white py-3 px-8 border border-blue-400 hover:border-transparent rounded-lg shadow-md transition duration-300 transform hover:scale-105"
      >
        Entre em Contato
      </button>
    </div>
    <div className="mt-12 flex space-x-6 animate-fade-in-up animation-delay-700">
      <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Yan Salim" className="text-blue-300 hover:text-blue-100 transition duration-300">
        <Linkedin size={32} />
      </a>
      <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub de Yan Salim" className="text-blue-300 hover:text-blue-100 transition duration-300">
        <Github size={32} />
      </a>
    </div>
  </section>
);

// Componente session
const Section = ({ id, title, children, icon }) => (
  <section id={id} className="py-16 md:py-24 px-4 md:px-8 bg-gray-100 dark:bg-gray-800 odd:bg-white dark:odd:bg-gray-900">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800 dark:text-white flex items-center justify-center">
        {icon && React.cloneElement(icon, { size: 36, className: "mr-4 text-blue-600 dark:text-blue-400" })}
        {title}
      </h2>
      {children}
    </div>
  </section>
);

// Component about me
const AboutSection = () => (
  <Section id="sobre" title="Sobre Mim" icon={<User />}>
    <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-lg shadow-xl text-center md:text-left">
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {portfolioData.professionalSummary}
      </p>
      {}
    </div>
  </Section>
);


const SkillsSection = () => {
  const skillCategories = [...new Set(portfolioData.skills.map(skill => skill.category))].sort((a,b) => {
    // order category
    const order = ["Gestão e Liderança", "Metodologias", "Segurança", "Cloud & DevOps", "Desenvolvimento", "Infraestrutura", "Sistemas"];
    return order.indexOf(a) - order.indexOf(b);
  });

  return (
    <Section id="habilidades" title="Competências Técnicas" icon={<Code />}>
      {skillCategories.map(category => (
        <div key={category} className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 text-center md:text-left">{category}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"> {/* Ajustado para 4 colunas em LG */}
            {portfolioData.skills.filter(skill => skill.category === category).map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
                {React.cloneElement(skill.icon, { size: 32, className: "mb-2 text-blue-600 dark:text-blue-400" })}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
       <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6 text-center md:text-left">Idiomas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolioData.languages.map((lang, index) => (
                 <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center">
                    <MessageSquare size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
                    <div>
                        <span className="text-md font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</p>
                    </div>
                 </div>
            ))}
          </div>
        </div>
    </Section>
  );
};

// component cards
const ProjectCard = ({ project }) => (
  <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
    <div className="p-6 flex-grow">
      <div className="flex items-center mb-4">
        {project.icon || <Briefcase size={32} className="text-gray-500" />}
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-3">{project.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">{project.description}</p>
    </div>
    <div className="p-6 bg-gray-50 dark:bg-gray-600">
      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Tecnologias:</h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// components projects
const ProjectsSection = () => {
  if (!portfolioData.projects || portfolioData.projects.length === 0) {
    return null; //no render
  }
  return (
    <Section id="projetos" title="Projetos em Destaque" icon={<Briefcase />}>
      <div className="grid md:grid-cols-2 gap-8">
        {portfolioData.projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};


//componet Experience
const ExperienceSection = () => (
  <Section id="experiencia" title="Experiência Profissional" icon={<Briefcase />}>
    <div className="space-y-12">
      {portfolioData.experiences.map((exp, index) => (
        <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl relative border-l-4 border-blue-500 dark:border-blue-400">
           <div className="absolute -top-3 -left-5 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">
            <Briefcase size={20}/>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1 ml-8">{exp.role}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 ml-8">{exp.company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 ml-8">{exp.period}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-8">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

// component education  
const EducationSection = () => (
  <Section id="educação" title="Educação e Certificações" icon={<BookOpen />}>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Formação Acadêmica</h3>
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
              {React.cloneElement(edu.icon, { className: "mr-4 mt-1 text-blue-600 dark:text-blue-400 flex-shrink-0" })}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.course}</h4>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">Certificações</h3>
        <div className="space-y-4">
          {portfolioData.certifications.map((cert, index) => (
            <div key={index} className="flex items-center bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md">
              {React.cloneElement(cert.icon, { className: "mr-3 flex-shrink-0"})}
              <span className="text-md text-gray-700 dark:text-gray-300">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

// component contact
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulation email service
    try {
      
      // Ex: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      console.log("Form data submitted:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da API
      setSubmitMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitMessage('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde ou use um dos contatos diretos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contato" title="Entre em Contato" icon={<MessageSquare />}>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Vamos Conversar!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Estou sempre aberto a novos desafios e colaborações. 
            Se você tem um projeto em mente, uma oportunidade de trabalho, ou simplesmente quer trocar uma ideia, 
            não hesite em me contatar.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={20} className="mr-3 text-blue-500" /> {portfolioData.contact.email}
            </a>
            <a href={`https://wa.me/${portfolioData.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <MessageSquare size={20} className="mr-3 text-green-500" /> WhatsApp ({portfolioData.contact.phone})
            </a>
            <p className="flex items-center text-gray-700 dark:text-gray-300">
              <MapPin size={20} className="mr-3 text-blue-500" /> {portfolioData.contact.location}
            </p>
            <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={20} className="mr-3 text-blue-500" /> LinkedIn
            </a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={20} className="mr-3 text-blue-500" /> GitHub
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Envie uma Mensagem</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
              <textarea name="message" id="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : <Send size={18} className="mr-2" /> }
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>
          {submitMessage && (
            <p className={`mt-4 text-sm text-center ${submitMessage.includes('sucesso') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};


// component footer
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 text-center p-8">
    <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Todos os direitos reservados.</p>
    <p className="text-sm mt-1">Construído com React e Tailwind CSS.</p>
  </footer>
);

// component first
export default function App() {
  const [currentSection, setCurrentSection] = useState('início');
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  // theme effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            //normalize
            setCurrentSection(entry.target.id.replace('ê', 'e'));
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" } // ajust margin
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, [theme]);

  const handleNavigation = (sectionId) => {
    const normalizedSectionId = sectionId.replace('ê', 'e');
    const element = document.getElementById(normalizedSectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 72; // ajust navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setCurrentSection(normalizedSectionId);
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="font-sans antialiased bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar onNavigate={handleNavigation} currentSection={currentSection} />
      
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 p-3 rounded-full shadow-lg z-50 focus:outline-none hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors"
        aria-label="Alternar tema"
      >
        {theme === 'light' ? <Brain size={20} /> : <Lightbulb size={20} />}
      </button>

      <main>
        <HeroSection onNavigate={handleNavigation} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection /> {/* Será renderizado apenas se houver projetos */}
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <GlobalStyles /> {/* Adicionado para estilos globais */}
    </div>
  );
}

// css animation
const GlobalStyles = () => (
  <style jsx global>{`
    /* Animações de Fade In */
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
    .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
    
    .animation-delay-300 { animation-delay: 0.3s; }
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-700 { animation-delay: 0.7s; }

    html {
      scroll-behavior: smooth;
    }
    
    /* Ajuste para ancoragem da navbar - importante para o scroll suave */
    section[id] {
      scroll-margin-top: 72px; /* Deve ser igual ou maior que a altura da navbar */
    }
  `}</style>
);