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
    "Kucing Koprol", "Nasi Uduk Merem", "Sosis Tertusuk", "Ayam Goyang", "Bebek Menari", "Unta Kebab", "Gorengan Lemas", "Jus Brokoli", "Tahu Menangis", "Cumi Cemburu",
"Teh Botol Panas", "Kerupuk Terbang", "Lontong Guling", "Ikan Caper", "Belut Selfie", "Nugget Terakhir", "Kucing Mualaf", "Tikus Berdasi", "Bubur Tidak Diaduk",
"Roti Gosong", "Bebek Guling", "Laler Main IG", "Burung Nyanyi", "Semangka Pahit", "Mangga Berdebu", "Durian Terluka", "Pisang Ngevape", "Lalat Mengaji",
"Nyamuk Pacaran", "Batu Meleleh", "Tempe Berlari", "Kambing Jadian", "Ayam Geprek Palsu", "Boba Sialan", "Es Krim Nangis", "Jengkol Tersesat", "Kol Goreng",
"Bakso Kembar", "Cilok Patah Hati", "Seblak Berdarah", "Sambal Ngambek", "Mie Ayam Terakhir", "Gula Gula Batuk", "Bantal Laper", "Bajigur Overheat",
"Nasi Bakar Tersulut", "Celana Dalam Terbang", "Gigi Palsu Joget", "Sapu Terbang KW", "Toples Ngedance", "Kasur Tertelan", "Mangkok Ngelag",
"Sendal Jepit Hampa", "Jaket Hujan Panas", "Sendok Retak", "Garpu Tersedak", "Flashdisk Berdoa", "Hardisk Cinta Lama", "Powerbank Lelah", "Speaker Kesurupan",
"Kipas Angin Sakit", "Remote Hilang", "TV Tiduran", "Tisu Basah Stress", "Sabun Gatal", "Sampo Tumpah", "Gayung Nongkrong", "Lemari Ketawa", "Meja Goyang",
"Kursi Ngelawak", "Sprei Kepanasan", "Kulkas Kosong", "Kompor Galau", "Wajan Belagu", "Rice Cooker Baper", "Gunting Murtad", "Jam Dinding Sombong",
"Handuk Terbang", "Gelas Meleleh", "Botol Nangis", "Karet Gelang Jahat", "Kardus Kesurupan", "Paku Patah", "Obeng Galak", "Palu Mager", "Kunci Inggris Korea",
"Plastik Ngedot", "Korek Gas Batuk", "Lilin Tersipu", "Tangga Lupa Diri", "Payung Nyesel", "Helm Nyasar", "Motor Mogok Sendiri", "Mobil Nge-prank",
"Stik PS3 Menangis", "Keyboard Nari", "Mouse Patah Tulang", "Kabel USB Nge-vlog", "Laptop Nge-lag", "Wifi Hilang", "TikTok Bocil", "Dompet Tipis"
  ];
  
  function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  function cekKodam() {
    Swal.fire({
      title: "Isi Nama Kamu!",
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
                                text: "Isi Nama Nya.",
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
            text: `Kodam Mu: ${result.value.randomKodam3}.`,
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
  
