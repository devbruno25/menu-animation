//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav").children().eq(0).text("Quem sou");
        $(".menu").children().eq(1).text("Habilidade");
        $(".menu").children().eq(2).text("Projetos");
        $(".menu").children().eq(3).text("Contato");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visão Geral");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ajuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav").children().eq(0).text("Who am I");
        $(".menu").children().eq(1).text("Skills");
        $(".menu").children().eq(2).text("Projects");
        $(".menu").children().eq(3).text("Contact");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav").children().eq(0).text("Quien soy");
        $(".menu").children().eq(1).text("Habilidades");
        $(".menu").children().eq(2).text("Proyectos");
        $(".menu").children().eq(3).text("Contacto");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Una página web sencilla con la opción de Multi-language");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visión General");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ayuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
    });
});