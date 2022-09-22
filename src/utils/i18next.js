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
            sambutan: {
              kepada: "Dear",
              buka: "Open invitation",
              deskripsi: "You are invited to the wedding of",
            },
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "11.12.22",
              pria: "Ella",
              dan: "and",
              wanita: "Bintan",
            },
            alquran: {
              judul: "We've Found Love",
              deskripsi: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”<br>(QS. Ar-Rum: 21)<br><br>Together with the blessing of Allah Subhanahu wa Ta’ala, we joyfully invite you to share in our happiness as we unite in marriage",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Nabila Nur<br>Harindrastuti",
              mempelai1Anak: "Third daughter of:",
              mempelai1Ortu: "Mr. Haryanto WS &<br>Mrs. Emmy Indrati",
              mempelai1Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Bintan<br>Pradika",
              mempelai2Anak: "Second son of:",
              mempelai2Ortu: "Mr. Suratno &<br>Mrs. Yanti",
              mempelai2Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            },
            resepsi: {
              judul: "AKAD",
              tanggal: "SUNDAY,<br>11 DECEMBER 2022",
              jam: "08:00-10:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1,<br>Tanah Abang, Jakarta",
              lokasi: "View Location",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            resepsi2: {
              judul: "WEDDING RECEPTION",
              tanggal: "SUNDAY,<br>11 DECEMBER 2022",
              jam: "12:00-16:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1,<br>Tanah Abang, Jakarta",
              lokasi: "View Location",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            reservasi: {
              judul: "RSVP",
              deskripsi: "Please help us prepare everything better by confirming your attendance with the following form",
              nama: "Name",
              kehadiran: "Will you be attending our wedding?",
              jumlah: "How many person(s) will attend (including you)?",
              ya: "Yes",
              tidak: "No",
              submitted: "Data submitted successfully",
              submittedDescription: "We sincerely thank you for your reservation",
              notSubmitted: "Data failed to submit",
              notSubmittedDescription: "Please complete the form",
            },
            prokes: {
              judul: "Health Protocol",
              deskripsi: "It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event",
              poin1: "Waering masker",
              poin2: "Stay healthy",
              poin3: "Social distancing",
              poin4: "Stay clean",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Our special occasion will also available virtually via zoom through the following link",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Gift",
              deskripsi: "Your presence is a present in itself. If you wish to give us something else, please tap the button down below for further information.",
              copied: "Copied account number: ",
              rekening: "2370348882",
              modal: `
                Thank you for adding to the joyful spirit of our wedding with your presence and lovely gift. You may use details below.
                <br>
                <br>
                Bank Central Asia (BCA)
                <br>
                Account Name: Nabila Nur Harindrastuti
                <br>
                Account Number: 2370348882
                <br>
                SWIFT Code (for non-indonesian colleague): CENAIDJA
              `,
              link: "http://link.com",
              aksi: "Click here",
            },
            terimaKasih: {
              judul: "Thank you",
              deskripsi: "We sincerely thank you for your company and good wishes and for helping us make our wedding day an occasion we will always remember.",
            },
          },
          unduhMantu: {
            sambutan: {
              kepada: "Dear",
              buka: "Open invitation",
              deskripsi: "You are invited to the wedding of",
            },
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "17.12.22",
              pria: "Ella",
              dan: "and",
              wanita: "Bintan",
            },
            alquran: {
              judul: "We've Found Love",
              deskripsi: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”<br>(QS. Ar-Rum: 21)<br><br>Together with the blessing of Allah Subhanahu wa Ta’ala, we joyfully invite you to share in our happiness as we unite in marriage",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Nabila Nur<br>Harindrastuti",
              mempelai1Anak: "Third daughter of:",
              mempelai1Ortu: "Mr. Haryanto WS &<br>Mrs. Emmy Indrati",
              mempelai1Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Bintan<br>Pradika",
              mempelai2Anak: "Second son of:",
              mempelai2Ortu: "Mr. Suratno &<br>Mrs. Yanti",
              mempelai2Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            },
            resepsi: {
              judul: "NGUNDUH MANTU",
              tanggal: "SATURDAY,<br>17 DECEMBER 2022",
              jam: "12:30-17:00 WIB",
              alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
              lokasi: "View Location",
              google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6",
            },
            reservasi: {
              judul: "RSVP",
              deskripsi: "Please help us prepare everything better by confirming your attendance with the following form",
              nama: "Name",
              kehadiran: "Will you be attending our wedding?",
              jumlah: "How many person(s) will attend (including you)?",
              ya: "Yes",
              tidak: "No",
              submitted: "Data submitted successfully",
              submittedDescription: "We sincerely thank you for your reservation",
              notSubmitted: "Data failed to submit",
              notSubmittedDescription: "Please complete the form",
            },
            prokes: {
              judul: "Health Protocol",
              deskripsi: "It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event",
              poin1: "Waering masker",
              poin2: "Stay healthy",
              poin3: "Social distancing",
              poin4: "Stay clean",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Our special occasion will also available virtually via zoom through the following link",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Gift",
              deskripsi: "Your presence is a present in itself. If you wish to give us something else, please tap the button down below for further information.",
              copied: "Copied account number: ",
              rekening: "5725858466",
              modal: `
                Thank you for adding to the joyful spirit of our wedding with your presence and lovely gift. You may use details below.
                <br>
                <br>
                Bank Central Asia (BCA)
                <br>
                Account Name: Bintan Pradika
                <br>
                Account Number: 5725858466
                <br>
                SWIFT Code (for non-indonesian colleague): CENAIDJA
              `,
              link: "http://link.com",
              aksi: "Click here",
            },
            terimaKasih: {
              judul: "Thank you",
              deskripsi: "We sincerely thank you for your company and good wishes and for helping us make our wedding day an occasion we will always remember.",
            },
          },
        },
      },
      id: {
        translation: {
          components: {
            errors: {
              networkError: {
                title: "Jaringan terputus",
                message: "Pastikan Anda terkoneksi pada jaringan internet.",
                retryingMessage: "Kami mencoba memuat ulang fitur ini.",
              },
              serverTimeout: {
                title: "Koneksi server terputus",
                message: "Server kami membutuhkan waktu. Silakan coba lagi nanti.",
                retryingMessage: "Kami mencoba memuat ulang fitur ini.",
              },
              unexpectedError: {
                title: "Masalah tidak teridentifikasi",
                message: "Tim kami akan memperbaiki permasalahan ini.",
              },
            },
          },
          resepsi: {
            sambutan: {
              kepada: "Kepada Yth.",
              buka: "Buka undangan",
              deskripsi: "Kami bermaksud mengundang Saudara/i dalam acara pernikahan",
            },
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "11.12.22",
              pria: "Ella",
              dan: "dan",
              wanita: "Bintan",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "“Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan.”<br><br>Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara resepsi pernikahan kami.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Nabila Nur<br>Harindrastuti",
              mempelai1Anak: "Putri ketiga dari:",
              mempelai1Ortu: "Bapak Haryanto WS &<br>Ibu Emmy Indrati",
              mempelai1Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Bintan<br>Pradika",
              mempelai2Anak: "Putra kedua dari:",
              mempelai2Ortu: "Bapak Suratno &<br>Ibu Yanti",
              mempelai2Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            },
            resepsi: {
              judul: "AKAD",
              tanggal: "MINGGU,<br>11 DESEMBER 2022",
              jam: "08:00-10:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1,<br>Tanah Abang, Jakarta",
              lokasi: "Lihat Lokasi",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            resepsi2: {
              judul: "RESEPSI PERNIKAHAN",
              tanggal: "MINGGU,<br>11 DESEMBER 2022",
              jam: "12:00-16:00 WIB",
              alamat: "Shangri-La Hotel<br>Jl. Jenderal Sudirman No.Kav. 1,<br>Tanah Abang, Jakarta",
              lokasi: "Lihat Lokasi",
              google: "https://goo.gl/maps/FcpCyjUg3NavE7ak6",
            },
            reservasi: {
              judul: "Reservasi Kehadiran",
              deskripsi: "Diharapkan kepada tamu undangan untuk mengisi formulir kehadiran dibawah ini agar kami dapat mempersiapkan semuanya dengan lebih baik",
              nama: "Nama",
              kehadiran: "Apakah Anda akan menghadiri acara kami?",
              jumlah: "Berapa orang yang akan hadir (termasuk Anda)?",
              ya: "Ya",
              tidak: "Tidak",
              submitted: "Data berhasil disubmit",
              submittedDescription: "Kami dengan tulus berterima kasih atas reservasi Anda",
              notSubmitted: "Data gagal disubmit",
              notSubmittedDescription: "Harap lengkapi formulir terlebih dahulu",
            },
            prokes: {
              judul: "Protokol Kesehatan",
              deskripsi: "Kami berterima kasih jika Anda dapat mengikuti protokol kesehatan Covid-19 berikut",
              poin1: "Menggunakan<br>masker",
              poin2: "Menjaga<br>kesehatan",
              poin3: "Menjaga<br>jarak",
              poin4: "Menjaga<br>kebersihan",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual melalui zoom link berikut",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Gift",
              deskripsi: "Kehadiran Anda adalah sebuah hadiah bagi kami. Namun, jika Anda ingin memberi kami sesuatu yang lain, silakan ketuk tombol di bawah untuk informasi lebih lanjut.",
              copied: "Berhasil disalin: ",
              rekening: "2370348882",
              modal: `
                Terima kasih telah menambah kemeriahan pernikahan kami dengan kehadiran dan hadiah Anda.
                <br>
                <br>
                Bank Central Asia (BCA)
                <br>
                Account Name: Nabila Nur Harindrastuti
                <br>
                Account Number: 2370348882
                <br>
                SWIFT Code (for non-indonesian colleague): CENAIDJA
              `,
              link: "http://link.com",
              aksi: "Klik disini",
            },
            terimaKasih: {
              judul: "Terima Kasih",
              deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu kepada Kami.",
            },
          },
          unduhMantu: {
            sambutan: {
              kepada: "Kepada Yth.",
              buka: "Buka undangan",
              deskripsi: "Kami bermaksud mengundang Saudara/i dalam acara pernikahan",
            },
            cover: {
              judul: "THE WEDDING OF",
              tanggal: "17.12.22",
              pria: "Ella",
              dan: "dan",
              wanita: "Bintan",
            },
            alquran: {
              judul: "Qs Ar-rum 21",
              deskripsi: "“Maha Suci Allah yang telah menciptakan manusia dengan berpasang-pasangan.”<br><br>Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud mengundang Saudara/i dalam acara syukuran Ngunduh-mantu kami.",
            },
            mempelai: {
              mempelai1: "THE BRIDE",
              mempelai1Nama: "Nabila Nur<br>Harindrastuti",
              mempelai1Anak: "Putri ketiga dari:",
              mempelai1Ortu: "Bapak Haryanto WS &<br>Ibu Emmy Indrati",
              mempelai1Linkedin: "https://www.linkedin.com/in/nabila-nur-harindrastuti-5bb932104/",
              mempelai2: "THE GROOM",
              mempelai2Nama: "Bintan<br>Pradika",
              mempelai2Anak: "Putra kedua dari:",
              mempelai2Ortu: "Bapak Suratno &<br>Ibu Yanti",
              mempelai2Linkedin: "https://www.linkedin.com/in/bintanpradika/",
            },
            resepsi: {
              judul: "NGUNDUH MANTU",
              tanggal: "SABTU,<br>17 DESEMBER 2022",
              jam: "12:30-17:00 WIB",
              alamat: "Planet Holiday Hotel<br>Jl. Raja Ali H., Sei Jodoh,<br>Batam",
              lokasi: "Lihat Lokasi",
              google: "https://maps.app.goo.gl/P6pggUdoGgHs9WCG6",
            },
            reservasi: {
              judul: "Reservasi Kehadiran",
              deskripsi: "Diharapkan kepada tamu undangan untuk mengisi formulir kehadiran dibawah ini agar kami dapat mempersiapkan semuanya dengan lebih baik",
              nama: "Nama",
              kehadiran: "Apakah Anda akan menghadiri acara kami?",
              jumlah: "Berapa orang yang akan hadir (termasuk Anda)?",
              ya: "Ya",
              tidak: "Tidak",
              submitted: "Data berhasil disubmit",
              submittedDescription: "Kami dengan tulus berterima kasih atas reservasi Anda",
              notSubmitted: "Data gagal disubmit",
              notSubmittedDescription: "Harap lengkapi formulir terlebih dahulu",
            },
            prokes: {
              judul: "Prokes",
              deskripsi: "Kami berterima kasih jika Anda dapat mengikuti protokol kesehatan Covid-19 berikut",
              poin1: "Menggunakan<br>masker",
              poin2: "Menjaga<br>kesehatan",
              poin3: "Menjaga<br>jarak",
              poin4: "Menjaga<br>kebersihan",
            },
            streaming: {
              judul: "Live Streaming",
              deskripsi: "Kami juga akan mempublikasikan pernikahan secara virtual melalui zoom link berikut",
              link: "https://zoom.us/",
            },
            gallery: {
              judul: "Our Gallery",
            },
            gift: {
              judul: "Wedding Gift",
              deskripsi: "Kehadiran Anda adalah sebuah hadiah bagi kami. Namun, jika Anda ingin memberi kami sesuatu yang lain, silakan ketuk tombol di bawah untuk informasi lebih lanjut.",
              copied: "Berhasil disalin: ",
              rekening: "2370348882",
              modal: `
                Terima kasih telah menambah kemeriahan pernikahan kami dengan kehadiran dan hadiah Anda.
                <br>
                <br>
                Bank Central Asia (BCA)
                <br>
                Account Name: Bintan Pradika
                <br>
                Account Number: 5725858466
                <br>
                SWIFT Code (for non-indonesian colleague): CENAIDJA
                <br>
              `,
              link: "http://link.com",
              aksi: "Klik disini",
            },
            terimaKasih: {
              judul: "Terima Kasih",
              deskripsi: "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu kepada Kami.",
            },
          },
        }
      },
    },
  });

export default i18next;