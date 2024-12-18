/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  };
  
  /**
   * Fungsi untuk download file menggunakan Promise
   * @returns {Promise<string>} - Sebuah Promise yang akan mengembalikan nama file
   */
  const download = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = "windows-10.exe";
        resolve(result);
      }, 3000);
    });
  };
  
  // Menggunakan Async/Await
  (async () => {
    try {
      const result = await download();
      showDownload(result);
    } catch (error) {
      console.error("Terjadi kesalahan saat mendownload:", error);
    }
  })();
  