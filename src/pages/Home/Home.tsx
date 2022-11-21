import Header from "../../components/Header/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import home from './Home.module.css'
import 'swiper/css/scrollbar'
import FirstImage from '../../assets/images/vc-sabia.png'
import SecondImage from '../../assets/images/grupo-patense.png'
import ThirdImage from '../../assets/images/home.png'
import style from '../../components/Header/Header.module.css'
import 'swiper/css/autoplay';
import { Dog, TrendUp, Bus, Megaphone, Barcode } from "phosphor-react"

/*
function createSlide() {
    const slides = [
        FirstImage,
        SecondImage,
        ThirdImage
    ]
    return (
        <div>
            {
                slides.map((item) => {
                    return (
                        < SwiperSlide >
                            <div className="swiper">
                                <div className="mySwiper swiper">
                                    <div className={`${style.swiper_wrapper} ${style.img}`}>
                                        <img src={item} className="img" height={600} alt="" />

                                    </div>
                                </div>

                            </div>
                        </SwiperSlide >
                    )
                })
            }
        </div>


    )
}
*/
/*function duplicateSlide() {
    return (
        <SwiperSlide>
            <div className="swiper">
                <div className="mySwiper swiper">
                    <div className={`${style.swiper_wrapper} ${style.img}`}>
                        <img className='img' height={600} src={SecondImage} alt="" />
                    </div>
                </div>

            </div>
        </SwiperSlide>
    )
}

function thinderSlide() {
    return (
        <SwiperSlide>
            <div className="swiper">
                <div className="mySwiper swiper">
                    <div className={`${style.swiper_wrapper} ${style.img}`}>
                        <img className='img' height={600} src={ThirdImage} alt="" />
                    </div>
                </div>

            </div>
        </SwiperSlide>
    )
}*/




