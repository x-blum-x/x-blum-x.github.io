import React, { useState } from 'react'
import Linkedin from '../icons/linkedin.png'
import Instagram from '../icons/instagram.png'
import Arrow from '../icons/arrow.png'
import Python from '../icons/python.png'
import JS from '../icons/js.png'
import ReactLogo from '../icons/react.png'
import Home from '../icons/home.png'

const Container = () => {
  const instagramUrl = 'https://www.instagram.com/x_blum_x/'
  const linkedinUrl = 'https://www.linkedin.com/in/gabriel-blum-santos-9b981625a/'
  function toggleSlide(Container_1, Container_2, direction) {
    if (direction === 'next') {
      Container_1.classList.add('slide-out');
      Container_1.classList.remove('slide-in');
      Container_1.style.zIndex = '1';
      Container_2.classList.add('slide-in');
      Container_2.classList.remove('slide-out');
      Container_2.style.zIndex = '2';
    } else if (direction === 'prev') {
      Container_2.classList.add('slide-out');
      Container_2.classList.remove('slide-in');
      Container_2.style.zIndex = '1';
      Container_1.classList.add('slide-in');
      Container_1.classList.remove('slide-out');
      Container_1.style.zIndex = '2';
    }
  }

  return (
    <div id='main'>
      <div className="container" id='container_1'>
        <div className='info' style={{width:'100%'}}>
          <img className="profile-img" src="https://res.cloudinary.com/dqznzs9hk/image/upload/v1707943641/home/profile_img_fxrdb4.jpg" />
        </div>
        <div className="content" id='content_1'>
          <div className='div_grid'>
            <div className="info">
              <a href='#' style={{fontSize:'35px'}}>Gabriel Blum Santos<br />
              <a style={{fontSize:'20px'}}>Cientista da Computação<br />
              <a style={{fontSize:'15px'}}>Desenvolvedor Frontend/Backend</a><br />
              <a style={{fontSize:'15px'}}>Certificações</a></a></a>
              <ul>
                <li>Ingles Avançado (Formado em CCAA - Nova Mutum)</li>
                <li>Web Moderno (HTML, CSS, JavaScript, Node, React, Gulp, Webpack, Bootstrap, Vue, Express, SQL)</li>
                <li>Redes neurais e artificias em Python</li>
                <li>Windows Server 2019</li>
                <li>Docker</li>
              </ul>
              <a style={{fontSize:'15px'}}>Experiências</a>
              <ul>
                <li>Professor de linguas estrangeiras (Inglês) - CCAA (2016 - 2017)</li>
                <li>Coordenador Censitário - IBGE (06/2022 - 04/2023)</li>
                <li>Administrador - Gercadi (07/2023 - atualidade)</li>
              </ul>
            </div>
            <div className='info'>
              <label style={{justifySelf:'center', fontSize: '20px'}}>Sessões</label>
            </div>
            <div id='div_sessions' className='div_flex'>
              <img src={Python} alt='Pyhton icon' className='icons' onClick={()=> {
                let Container_1 = document.getElementById('container_1') //remove o container_1
                let Container_2 = document.getElementById('container_2') //mostra o container_2
                toggleSlide(Container_1,Container_2, 'next')
              }}></img>
              <img src={JS} alt='JS icon' className='icons' onClick={() => {
                let Container_1 = document.getElementById('container_1') //remove o container_1
                let Container_2 = document.getElementById('container_3') //mostra o container_3
                toggleSlide(Container_1,Container_2, 'next')
              }}></img>
              <img src={ReactLogo} alt='React icon' className='icons' onClick={() => {
                let Container_1 = document.getElementById('container_1') //remove o container_1
                let Container_2 = document.getElementById('container_4') //mostra o container_4
                toggleSlide(Container_1,Container_2, 'next')
              }}></img>
            </div>
            <div className='info'>
              <label style={{justifySelf:'center', fontSize: '20px'}}>Contatos</label>
              <label style={{justifySelf:'center', fontSize: '15px'}}>gabriel.blum.santos@gmail.com</label>
              <label style={{justifySelf:'center', fontSize: '15px'}}>blum.santos@unemat.br</label>
            </div>
            <div id='div_contatos' className='div_flex'>
              <a href={linkedinUrl}>
                <img src={Linkedin} alt='Link para Linkedin pessoal' className='icons' />
              </a>
              <a href={instagramUrl}>
                <img src={Instagram} alt='Link para Instagram pessoal' className='icons' />
              </a>
            </div>
          </div>
          <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
            <button className='hide_button' id='next_button_1' onClick={() => { 
              let Container_1 = document.getElementById('container_1') //remove o container_1
              let Container_2 = document.getElementById('container_2') //mostra o container_2
              toggleSlide(Container_1,Container_2, 'next')
              }}>
                <img src={Arrow} alt="Seta" id="tripplearrow" className={'icons'} />
            </button>
          </div>
        </div>
      </div>

      <div className="container" id='container_2' style={{opacity: 0, zIndex: 1}}>
        <div className='info' style={{marginTop:'30px'}}>
          <img src={Python} style={{width:'150px', height:'150px'}} alt='Python icon' />
        </div>
        <div className="content" id='content_2'>
          <div className='div_grid'>
            <div className='div_flex'>
              <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
                <button className='hide_button' id='back_button_1' onClick={()=> {
                  let Container_1 = document.getElementById('container_1')//mostra o container_1
                  let Container_2 = document.getElementById('container_2')//remove o container_2
                  toggleSlide(Container_1,Container_2, 'prev')
                  }}>
                  <img src={Arrow} className={'icons'} style={{ transform: 'rotate(180deg)'}} />
                </button>
              </div>
              <div>
                <div className="info">
                  <a  href='#' style={{fontSize:'35px', justifySelf:'center'}}>Pyhton</a>
                  <p style={{color:'white'}}>1 ano de experiência.<br />
                  Experiência desenvolvida a partir de bolsas e estágio dentro da UNEMAT,<br />
                  tendo os resultados usados para ganhos pessoais no mercado de trabalho da região.
                  </p>
                  <ul style={{color:'white'}}> Aplicação em:
                    <li>Automação de tarefas</li>
                    <li>Analise e processamento de dados</li>
                    <li>Soluções web para resolução de problemas</li>
                  </ul>
                </div>
              </div>
              <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
                <button className='hide_button' id='next_button_2' onClick={()=> {
                  let Container_1 = document.getElementById('container_2')//remove o container_2
                  let Container_2 = document.getElementById('container_3')//mostra o container_3
                  toggleSlide(Container_1,Container_2, 'next')
                  }}>
                  <img src={Arrow} className={'icons'} />
                </button>
              </div>
            </div>
            <img src={Home} alt='Home icon' className='icons' style={{justifySelf:'center'}} onClick={() => {
              let Container_1 = document.getElementById('container_1') //mostra o container_1
              let Container_2 = document.getElementById('container_2') //remove o container_2
              toggleSlide(Container_1,Container_2, 'prev')
            }}></img>
          </div>
        </div>
      </div>

      <div className="container" id='container_3' style={{opacity: 0, zIndex: 1}}>
          <div className='info' style={{marginTop:'30px'}}>
            <img src={JS} style={{width:'150px', height:'150px'}} alt='JS icon' />
          </div>
        <div className="content" id='content_3'>
          <div className='div_grid'>
            <div className='div_flex'>
              <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
                <button className='hide_button' id='back_button_2' onClick={()=> {
                  let Container_1 = document.getElementById('container_2')//mostra o container_2
                  let Container_2 = document.getElementById('container_3')//remove o container_3
                  toggleSlide(Container_1,Container_2, 'prev')
                  }}>
                  <img src={Arrow} className={'icons'} style={{ transform: 'rotate(180deg)'}} />
                </button>
              </div>
              <div className="info">
                <a  href='#' style={{fontSize:'35px', justifySelf:'center'}}>JavaScript</a>
                <p style={{color:'white'}}>
                  1 ano de experiência.<br />
                  Experiência desenvolvida a partir de bolsas e estágio dentro da UNEMAT,
                  tendo assim aprimorado o conhecimento em iniciativas particulares tanto para ganho de conhecimento quanto para facilitação de rotinas.
                </p>
                <ul style={{color:'white'}}>Aplicação em:
                  <li>Iniciativas web</li>
                  <li>Análise e processamento de dados</li>
                </ul>
              </div>
              <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
                <button className='hide_button' id='next_button_3' onClick={()=> {
                  let Container_1 = document.getElementById('container_3')//remove o container_3
                  let Container_2 = document.getElementById('container_4')//mostra o container_4
                  toggleSlide(Container_1,Container_2, 'next')
                  }}>
                  <img src={Arrow} className={'icons'} />
                </button>
              </div>
            </div>
            <img src={Home} alt='Home icon' className='icons' style={{justifySelf:'center'}} onClick={() => {
              let Container_1 = document.getElementById('container_1') //mostra o container_1
              let Container_2 = document.getElementById('container_3') //remove o container_3
              toggleSlide(Container_1,Container_2, 'prev')
            }}></img>

          </div>
        </div>
      </div>

      <div className="container" id='container_4' style={{opacity: 0, zIndex: 1}}>
        <div className='info' style={{marginTop:'30px'}}>
          <img src={ReactLogo} style={{width:'150px', height:'150px'}} alt='React icon' />
        </div>
        <div className="content" id='content_4'>
          <div style={{display:'grid', alignItems:'center'}}>
            <button className='hide_button' id='back_button_3' onClick={()=> {
              let Container_1 = document.getElementById('container_3')//mostra o container_2
              let Container_2 = document.getElementById('container_4')//remove o container_3
              toggleSlide(Container_1,Container_2, 'prev')
              }}>
              <img src={Arrow} className={'icons'} style={{ transform: 'rotate(180deg)'}} />
            </button>
          </div>
          <div className="info">
            <a  href='#' style={{fontSize:'35px', justifySelf:'center'}}>React</a>
            <p style={{color:'white'}}>
              6 meses de experiência.
              Experiência desenvolvida a partir de estágio dentro da UNEMAT,
              tendo sido desenvolvido durante as matérias de estágio e também em soluções particulares criadas para resolução de problemas assim como busca por maior aprendizagem.
              como exemplo esta interface foi desenvolvida por mim em React em momentos oportunos
            </p>
            <ul style={{color:'white'}}>Aplicação em:
              <li>Soluções web</li>
              <li>Melhoria de estilização e estruturamento</li>
            </ul>
          </div>
          <div style={{display:'grid', alignItems:'center', padding:'5px'}}>
            <button className='hide_button' id='next_button_4' onClick={()=> {
              let Container_1 = document.getElementById('container_4')//remove o container_3
              let Container_2 = document.getElementById('container_1')//mostra o container_4
              toggleSlide(Container_1,Container_2, 'next')
              }}>
              <img src={Arrow} className={'icons'} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Container;