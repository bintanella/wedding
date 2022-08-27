import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['id', 'en'],
    debug: false,
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    },
    resources: {
      en: {
        translation: {
          components: {
            errors: {
              networkError: {
                title: "Network error",
                message: "There seems to be an issue with the network. Please try again later.",
                retryingMessage: "We are attempting to reload this feature",
              },
              serverTimeout: {
                title: "Server timeout",
                message: "Our servers are taking too long to respond to this request. Please try again later.",
                retryingMessage: "We are attempting to reload this feature",
              },
              unexpectedError: {
                title: "Unexpected error",
                message: "Our team has been informed and will be looking into this shortly.",
              },
            },
          },
          resepsi: {
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "11.12.2022",
              pria: "Bintan",
              dan: "dan",
              wanita: "Ella",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "Glory be to God who created spouses for you from yourselves for you to gain rest from them, and kept love and mercy between yourselves. By asking for the Grace of Allah SWT, we intend to invite you to our wedding reception.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Bintan<br>Pradika",
              mempelai1Anak: "Second son of:",
              mempelai1Ortu: "Mr. Suratno & Mrs. Yanti",
              mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Anak: "Third daughter of:",
              mempelai2Ortu: "Mr. Haryanto WS & Mrs. Emmy Indrati",
              mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
            },
            resepsi: {
              judul: "WEDDING RECEPTION",
              tanggal: "SUNDAY, 11 DECEMBER 2022",
              jam: "14:00-16:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1, Tanah Abang<br>Jakarta",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            reservasi: {
              judul: "RSVP",
              deskripsi: "Invited guests are welocomed to<br>fill out the attendance confirmation below",
              nama: "Name",
              kehadiran: "Attendance",
              jumlah: "Number of guests",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Our special occasion will also available virtually<br>via zoom through the following link",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "If guests want to send gifts to the bride and groom,<br>we would be very thankful",
              link: "http://link.com",
              aksi: "Click here",
            },
            terimaKasih: {
              judul: "Thank you",
              deskripsi: "We wish you all the very best,<br>We would be honored if you could attend our wedding",
            },
          },
          unduhMantu: {
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "17.12.2022",
              pria: "Bintan",
              dan: "dan",
              wanita: "Ella",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "Glory be to God who created spouses for you from yourselves for you to gain rest from them, and kept love and mercy between yourselves. By asking for the Grace of Allah SWT, we intend to invite you to our wedding reception.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Bintan<br>Pradika",
              mempelai1Ortu: "Mr. Suratno & Mrs. Yanti",
              mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Mr. Haryanto WS & Mrs. Emmy Indrati",
              mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
            },
            resepsi: {
              judul: "NGUNDUH MANTU",
              tanggal: "SATURDAY, 17 DECEMBER 2023",
              jam: "12:30-17:00 WIB",
              alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
              google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6",
            },
            reservasi: {
              judul: "RSVP",
              deskripsi: "Invited guests are welocomed to<br>fill out the attendance confirmation below",
              nama: "Name",
              kehadiran: "Attendance",
              jumlah: "Number of guests",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Our special occasion will also available virtually<br>via zoom through the following link",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "If guests want to send gifts to the bride and groom,<br>we would be very thankful",
              link: "http://link.com",
              aksi: "Click here",
            },
            terimaKasih: {
              judul: "Thank you",
              deskripsi: "We wish you all the very best,<br>We would be honored if you could attend our wedding",
            },
          },
        },
      },
      id: {
        translation: {
          components: {
            errors: {
              networkError: {
                title: "Jaringan bermasalah",
                message: "There seems to be an issue with the network. Please try again later.",
                retryingMessage: "We are attempting to reload this feature",
              },
              serverTimeout: {
                title: "Koneksi ke server terputus",
                message: "Our servers are taking too long to respond to this request. Please try again later.",
                retryingMessage: "We are attempting to reload this feature",
              },
              unexpectedError: {
                title: "Masalah tidak teridentifikasi",
                message: "Our team has been informed and will be looking into this shortly.",
              },
            },
          },
          resepsi: {
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "11.12.2022",
              pria: "Bintan",
              dan: "dan",
              wanita: "Ella",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Bintan<br>Pradika",
              mempelai1Ortu: "Bapak Suratno & Ibu Yanti",
              mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Bapak Haryanto WS & Ibu Emmy Indrati",
              mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
            },
            resepsi: {
              judul: "RESEPSI",
              tanggal: "MINGGU, 11 DESEMBER 2022",
              jam: "14:00-16:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1, Tanah Abang<br>Jakarta",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            reservasi: {
              judul: "Reservasi Kehadiran",
              deskripsi: "Diharapkan kepada tamu undangan untuk<br>mengisi formulir kehadiran dibawah ini",
              nama: "Nama",
              kehadiran: "Kehadiran",
              jumlah: "Jumlah",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual<br>melalui zoom link berikut",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai,<br>kami akan sangat berterima kasih",
              link: "http://link.com",
              aksi: "Klik disini",
            },
            terimaKasih: {
              judul: "Terima Kasih",
              deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br>apabila Bapak/Ibu/Saudara/i berkenan hadir dan<br>memberikan do’a restu kepada Kami.",
            },
          },
          unduhMantu: {
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "17.12.2022",
              pria: "Bintan",
              dan: "dan",
              wanita: "Ella",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Bintan<br>Pradika",
              mempelai1Anak: "Putra kedua dari:",
              mempelai1Ortu: "Bapak Suratno & Ibu Yanti",
              mempelai1Linkedin: "https://www.linkedin.com/in/bintanpradika/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Anak: "Putri ketiga dari:",
              mempelai2Ortu: "Bapak Haryanto WS & Ibu Emmy Indrati",
              mempelai2Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
            },
            resepsi: {
              judul: "NGUNDUH MANTU",
              tanggal: "SABTU, 17 DESEMBER 2022",
              jam: "12:30-17:00 WIB",
              alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
              google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6",
            },
            reservasi: {
              judul: "Reservasi Kehadiran",
              deskripsi: "Diharapkan kepada tamu undangan untuk<br>mengisi formulir kehadiran dibawah ini",
              nama: "Nama",
              kehadiran: "Kehadiran",
              jumlah: "Jumlah",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual<br>melalui zoom link berikut",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai,<br>kami akan sangat berterima kasih",
              link: "http://link.com",
              aksi: "Klik disini",
            },
            terimaKasih: {
              judul: "Terima Kasih",
              deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br>apabila Bapak/Ibu/Saudara/i berkenan hadir dan<br>memberikan do’a restu kepada Kami.",
            },
          },
        }
      }
    },
  });

export default i18next;