export function Home() {

    return (
        <>
            <div>
                <Header whiteVersion={true} colorWhite={true}/>
            </div>
                

            <section className={`${style.section} ${home.bg_light}`} id={`${style.about}`}>
                <div className={`${style.container} ${style.grid}`}>
                    <div className="row d-flex align-items-center">
                        <div className={`col-lg-6 ${home.page_scroll} text-center `}>
                            <div className={`${home.section_heading}`}>
                                <h2>Sobre a Pets</h2>
                            </div>
                            <h4>Um novo negócio, mas há 50 anos com a mesma a qualidade!</h4>
                            <p>Voltada para os produtos PET, nossa nova unidade traz a qualidade, inovação e sustentabilidade já marcados no DNA do Grupo Patense. Trabalhamos como Copackers para grandes marcas do Brasil e do mundo, produzindo inúmeros produtos para cães e gatos com excelência.</p>
                        </div>
                        <div className={`col-lg-6 ${home.circle_images} ${home.res_margin}`}>
                            <img src="https://img.freepik.com/fotos-gratis/celebracao-do-dia-mundial-do-animal-com-cachorro-fofo_23-2149477527.jpg?size=338&ext=jpg&ga=GA1.2.793906127.1664390983" className={`img-fluid ${home.img1}  rounded-circle`} alt="" />
                            <img src="https://img.freepik.com/fotos-gratis/adoravel-bebe-gatinho-sentado-na-mesa_658552-63.jpg?size=338&ext=jpg&ga=GA1.2.793906127.1664390983" className={`img-fluid ${home.img2}  rounded-circle`} alt="" />
                            <img src="https://img.freepik.com/fotos-gratis/spitz-fofo_144627-7076.jpg?size=338&ext=jpg&ga=GA1.2.793906127.1664390983" className={`img-fluid ${home.img3}  rounded-circle`} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style.section} ${home.feature_section}`} id={`${style.services}`}>
                <div className={`${style.container} ${style.grid}`}>
                    <header>
                        <h2 className={`${style.title}`}>Serviços</h2>
                        <p className={`${style.subtitle}`}>A Pets Mellon tem o padrão alto em tecnologia e desenvolvimento. A empresa buscou inovar no desenvolvimento dos seus serviços com o propósito de fornecer aos nossos clientes não só um produto de excelente qualidade, mas também uma experiência de serviço diferenciado.</p>
                    </header>
                    <div>
                        <div className="d-flex gap-3 flex-wrap">
                            <div className="col-lg-3">
                                <div className={`${home.feature_with_icon}`}>
                                    <div className={`${home.icon_features}`}>
                                        <i>
                                            <Dog size={32} />
                                        </i>
                                    </div>
                                    <h5>Industrialização de alimento completo e incompleto</h5>
                                    <p>Eficiência e Tecnologia, preceitos básicos para qualquer indústria Pets Mellon. Estamos preparados para produzir o seu produto em grande escala com o padrão máximo de qualidade.</p>
                                </div>
                                <div className={`${home.feature_with_icon}`}>
                                    <div className={`${home.icon_features}`}>
                                        <i>
                                            <TrendUp size={32} />
                                        </i>
                                    </div>
                                    <h5>Criação de kits promocionais para a sua marca</h5>
                                    <p>A Pets Mellon busca sempre inovação e trabalhamos sugerindo kits promocionais que podem ser inseridos dentro da proposta de venda de cada marca parceira. Elaboramos, criamos e sugerimos formas diferentes para uma atuação distinta por parte da marca dentro do mercado pet.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={`${home.feature_with_icon}`}>
                                    <div className={`${home.icon_features}`}>
                                        <i>
                                            <Bus size={32} />
                                        </i>
                                    </div>
                                    <h5>Logística</h5>
                                    <p>Empresa conta com veículos próprios e toda a logística para a entrega do produto, tanto nacionalmente quanto internacionalmente. A Pets Mellon já exportou para mais de 50 países e possui estrutura interna completa para atender a sua demanda. Faremos todo o processo de preparação e separação de cargas</p>
                                </div>
                                <div className={`${home.feature_with_icon}`}>
                                    <div className={`${home.icon_features}`}>
                                        <i>
                                            <Megaphone size={32} />
                                        </i>
                                    </div>
                                    <h5>Assessoria de marketing para desenvolvimento de produto</h5>
                                    <p>Proporcionamos aos nossos clientes assessoria de marketing pronta para lhe ajudar com a criação de novas embalagens, desenvolvimento de estratégias para o seu produto e diferenciação de outras marcas no mercado.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className={`${home.feature_with_icon}`}>
                                    <div className={`${home.icon_features}`}>
                                        <i>
                                            <Barcode size={32} />
                                        </i>
                                    </div>
                                    <h5>Armazenamento de produto completo e incompleto</h5>
                                    <p>Temos estrutura completa para armazenamento de produtos em nossa infraestrutura física. Toda a empresa possui SIF e está preparada para melhor te atender.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className={`${style.section}`} id={`${style.testimonials}`}>
                <div className={`${style.container}`}>
                    <header>
                        <h2 className={`${style.title}`}>FÓRMULAS CUSTOMIZADAS</h2>
                        <p className={`${style.subtitle}`}>Oferecemos um serviço personalizado. Isso significa que cada produto é modificado ou adaptado de acordo com a especificação de cada cliente. Participamos integralmente dos projetos dos mesmos, desde os ingredientes até as tecnologias a serem utilizadas, fornecendo soluções rápidas e efetivas e mantendo o sigilo abslouto em cada projeto.</p>
                    </header>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000 }}

                    >

                    </Swiper>
                </div>
            </section>

            <section className={`${style.section}`} id={`${style.contact}`}>
        <div className={`${style.container} ${style.grid}`}>




            <div className={`${style.text}`}>
                <h2 className={`${style.title}`}>Entre em contato com a gente!</h2>
                <p>Entre em contato com a <span>PetsMellon </span>queremos tirar suas dúvidas, ouvir sugestões e críticas.</p>
                 <button className="btn btn-primary">Entrar em contato</button>
            </div>



            <div className={`${style.links}`}>
                <ul className={`${style.grid}`}>
                    <li> (37) 3249-5000 / (17) 3426-7400</li>
                    <li> Av. Emílio Arroio Hernandes, 3299</li>
                    <li>cv@petsmellon.com.br</li>
                </ul>
            </div>



        </div>
    </section>

        </>





    )
}