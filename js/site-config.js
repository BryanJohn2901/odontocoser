/** Configuração central — Odonto Coser */
window.SITE_CONFIG = {
    businessName: 'Odonto Coser',
    whatsappPhone: '5541992159233',
    whatsappDisplay: '(41) 99215-9233',
    whatsappMessageGeneral: 'Olá, venho pelo site e gostaria de mais informações sobre os serviços da Odontocoser',
    /** z=12 = visão da cidade de Araucária com a clínica marcada */
    mapsEmbedSrc: 'https://www.google.com/maps?q=Odonto+Coser,+Arauc%C3%A1ria+-+PR,+Brasil&output=embed&hl=pt-BR&z=12',
    googleRating: 4.7,
    googleReviewCount: '500+',
    reviews: [
        {
            name: 'Maria Silva',
            stars: 5,
            date: '1 mês atrás',
            text: 'Excelente atendimento! A equipe é muito profissional e atenciosa. Meu sorriso ficou incrível após o tratamento com implantes. Recomendo a todos!'
        },
        {
            name: 'João Pereira',
            stars: 5,
            date: '2 meses atrás',
            text: 'Clínica de referência em Araucária. Fiz clareamento dental e o resultado superou minhas expectativas. Ambiente moderno e equipe muito qualificada.'
        },
        {
            name: 'Ana Costa',
            stars: 5,
            date: '3 meses atrás',
            text: 'Levei meu filho para odontopediatria e foi uma experiência maravilhosa. A Dra. foi super paciente e carinhosa. Clínica completa e bem estruturada.'
        },
        {
            name: 'Roberto Lima',
            stars: 5,
            date: '1 mês atrás',
            text: 'Fiz harmonização orofacial e ficou natural, exatamente como eu queria. Dr. Leonardo Coser é um profissional excepcional. Nota 10!'
        },
        {
            name: 'Carla Santos',
            stars: 5,
            date: '4 meses atrás',
            text: 'Iniciei o tratamento de ortodontia e estou encantada com os resultados. Equipe sempre atenciosa e pontual. Com certeza a melhor clínica de Araucária!'
        },
        {
            name: 'Paulo Oliveira',
            stars: 5,
            date: '2 meses atrás',
            text: 'Fiz facetas de porcelana e transformou completamente meu sorriso. Resultado natural e impecável. Valeu cada centavo do investimento!'
        }
    ]
};

window.buildWhatsAppLink = function (serviceName) {
    var cfg = window.SITE_CONFIG;
    var text = serviceName
        ? 'Olá, venho pelo site e gostaria de mais informações sobre os serviço de ' + serviceName
        : cfg.whatsappMessageGeneral;
    return 'https://wa.me/' + cfg.whatsappPhone + '?text=' + encodeURIComponent(text);
};
