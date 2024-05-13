const translations = {
    pt: {
        title: "Olá, meu nome é Endí Marani!",
        aboutme: "Sobre Mim",
        skills: "Habilidades",
        hobbies: "Hobbies",
        education: "Formação Acadêmica",
        projects: "Projetos",
        contact: "Contato",
        intro: "Atualmente sou estudante da Alura em parceria com a Oracle através do programa ONE - Oracle Next Education, atualmente seguindo a trilha de especialização em Front-End.",
        portuguese: "Português",
        english: "Inglês",
        aboutme__text: "Sou natural de Aracaju-SE, tenho 32 anos e sou formado em direito. Como não estava me encontrando profissionalmente na área, resolvi fazer um curso de lógica de programação e comecei a me interessar pela área de desenvolvimento de sistemas.",
        aboutme__text1: "Desde criança fui abraçado pela tecnologia. Lembro bem do meu primeiro computador, um windos 98, no qual eu adorava jogar Oddworld: Abe's Oddysee e outros jogos estilo MUGEN, e até então esse sempre foi um dos meus passatempos preferidos. Quando chegou o momento de escolher um futuro profissional, familiares me estimularam bastante a seguir pela área de tecnologia. Porém, na época eu pensava que estaria transformando um passatempo em estudo, e isso faria com que a diversão acabasse. Contudo, hoje vejo na programação um excelente passatempo. Divertido, estressante, estimulante, prazeroso, cansativo, assim como jogar um jogo. E por isso decidi mudar os rumos da carreira para seguir nos estudos de programação.",
        aboutme__text2: "Atualmente, além de ser participante da Trilha Front-End da Alura, também sou aluno de um curso Técnico em Desenvolvimento de Sistemas pelo SENAC/RN e darei início ao curso superior em Análise e Desenvolvimento de Sistemas pela UNIT-SE ainda este ano.",
        gaming: "Jogar",
        biking: "Pedalar",
        series: "Assistir Series",
        degree: "Bacharelado em Direito",
        college: "2019 - Faculdade Pio X",
        oracle: "Formação Oracle + Alura - Especialização Front End",
        ongoing: "Em andamento - Alura",
        technical: "Técnico em Desenvolvimento de Sistemas",
        senac: "Em andamento - SENAC/RN",
        decoder: "Decodificador de Texto",
        alura_challenge: "Challenge Alura Decodificador",
        repo: "Repositório",
        demo: "Ver Demo",
        contact: "Contato",
        contact_text: "Quer entrar em contato? Preencha o formulário abaixo!",
        name: "Nome",
        subject: "Assunto",
        message: "Mensagem",
        send: "Enviar",
    },
    en: {
        title: "Hello, my name is Endí Marani!",
        aboutme: "About Me",
        skills: "Skills",
        hobbies: "Hobbies",
        education: "Academic Formation",
        projects: "Projects",
        contact: "Contact",
        intro: "I am currently a student at Alura in partnership with Oracle through the ONE program - Oracle Next Education, currently following the Front-End specialization track.",
        portuguese: "Portuguese",
        english: "English",
        aboutme__text: "I am from Aracaju-SE and I am 32 years old. I have a degree in law school. Since I was not finding my professional path in that field, I decided to take a course in programming logic and began to develop an interest in the area of systems development.",
        aboutme__text1: "From an early age, I was embraced by technology. I vividly remember my first computer, a Windows 98, on which I loved playing Oddworld: Abe's Oddysee and various MUGEN-style games. Since then, gaming has always been one of my favorite hobbies. When the time came to choose a professional future, my family strongly encouraged me to pursue a career in technology. However, at the time, I thought turning a hobby into a study subject would strip away the fun. Today, however, I see programming as an excellent hobby. It's fun, stressful, stimulating, enjoyable, and exhausting—just like playing a game. That's why I decided to shift my career path and focus on studying programming.",
        aboutme__text2: "Currently, in addition to participating in Alura's Front-End Track, I am also enrolled in a Technical Course in Systems Development at SENAC/RN, and I will start a higher education program in Systems Analysis and Development at UNIT-SE later this year.",
        gaming: "Gaming",
        biking: "Biking",
        series: "Watch Series",
        degree: "Law Degree",
        college: "2019 - College Pio X",
        oracle: "Oracle + Alura Training - Front End Specialization",
        ongoing: "In progress - Alura",
        technical: "Technical Course in System Development",
        senac: "In progress - SENAC/RN",
        decoder: "Text Encryptor",
        alura_challenge: "Challenge Alura Text Encryptor",
        repo: "Repository",
        demo: "Demo",
        contact: "Contact",
        contact_text: "Want to get in touch? Fill out the form below and I'll be in touch.",
        name: "Name",
        subject: "Subject",
        message: "Message",
        send: "Send",
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        if (element.tagName !== 'IMG') { // Ignora imagens
            const key = element.getAttribute("data-lang");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        }
    });
    adjustButtonWidth(); // Chama a função para ajustar a largura dos botões
}

function adjustButtonWidth() {
    document.querySelectorAll(".button").forEach(button => {
        const span = button.querySelector("span"); // Selecione o elemento span dentro do botão
        button.style.width = `auto`; // Reseta a largura
        const newWidth = span.offsetWidth + 50; // Obtém a largura do span e adiciona algum espaço para o ícone
        button.style.width = `${newWidth}px`; // Define a nova largura baseada no conteúdo
    });
}



document.querySelector('.btn-portuguese').addEventListener('click', () => changeLanguage('pt'));
document.querySelector('.btn-english').addEventListener('click', () => changeLanguage('en'));


emailjs.init('ZQ-W6Sa_5jopYM55-');

function sendEmail() {
    if (!document.getElementById('name').value || !document.getElementById('email').value || !document.getElementById('subject').value || !document.getElementById('message').value) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }

    emailjs.send("service_4vfghaq", "template_82a858i", {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email enviado com sucesso!');

        // Limpa os campos após o envio bem-sucedido
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    }, function(error) {
        console.log('FAILED...', error);
        alert('Falha ao enviar o email.');
    });
}

document.querySelectorAll('.navbar__content__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Previne o comportamento padrão de scroll
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop - 80; // Desconta a altura da navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
