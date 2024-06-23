// show menu

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

const navLink = document.querySelectorAll('.nav__link')

const bgHeader = () =>{
    const header = document.getElementById('header')

}

window.addEventListener('scroll', bgHeader)


gsap.from('.home__shadow', 1.5, {opacity: 0, y:-300, delay: .2})
gsap.from('.home__points', 1.5, {opacity: 0, y:-300, delay: .4})
gsap.from('.home__grass', 1.5, {opacity: 0, y:300, delay: .2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__pumpkin', 1.5, {opacity: 0, y:-300, delay: .6, ease: 'bounce.out'})
gsap.from('.home__stone', 1.5, {opacity: 0, y:300, delay: .8, ease: 'elastic.out(1, .5)'})
gsap.from('.home__moon', 1.5, {opacity: 0, y:300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__titles', 1.5, {opacity: 0, y:-300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__tree', 1.5, {opacity: 0, y:300, delay: 2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__data', 1.5, {opacity: 0, y:200, delay: 2, ease: 'elastic.out(1, .5)'})


const kodamData = {
    "Dzikri": "Engineer",
  };
  
  const kodam3 = [
    "Kucing Israel", "Kucing Palestina", "Batagor", "Tusu Sate", "Roti Jala", "Sagela", "Palemba", "Laba-laba Sunda", "Kupu-kupu Malam", "Bakso MasTakim",
    "Beruang Petir", "Bulu Cina", "Jembatan Wabanga", "Rizki Skibidi", "Nike Balarica", "Sarang Opu", "Durian Botak", "Cingkeh Muara-Bone", "Cingkeh Muara-Bone",
    "Cingkeh Moodulions", "Cingkeh Inogaluma", "Cingkeh Permata", "Mano Braco", "Te Kikan", "Kaus Kaki", "Spatu Homiped", "Stik PS2", "Nyamuk Pake Helm", "Dj Bentor",
    "Batang Macis", "Tenda Eiger", "Motor Beat", "Raja Singa", "Burung Papilo", "Reket Nyamuk", "Sampo Pantene", "Mas Is", "Gitar Spanyol", "Spiker Blututh", "Sambal Tarase",
    "Bakar-bakar Sate", "Tampurung", "Minya Kalapa", "Toples Ehan", "Tas Cerewet", "Token Listrik", "Doi SPP", "Gigi Main Catur", "Nyamuk Main Bola", "Bocil Epep", "Rica Jawa",
    "Flashdisk", "Hardisk", "Tukang Aborsi", "Botol Isoplus", "Estes Solo Lord", "Fanny Darat", "BH Esmeralda", "Minion ML", "DJ Alok", "Buff Ungu", "Buff Merah", "Mimiperih",
    "Aldo Gay", "Gula-gula Babol", "Pago-pago", "Sapu Lidi", ""
  ];
  
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  function cekKodam() {
    Swal.fire({
      title: "Sapa Nama?",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Cek",
      showLoaderOnConfirm: true,
      preConfirm: (name) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            if (name) {
              const kodam = kodamData[name];
              if (kodam) {
                resolve({
                  name: name,
                  kodam: kodam
                });
              } else {
                // const randomKodam1 = getRandomElement(kodam1);
                // const randomKodam2 = getRandomElement(kodam2);
                const randomKodam3 = getRandomElement(kodam3);
                resolve({
                  name: name,
                  // randomKodam1: randomKodam1,
                  // randomKodam2: randomKodam2
                  randomKodam3: randomKodam3
                });
              }
            } else {
                swal.fire({
                                title: "Peringatan",
                                text: "Isi Nama Dulu Boss.",
                                icon: "warning",
                            });
                            return;
            }
          }, 3000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.kodam) {
          Swal.fire({
            title: `${result.value.name} terkait dengan ${result.value.kodam}`,
            icon: "success"
          });
        } else {
          Swal.fire({
            title: `Good Job ${result.value.name}!`,
            text: `Ngape Kodam : ${result.value.randomKodam3}.`,
            icon: "success",
            width: 600,
            padding: "1em",
            color: "#450c1e",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://media.tenor.com/iHmhywCIPiAAAAAM/kodok-acumalaka.gif")
              center top
              no-repeat
            `
          });
        }
      }
    });
  }
  
