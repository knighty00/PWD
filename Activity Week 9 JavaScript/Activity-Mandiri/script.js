function fn_ValForm() {
  var sMsg = "";

  // Mengambil nilai dari setiap input field
  var sName = document.getElementById("name").value;
  var sEmail = document.getElementById("email").value;
  var sMessage = document.getElementById("message").value;

  // 1. Validasi Nama (masih sama)
  if (sName == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  // 2. Validasi Email (Dimodifikasi)
  if (sEmail == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } 
  // 3. TAMBAHAN: Jika email tidak kosong, cek formatnya 
  else {
    // Ini adalah regular expression standar untuk validasi email
    // Hint dari PDF [cite: 317] sulit dibaca, jadi kita gunakan regex yang umum
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // .test() akan mengembalikan 'true' jika formatnya cocok, 
    // dan 'false' jika tidak.
    if (emailRegex.test(sEmail) == false) {
      sMsg += "\n* Format email yang Anda masukkan tidak valid";
    }
  }

  // 4. Validasi Pesan (masih sama)
  if (sMessage == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  // 5. Tampilkan Peringatan jika ada error (masih sama)
  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    // Jika tidak ada error (sMsg == ""), return true
    // dan form akan terkirim
    return true;
  }
}