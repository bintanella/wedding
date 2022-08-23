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
              tanggal: "07.10.2023",
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
              mempelai1Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai1Linkedin: "http://linkedin.com",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai2Linkedin: "linkedin.com",
            },
            resepsi: {
              judul: "RESEPSI",
              tanggal: "MINGGU 26 MARET 2022",
              jam: "12:00-01:00 WIB",
              alamat: "Pantai Lepang<br>Jl. Subak Lepang No.16, Takmung,<br>Kec. Banjarangkan, Kabupaten Klungkung, Bali",
              google: "http://gmaps.com",
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
              deskripsi: "Kami akan mempublikasikan pernikahan secara virtual<br>melalui zoom dan live instagram melalui link berikut",
              link: "http://link.com",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai<br>dapat melalui virtual account atau e-wallet",
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
              tanggal: "07.10.2023",
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
              mempelai1Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai1Linkedin: "http://linkedin.com",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai2Linkedin: "linkedin.com",
            },
            resepsi: {
              judul: "UNDUH MANTU",
              tanggal: "MINGGU 26 MARET 2023",
              jam: "12:00-01:00 WIB",
              alamat: "Pantai Lepang<br>Jl. Subak Lepang No.16, Takmung,<br>Kec. Banjarangkan, Kabupaten Klungkung, Batam",
              google: "http://gmaps.com",
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
              deskripsi: "Kami akan mempublikasikan pernikahan secara virtual<br>melalui zoom dan live instagram melalui link berikut",
              link: "http://link.com",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai<br>dapat melalui virtual account atau e-wallet",
              link: "http://link.com",
              aksi: "Klik disini",
            },
            terimaKasih: {
              judul: "Terima Kasih",
              deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br>apabila Bapak/Ibu/Saudara/i berkenan hadir dan<br>memberikan do’a restu kepada Kami.",
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
              tanggal: "07.10.2023",
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
              mempelai1Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai1Linkedin: "http://linkedin.com",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai2Linkedin: "linkedin.com",
            },
            resepsi: {
              judul: "RESEPSI",
              tanggal: "MINGGU 26 MARET 2022",
              jam: "12:00-01:00 WIB",
              alamat: "Pantai Lepang<br>Jl. Subak Lepang No.16, Takmung,<br>Kec. Banjarangkan, Kabupaten Klungkung, Bali",
              google: "http://gmaps.com",
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
              deskripsi: "Kami akan mempublikasikan pernikahan secara virtual<br>melalui zoom dan live instagram melalui link berikut",
              link: "http://link.com",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai<br>dapat melalui virtual account atau e-wallet",
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
              tanggal: "07.10.2023",
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
              mempelai1Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai1Linkedin: "http://linkedin.com",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Nabila Nur<br>Harindrastuti",
              mempelai2Ortu: "Ratna Alaska & Ratna Alaska",
              mempelai2Linkedin: "linkedin.com",
            },
            resepsi: {
              judul: "UNDUH MANTU",
              tanggal: "MINGGU 26 MARET 2023",
              jam: "12:00-01:00 WIB",
              alamat: "Pantai Lepang<br>Jl. Subak Lepang No.16, Takmung,<br>Kec. Banjarangkan, Kabupaten Klungkung, Batam",
              google: "http://gmaps.com",
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
              deskripsi: "Kami akan mempublikasikan pernikahan secara virtual<br>melalui zoom dan live instagram melalui link berikut",
              link: "http://link.com",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Love Gift",
              deskripsi: "Apabila tamu ingin mengirimkan hadiah ke pada kedua mempelai<br>dapat melalui virtual account atau e-wallet",
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
