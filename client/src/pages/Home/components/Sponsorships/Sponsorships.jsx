import React from 'react'
import "./sponsorships.css";
import {useGSAP} from '@gsap/react'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Sponsorships() {
  useGSAP(() => {

  gsap.to(".middle-card", {
    scrollTrigger: {
      scrub: 0,
      start : "+2000",
    },
    scale: 3,
  });
  
 
  // gsap.to(".left-card", {
  //   scrollTrigger: {
  //     scrub: 3,
  //     start: "+1000",
  //   },
  //   x: 500,
  //   rotate: 0,
  // });


  // gsap.to(".right-card", {
  //   scrollTrigger: {
  //     scrub: 3,
  //     start: "+1000",
  //   },
  //   x: -500,
  //   rotate: 0,
  // });
  gsap.to("#title-2", {
    scrollTrigger: {
      scrub: 1,
      start: "+2000",
    },
    scale: 1.5,
  });
}, { scope: document.getElementById("container") })

  return (

      <section id = "sponsorships" className="bottom-background">
            <div className="title-division">
              <div id="title-2" className='mb-1 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium'>OUR PARTNERS</div>
            </div>
            <div id="cards-division">
              {/* <div className="left-card">
              <svg width="full" height="auto" viewBox="0 0 165 50" color = "white" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.0398 25.6448V27.6507L46.8637 26.027L44.9825 26.6478L46.1581 25.024L44.9825 23.4003L46.8637 24.0211L48.0398 22.3973V24.4032L49.9215 25.024L48.0398 25.6448ZM47.0992 31.6146L46.5819 33.5725L45.8758 31.7096L43.9005 31.8051L45.4525 30.5161L44.7475 28.6057L46.4404 29.7042L47.993 28.4146L47.4752 30.3725L49.1219 31.471L47.0992 31.6146ZM44.6534 37.1061L43.6654 38.8729L43.4772 36.8675L41.5487 36.4378L43.3363 35.6259L43.1481 33.62L44.4651 35.1007L46.2522 34.2888L45.2648 36.0556L46.5819 37.5358L44.6534 37.1061ZM42.6775 42.6936L40.8899 41.7862L39.4788 43.2189L39.8079 41.213L38.0208 40.3061L39.9961 39.9714L40.3258 37.966L41.2191 39.7328L43.1949 39.3986L41.7837 40.8313L42.6775 42.6936ZM37.597 46.6575L36.1391 45.3204L34.3988 46.3228L35.1985 44.5085L33.74 43.1714L35.7158 43.3619L36.5155 41.5476L36.9388 43.5055L38.9141 43.6966L37.1738 44.6996L37.597 46.6575ZM31.7647 47.1347L31.6701 49.1406L30.5886 47.4213L28.6595 47.9466L29.883 46.3708L28.801 44.6996L30.6354 45.4154L31.9056 43.8397L31.8115 45.8456L33.6932 46.5619L31.7647 47.1347ZM25.8845 48.0901L25.2731 50L24.6616 48.0901H22.6858L24.2851 46.8961L23.6737 44.9857L25.2731 46.1798L26.8724 44.9857L26.261 46.8961L27.8603 48.0901H25.8845ZM19.9575 47.4694L18.876 49.1406L18.7814 47.1347L16.8529 46.6094L18.6878 45.8931L18.5937 43.8877L19.8634 45.4634L21.6978 44.7471L20.6163 46.4184L21.8866 47.9946L19.9575 47.4694ZM16.1473 46.2753L14.407 45.2723L12.9491 46.6094L13.3723 44.6515L11.632 43.6486L13.6073 43.4575L14.0306 41.4996L14.8303 43.3144L16.8061 43.1233L15.3476 44.4605L16.1473 46.2753ZM9.60887 41.7382L7.82127 42.6461L8.71559 40.8313L7.30443 39.3986L9.27974 39.7328L10.1735 37.9179L10.5027 39.9239L12.4785 40.258L10.6909 41.1654L11.0205 43.1714L9.60887 41.7382ZM6.88067 38.8254L5.89275 37.0586L3.96424 37.4883L5.28129 36.0076L4.29388 34.2408L6.08098 35.0526L7.39854 33.5725L7.2098 35.5779L8.99792 36.3897L7.06889 36.7719L6.88067 38.8254ZM1.51836 31.471L3.16455 30.3725L2.64719 28.4146L4.19926 29.6561L5.84595 28.5582L5.14037 30.468L6.69296 31.7576L4.71713 31.6621L4.01155 33.5244L3.49419 31.5665L1.51836 31.471ZM2.55308 24.3557V22.3498L3.72922 23.9735L5.61093 23.3528L4.4348 24.976L5.61093 26.5997L3.72922 25.9789L2.55308 27.6027V25.5973L0.671875 24.976L2.55308 24.3557ZM3.49419 18.386L4.01155 16.4281L4.71713 18.2904L6.69296 18.1949L5.14037 19.4845L5.84595 21.3468L4.19926 20.2483L2.64719 21.5379L3.16455 19.58L1.51836 18.4815L3.49419 18.386ZM5.89275 12.8939L6.88067 11.1271L7.06889 13.1331L8.99792 13.5627L7.2098 14.3746L7.39854 16.38L6.08098 14.8999L4.29388 15.7117L5.28129 13.9449L3.91744 12.4642L5.89275 12.8939ZM7.86858 7.30687L9.65619 8.21429L11.0673 6.78163L10.7382 8.78704L12.5253 9.69446L10.55 10.0286L10.2203 12.0345L9.32705 10.2197L7.35123 10.5538L8.76239 9.12119L7.86858 7.30687ZM12.9959 3.34304L14.4538 4.68016L16.1946 3.67719L15.3949 5.49203L16.8529 6.82915L14.8776 6.63806L14.0779 8.50041L13.6546 6.54251L11.6788 6.35142L13.4191 5.34845L12.9959 3.34304ZM18.8287 2.86532L18.9228 0.859909L20.0049 2.53117L21.9334 2.00593L20.6631 3.58165L21.7452 5.25343L19.9107 4.5371L18.6405 6.11282L18.7346 4.10689L16.9002 3.39056L18.8287 2.86532ZM24.7084 1.91039L25.3199 0L25.9318 1.91039H27.9071L26.3078 3.10444L26.9192 5.01431L25.3199 3.82025L23.7205 5.01431L24.3325 3.10444L22.7331 1.91039H24.7084ZM30.5886 2.53117L31.6701 0.859909L31.7647 2.86532L33.6932 3.39056L31.8588 4.10689L31.9524 6.11282L30.6827 4.5371L28.8483 5.25343L29.9298 3.58165L28.7068 2.00593L30.5886 2.53117ZM34.3988 3.72523L36.1391 4.72767L37.597 3.39056L37.1738 5.34845L38.9141 6.35142L36.9388 6.59054L36.5155 8.54844L35.7158 6.68557L33.74 6.87666L35.1985 5.53954L34.3988 3.72523ZM40.9367 8.26181L42.7248 7.35438L41.8305 9.16922L43.2417 10.6019L41.2664 10.2677L40.3726 12.0821L40.0434 10.0286L38.0676 9.69446L39.8079 8.78704L39.4788 6.78163L40.9367 8.26181ZM43.7122 11.2227L44.7002 12.9895L46.6287 12.5598L45.3116 14.04L46.2995 15.8073L44.5119 14.9954L43.1949 16.4756L43.3831 14.4702L41.5955 13.6103L43.524 13.1806L43.7122 11.2227ZM49.0745 18.5771L47.4284 19.6756L47.9457 21.6335L46.3936 20.3439L44.7475 21.4424L45.4525 19.58L43.9005 18.2904L45.8758 18.386L46.5819 16.5236L47.0992 18.4815L49.0745 18.5771ZM27.0541 29.3553L26.6733 26.9642C27.4822 26.8686 28.339 26.8204 29.1474 26.8204C31.0035 26.8204 32.098 27.1075 32.4309 27.2989C31.955 27.7292 31.3843 28.0163 30.8131 28.2552C29.6234 28.7336 28.339 29.1159 27.0541 29.3553ZM25.0555 16.3468C26.0548 16.1554 27.0541 15.8683 28.0534 15.5337L31.8598 25.1943C30.9556 25.0029 30.0521 24.9554 29.1474 24.9554C28.196 24.9554 27.2918 25.0029 26.3883 25.0986L25.0555 16.3468ZM20.2977 15.5813C17.8709 15.5813 15.9675 15.0077 15.4442 14.0508C16.2531 14.6725 17.9183 15.0077 19.9169 15.0077C21.2013 15.0077 22.4389 14.912 23.7238 14.6725C27.0541 14.0508 29.8138 12.8555 30.9556 11.564C30.385 12.9988 27.4349 14.5768 23.7238 15.2466C22.5814 15.4856 21.4396 15.5813 20.2977 15.5813ZM19.108 16.9204C20.1546 16.9204 21.2013 16.8728 22.2485 16.7295L23.5807 25.4814C22.7718 25.6727 21.9629 25.8641 21.2013 26.1031C20.2498 26.3901 19.2984 26.7729 18.4416 27.2508L19.108 16.9204ZM18.4895 29.4029C18.9176 29.0207 19.4409 28.6855 20.0121 28.4947C21.2013 27.9682 22.4862 27.5854 23.8184 27.3465L24.1992 29.7857C23.4382 29.8814 22.6293 29.9289 21.7725 29.9289C19.9169 29.9289 18.8703 29.6424 18.4895 29.4029ZM35.8092 35.2858C35.9517 35.6204 36.1899 35.8594 36.5229 36.0032C36.6654 36.0507 36.8558 36.0988 36.9989 36.0988C37.1887 36.0988 37.3797 36.0507 37.5695 36.0032C37.9503 35.8594 38.2832 35.6204 38.4736 35.2377C38.6162 34.9511 38.664 34.616 38.5215 34.2813L30.7179 14.3379C31.0514 14.1465 31.3364 13.9551 31.622 13.7162C32.7639 12.7598 32.5256 10.6553 31.1939 10.0336C30.385 9.65083 29.0527 9.45946 27.3876 9.45946C25.8171 9.45946 24.2466 9.60325 22.6293 9.79462C18.9176 10.4639 15.8723 11.6116 14.6353 12.7598C13.5408 13.8119 13.8737 15.9164 15.2538 16.4424C15.5394 16.5857 15.825 16.6814 16.1579 16.7295L14.7778 37.9639C14.7305 38.2986 14.873 38.6337 15.1107 38.8727C15.3963 39.1598 15.7771 39.3506 16.2053 39.3506C16.586 39.3987 16.8716 39.2554 17.1572 39.0641C17.395 38.8727 17.5854 38.5381 17.5854 38.2029L18.0613 31.3161C19.2032 31.6508 20.4402 31.8421 21.6773 31.7945C22.0581 31.7945 22.4862 31.7945 22.867 31.7464C23.3903 31.6989 23.9136 31.6508 24.437 31.6032L25.7692 40.1637C25.8171 40.4988 26.0075 40.7859 26.2931 40.9767C26.5781 41.1205 26.8637 41.2162 27.1493 41.2162C27.2918 41.2162 27.3876 41.1681 27.4822 41.1681C27.8152 41.1205 28.1486 40.9292 28.3864 40.6421C28.5768 40.355 28.672 40.0204 28.6241 39.6858L27.2918 31.1247C28.1486 30.9815 28.9575 30.7901 29.6713 30.5512C30.9556 30.216 32.1454 29.6424 33.2399 28.925L35.8092 35.2858ZM161.732 3.16498C160.506 3.16498 159.525 4.16068 159.525 5.40521C159.525 6.65013 160.506 7.64583 161.732 7.64583C162.958 7.64583 163.938 6.65013 163.938 5.40521C163.938 4.16068 162.958 3.16498 161.732 3.16498ZM161.732 8.10811C160.261 8.10811 159.069 6.89896 159.069 5.40521C159.069 3.91185 160.261 2.7027 161.732 2.7027C163.203 2.7027 164.394 3.91185 164.394 5.40521C164.394 6.89896 163.203 8.10811 161.732 8.10811ZM162.853 5.01405C162.887 4.76522 162.817 4.51639 162.607 4.40986C162.362 4.23179 162.047 4.16064 161.767 4.19641H160.821V6.79239H161.241V5.90322H161.802L162.432 6.79239H162.993L162.292 5.83207C162.642 5.72554 162.887 5.36979 162.853 5.01405ZM162.292 5.36979C162.152 5.47632 161.977 5.51209 161.767 5.47632H161.241V4.55177H161.802C161.977 4.55177 162.152 4.58754 162.292 4.65869C162.397 4.72984 162.467 4.87175 162.432 5.01405C162.432 5.15634 162.397 5.26326 162.292 5.36979ZM55.9114 22.607V19.4725H57.3277V6.52371H55.9114V3.37838H65.4242L67.3268 5.28071V10.4581L65.9633 11.8524L67.3268 13.2899V20.6182L65.3925 22.607H55.9114ZM60.393 6.52371V10.5229H64.251V6.52371H60.393ZM64.251 13.6899H60.393V19.4725H64.251V13.6899ZM68.874 19.4725H70.153L74.3809 3.37838H77.1713L81.3676 19.4725H82.9108V22.607H76.8648V19.4725H78.3869L78.0381 18.1863H73.4719L73.1442 19.4725H74.7614V22.607H68.874V19.4725ZM75.8078 9.26911L74.2646 15.0842H77.2559L75.8078 9.26911ZM84.458 3.37838H94.2668L95.8734 4.94564V13.2251L94.2668 14.9329H93.2521L95.5035 19.4725H96.8035V22.607H93.6855L90.0071 14.9329H88.9396V19.4725H90.3454V22.607H84.458V19.4725H85.8743V6.52371H84.458V3.37838ZM92.7976 6.52371H88.9396V11.7875H92.7976V6.52371ZM98.3508 5.05372L100.021 3.37838H106.881L108.614 5.10777V8.77191H105.538V6.52371H101.427V11.1066H106.859L108.614 12.9116V20.2399L106.363 22.607H100.391L98.3508 20.5534V17.1486H101.427V19.4725H105.538V14.2195H100.105L98.3508 12.4252V5.05372ZM110.172 10.2419V3.37838H122.993V10.2419H120.023V6.52371H118.12V19.4725H119.526V22.607H113.639V19.4725H115.045V6.52371H113.142V10.2419H110.172ZM124.54 20.5318V5.45365L126.538 3.37838H132.573L134.55 5.45365V20.5318L132.531 22.607H126.432L124.54 20.5318ZM131.474 6.52371H127.616V19.4725H131.474V6.52371ZM136.097 20.5318V5.45365L138.095 3.37838H144.13L146.107 5.45365V20.5318L144.088 22.607H137.989L136.097 20.5318ZM143.031 6.52371H139.173V19.4725H143.031V6.52371ZM147.654 3.37838H153.541V6.52371H152.136V19.4725H155.994V14.9761H159.069V22.607H147.654V19.4725H149.07V6.52371H147.654V3.37838ZM55.9114 27.717L57.5814 26.0416H64.4412L66.1747 27.771V31.4352H63.0989V29.1869H58.9872V33.7698H64.4201L66.1747 35.5749V42.9032L63.9233 45.2703H57.9513L55.9114 43.2166V39.8119H58.9872V42.1358H63.0989V36.8827H57.666L55.9114 35.0885V27.717ZM67.7325 32.9051V26.0416H80.5537V32.9051H77.5836V29.1869H75.681V42.1358H77.0868V45.2703H71.1994V42.1358H72.6052V29.1869H70.7026V32.9051H67.7325ZM82.1009 43.195V28.1169L84.0986 26.0416H90.134L92.1105 28.1169V43.195L90.0917 45.2703H83.9929L82.1009 43.195ZM89.0347 29.1869H85.1767V42.1358H89.0347V29.1869ZM93.6578 26.0416H103.467L105.073 27.6089V35.8883L103.467 37.5961H102.452L104.703 42.1358H106.003V45.2703H102.885L99.2069 37.5961H98.1394V42.1358H99.5452V45.2703H93.6578V42.1358H95.0741V29.1869H93.6578V26.0416ZM101.997 29.1869H98.1394V34.4508H101.997V29.1869ZM107.551 42.1358H108.967V29.1869H107.551V26.0416H118.966V31.8135H115.89V29.1869H112.032V33.1213H115.89V36.2883H112.032V42.1358H115.89V38.1473H118.966V45.2703H107.551V42.1358Z" fill="currentColor"/>
</svg>
              </div> */}

              <div className="middle-card">
                
              <img src = "./sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png" alt = "IEEE Young Professionals" className = "sponsor-logo"/> 
              </div>
              {/* <div className="right-card"> */}
              {/* <svg width="full" height="auto" viewBox="0 0 154 50" fill="none" color = "white" xmlns="http://www.w3.org/2000/svg">
<path d="M153.395 0L121.441 49.895L61.3853 37.9202L0.392578 47.6891L16.8377 22.0588C17.3581 22.3739 17.9826 22.584 18.7112 22.6891L4.45182 45.063L61.4894 35.9244L120.505 47.6891L132.89 28.3613H132.995C134.035 28.3613 134.868 27.9412 135.284 27.6261L134.868 26.7857L134.139 26.2605L149.127 2.83613L73.9794 17.542C74.4998 16.5966 75.0202 15.7563 75.3325 15.2311L153.395 0ZM104.476 19.4328C105.413 19.4328 106.141 18.4874 106.141 17.542C106.141 16.7017 105.621 16.3866 104.996 16.3866C103.955 16.3866 103.227 17.437 103.227 18.2773C103.227 18.9076 103.643 19.4328 104.476 19.4328ZM22.2501 12.8151C22.3541 12.8151 22.5623 12.8151 22.6664 12.8151H22.7705L30.6808 0.630252L70.8569 16.1765C70.961 16.0714 70.961 15.9664 71.0651 15.8613C71.5855 14.916 72.0018 14.2857 72.0018 14.2857L75.0202 14.0756C72.8345 17.7521 68.6712 24.5798 68.3589 25.105C66.5895 28.1513 65.7568 29.6218 65.7568 30.4622C65.7568 30.7773 65.8609 30.9874 66.1732 30.9874C67.1099 30.9874 69.0875 29.5168 73.0427 24.4748C73.3549 24.0546 74.2917 22.6891 74.708 22.1639L77.5182 22.0588C75.957 24.4748 73.7712 27.7311 72.8345 29.4118C72.4182 30.042 72.21 30.4622 72.21 30.6723C72.21 30.9874 72.4182 31.0924 72.6263 31.0924C73.6672 31.0924 75.7488 29.4118 78.6631 25.2101C79.3917 24.1597 79.9121 23.3193 80.6407 22.2689L83.451 22.1639C82.6183 23.4244 81.0571 26.0504 80.8489 26.3655C79.4958 28.5714 78.7672 29.937 78.7672 30.5672C78.7672 30.8824 78.8713 31.0924 79.2876 31.0924C81.3693 31.0924 84.1796 27.3109 84.9081 25.3151C84.9081 23.9496 85.1163 22.7941 85.6367 22.1639C85.8449 21.8487 86.1571 21.5336 86.7816 21.5336C87.198 21.5336 87.5102 21.7437 87.5102 22.0588C87.5102 22.584 86.8857 24.0546 85.8449 25.8403C86.1571 26.5756 86.7816 26.9958 87.5102 27.2059C88.6551 25.105 91.2572 21.6387 94.692 21.6387C95.941 21.6387 96.4614 22.0588 96.4614 23.0042C96.4614 24.7899 93.7552 27.3109 90.0082 27.8361C89.696 28.4664 89.3837 29.2017 89.3837 29.937C89.3837 30.5672 89.696 31.0924 90.6327 31.0924C93.6511 31.0924 97.294 26.4706 99.2716 23.8445C99.3757 23.6345 100.208 22.584 100.417 22.2689L103.227 22.0588C100.833 25.8403 100.104 27.1008 100.104 27.1008C99.3757 28.3613 98.439 29.937 98.439 30.4622C98.439 30.7773 98.6471 30.9874 98.9594 30.9874C100.104 30.9874 102.186 29.0966 105.1 26.0504C106.349 24.7899 107.702 23.3193 108.639 22.2689C108.951 21.1134 109.576 20.5882 110.304 20.5882C110.929 20.5882 111.137 20.9034 111.137 21.4286C111.137 22.0588 110.617 22.479 110.096 22.584C110.096 22.6891 110.096 22.8992 110.096 23.1092C110.096 24.2647 110.2 25.105 110.2 26.3655C110.2 27.521 109.992 28.5714 109.368 29.6218C110.825 28.4664 113.739 25.6303 115.509 24.0546C117.278 22.3739 119.047 21.7437 120.401 21.7437C121.545 21.7437 122.17 22.1639 122.17 23.1092C122.17 25.4202 118.319 27.6261 115.717 27.9412C115.405 28.4664 115.092 29.4118 115.092 30.1471C115.092 30.7773 115.509 31.1975 116.133 31.1975C118.215 31.1975 120.296 28.9916 121.962 26.9958C124.564 23.7395 125.709 21.9538 127.686 21.9538C128.727 21.9538 129.248 22.479 129.248 23.2143C129.248 24.1597 128.831 25 127.895 26.6807C130.913 22.7941 132.37 21.9538 133.411 21.9538C134.14 21.9538 134.66 22.374 134.66 22.8992C133.619 23.2143 132.578 24.6849 132.578 25.7353C132.578 26.0504 132.682 26.2605 132.786 26.4706C132.891 26.5756 133.099 26.6807 133.411 26.6807C133.723 26.6807 134.035 26.5756 134.452 26.3655L134.66 26.8908C134.139 27.2059 133.619 27.3109 132.89 27.3109C131.537 27.3109 130.809 26.6807 130.809 25.6303C130.809 25 131.121 24.2647 131.537 23.6345C129.768 25.2101 126.125 29.937 124.876 32.0378L122.066 32.1429C122.482 31.5126 124.876 27.9412 126.541 25C127.062 24.0546 127.374 23.6345 127.374 23.2143C127.374 23.0042 127.27 22.8992 127.062 22.8992C126.125 22.8992 124.668 24.7899 122.69 27.3109C121.233 29.2017 118.631 32.3529 115.196 32.3529C113.427 32.3529 112.594 31.4076 112.594 30.1471C112.594 28.9916 113.011 27.9412 113.635 26.9958C112.802 27.7311 111.97 28.4664 111.137 29.2017C109.576 30.6723 107.494 32.3529 104.684 32.3529C103.227 32.3529 102.394 31.7227 102.394 30.9874C102.394 30.5672 102.706 30.2521 103.019 30.2521C103.955 30.2521 103.643 31.6176 104.892 31.6176C106.349 31.6176 107.494 30.2521 108.223 26.0504C108.327 25.5252 108.535 24.3697 108.743 23.6345C106.557 25.9454 104.996 27.521 104.372 28.2563C102.498 30.1471 100.312 32.2479 98.2308 32.2479C97.0859 32.2479 96.3573 31.6176 96.3573 30.6723C96.3573 30.042 96.6695 29.2017 97.3981 27.7311C95.7328 29.5168 93.1307 32.2479 89.9041 32.2479C88.0306 32.2479 87.198 31.3025 87.198 29.937C87.198 29.3067 87.4061 28.5714 87.7184 27.8361C86.9898 27.6261 86.3653 27.2059 85.949 26.5756C85.1163 27.9412 84.0755 29.3067 82.6183 30.5672C81.1611 31.9328 79.8081 32.3529 78.6631 32.3529C77.5182 32.3529 76.7897 31.8277 76.7897 30.7773C76.7897 30.042 77.206 29.2017 77.5182 28.4664C75.957 30.3571 73.9794 32.3529 71.7937 32.3529C70.8569 32.3529 70.0242 31.9328 70.0242 30.7773C70.0242 30.042 70.4406 29.3067 71.0651 28.1513C69.712 29.6218 67.5262 32.3529 65.0282 32.3529C63.8833 32.3529 63.2588 31.7227 63.2588 30.7773C63.2588 29.937 63.6752 29.0966 63.9874 28.4664C63.6752 28.8866 63.3629 29.2017 63.1548 29.5168C61.3853 31.5126 59.9282 32.3529 58.3669 32.3529C57.222 32.3529 56.4934 31.7227 56.4934 30.5672C56.4934 30.042 56.7016 29.3067 56.9098 28.7815C55.2444 30.5672 53.3709 32.3529 51.2893 32.3529C50.1444 32.3529 49.6239 31.7227 49.6239 30.8824C49.6239 30.3571 49.8321 29.7269 50.2484 28.8866L49.6239 29.5168C48.1668 30.9874 46.3974 32.2479 44.732 32.2479C43.6912 32.2479 42.9626 31.7227 42.9626 30.6723C42.9626 29.937 43.483 28.6765 44.8361 26.7857L44.0034 27.6261C39.8401 31.6176 35.6768 34.0336 31.2012 34.0336C27.8705 34.0336 26.8297 32.563 26.8297 30.7773C26.8297 30.3571 26.9338 29.937 26.9338 29.937L26.3093 30.6723C24.644 32.7731 23.395 33.9286 21.7296 33.9286C20.3766 33.9286 19.2316 33.2983 19.2316 32.0378C19.2316 31.3025 19.648 30.5672 20.1684 29.6218C21.3133 27.7311 24.4358 23.1092 26.7256 19.7479C25.2685 20.6933 23.1868 21.4286 20.4806 21.4286C16.6296 21.4286 14.7561 19.8529 14.7561 17.542C14.652 14.916 17.4622 12.9202 22.2501 12.8151ZM115.925 27.2059C118.111 26.8908 120.817 24.5798 120.817 22.8992C120.817 22.584 120.713 22.374 120.401 22.374C119.152 22.479 117.59 24.1597 115.925 27.2059ZM90.4245 27.2059C92.6103 26.8908 95.3165 24.6849 95.3165 22.8992C95.3165 22.584 95.1083 22.374 94.796 22.374C93.443 22.479 91.7776 24.7899 90.4245 27.2059ZM28.9114 25.2101C30.993 22.1639 33.0747 18.9076 34.4278 16.9118C33.8033 16.5966 33.1788 16.2815 32.6584 15.9664C31.9298 16.9118 23.2909 29.8319 22.6664 30.8824C22.146 31.7227 22.0419 32.1429 22.0419 32.3529C22.0419 32.563 22.146 32.7731 22.4582 32.7731C22.7705 32.7731 23.1868 32.563 23.7072 32.1429C24.9562 31.0924 26.6215 28.6765 28.9114 25.2101ZM33.0747 22.374L33.6992 21.3235C35.6768 21.3235 37.238 21.3235 38.2789 20.7983C40.7769 19.6429 42.0259 16.8067 42.0259 15.4412C42.0259 14.4958 41.6095 13.6555 40.3605 13.6555C38.487 13.6555 36.7176 15.5462 35.6768 16.9118C36.6135 17.437 37.3421 17.9622 37.7584 18.3824L37.4462 18.9076C36.8217 18.3824 36.0931 17.9622 35.3645 17.437C34.1155 19.0126 31.4094 23.3193 29.5359 26.0504C30.7849 25.2101 32.3461 25 33.387 25V25.7353C29.744 25.8403 27.5583 28.2563 27.5583 30.7773C27.5583 32.1429 28.2869 33.0882 30.2645 33.0882C34.8441 33.0882 37.8625 28.1513 37.8625 25C37.8625 23.5294 37.3421 22.2689 35.0523 22.2689H34.0115C33.5951 22.2689 33.2829 22.374 33.0747 22.374ZM66.1732 23.5294C66.1732 23.0042 65.7568 22.584 65.1323 22.584C63.9874 22.584 62.9466 23.3193 61.3853 25.2101C60.1363 26.8908 58.7833 29.3067 58.7833 30.3571C58.7833 30.6723 58.8873 30.9874 59.4078 30.9874C59.9282 30.9874 60.8649 30.5672 62.218 29.0966C63.467 27.7311 64.9242 25.8403 65.965 23.9496C66.1732 23.8445 66.1732 23.6345 66.1732 23.5294ZM25.0603 13.0252C25.4766 13.0252 25.997 13.1303 26.4134 13.2353C28.0787 13.5504 29.4318 13.9706 30.6808 14.3908C30.889 14.0756 31.0971 13.7605 31.3053 13.4454L34.636 13.3403C34.3237 13.7605 33.8033 14.6008 33.0747 15.4412C33.6992 15.7563 34.3237 16.0714 34.9482 16.3866C37.0299 13.7605 39.0074 12.5 41.5054 12.5C44.2116 12.5 45.2524 14.0756 45.2524 15.6513C45.2524 17.1218 44.4198 18.8025 43.3789 19.7479C42.0259 21.1134 40.1524 21.7437 38.6952 22.0588C39.5279 22.479 40.985 23.2143 40.985 25.6303C40.985 27.6261 39.8401 29.5168 38.5911 30.9874C41.0891 29.5168 44.6279 26.1555 46.1892 24.1597C46.5014 23.7395 47.23 22.7941 47.5423 22.2689L50.4566 22.0588C50.4566 22.0588 46.7096 27.7311 45.8769 29.2017C45.4606 30.042 45.2524 30.3571 45.2524 30.5672C45.2524 30.7773 45.3565 30.9874 45.6688 30.9874C46.8137 30.9874 48.9994 29.0966 50.4566 26.9958C51.1852 26.0504 53.6832 22.2689 53.6832 22.2689L56.7016 22.0588C54.3077 25.8403 53.475 27.1008 53.475 27.1008C52.6423 28.3613 52.0178 29.5168 51.9138 30.1471C51.8097 30.3571 51.8097 30.4622 51.8097 30.5672C51.8097 30.8824 51.9138 30.9874 52.226 30.9874C53.9954 30.9874 57.1179 26.8908 58.0547 25.6303C59.8241 23.3193 62.1139 21.7437 64.5078 21.7437C65.5487 21.7437 66.2772 22.1639 66.5895 22.8992C67.214 21.8487 68.3589 20.063 69.2957 18.3824C69.3997 18.1723 69.5038 18.0672 69.6079 17.9622L31.4094 3.04622L25.0603 13.0252ZM15.901 17.8571C15.901 18.5924 16.1091 19.2227 16.6296 19.7479C16.9418 20.063 17.3581 20.3782 17.8786 20.4832L21.6256 14.7059C22.0419 14.7059 22.5623 14.6008 23.0827 14.6008C23.395 14.6008 23.7072 14.6008 24.0195 14.6008L20.0643 20.7983C20.2725 20.7983 20.4806 20.7983 20.6888 20.7983C21.0011 20.7983 21.3133 20.7983 21.6256 20.7983C25.3725 20.4832 27.6624 18.4874 28.495 17.437C28.495 17.437 30.2645 14.916 30.3685 14.8109C28.5991 14.1807 26.1011 13.4454 23.0827 13.4454C18.5031 13.6555 15.901 15.4412 15.901 17.8571ZM126.958 48.8445C126.958 49.1597 126.854 49.4748 126.646 49.6849C126.437 49.895 126.125 50 125.813 50C125.501 50 125.188 49.895 124.98 49.6849C124.772 49.4748 124.668 49.1597 124.668 48.8445C124.668 48.5294 124.772 48.2143 124.98 48.0042C125.188 47.7941 125.501 47.6891 125.813 47.6891C126.125 47.6891 126.437 47.7941 126.646 48.0042C126.854 48.2143 126.958 48.4244 126.958 48.8445ZM126.75 48.8445C126.75 48.5294 126.646 48.3193 126.437 48.1092C126.229 47.8992 126.021 47.7941 125.709 47.7941C125.397 47.7941 125.188 47.8992 124.98 48.1092C124.772 48.3193 124.668 48.5294 124.668 48.8445C124.668 49.1597 124.772 49.3698 124.98 49.5798C125.188 49.7899 125.397 49.895 125.709 49.895C126.021 49.895 126.229 49.7899 126.437 49.5798C126.646 49.3698 126.75 49.0546 126.75 48.8445ZM126.333 49.4748H126.021L125.813 48.9496H125.501V49.4748H125.188V48.0042H125.813C126.021 48.0042 126.125 48.0042 126.229 48.1092C126.333 48.2143 126.333 48.3193 126.333 48.4244C126.333 48.6345 126.229 48.7395 126.021 48.8445L126.333 49.4748ZM125.501 48.7395H125.813C126.021 48.7395 126.125 48.6345 126.125 48.5294C126.125 48.4244 126.021 48.3193 125.917 48.3193H125.605V48.7395H125.501Z" fill="currentColor"/>
</svg> */}

              {/* </div> */}
            </div> 
          </section>
   
  )
}

export default Sponsorships;