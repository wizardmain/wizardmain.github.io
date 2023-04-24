// tampilkan data
function tampilData() {
    const tabelData = document.querySelector('#tabel-data tbody');
    tabelData.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = JSON.parse(localStorage.getItem(key));
      const row = `<tr>
                    <td>${i+1}</td>
                    <td>${data.nama}</td>
                    <td>${data.email}</td>
                    <td>${data.alamat}</td>
                    <td>
                      <button type="button" onclick="editData('${key}')">Edit</button>
                      <button type="button" onclick="hapusData('${key}')">Hapus</button>
                    </td>
                  </tr>`;
      tabelData.insertAdjacentHTML('beforeend', row);
    }
  }
  
  // simpan data
  function simpanData(e) {
    e.preventDefault();
    const nama = document.querySelector('#nama').value;
    const email = document.querySelector('#email').value;
    const alamat = document.querySelector('#alamat').value;
    if (nama && email && alamat) {
      const data = {
        nama: nama,
        email: email,
        alamat: alamat
      };
      const key = new Date().getTime().toString();
      localStorage.setItem(key, JSON.stringify(data));
      tampilData();
    }
  }
  
  // hapus data
  function hapusData(key) {
    const konfirmasi = confirm('Anda yakin ingin menghapus data ini?');
    if (konfirmasi) {
      localStorage.removeItem(key);
      tampilData();
    }
  }
  
  // edit data
  function editData(key) {
    const data = JSON.parse(localStorage.getItem(key));
    const nama = prompt('Masukkan nama baru:', data.nama);
    const email = prompt('Masukkan email baru:', data.email);
    const alamat = prompt('Masukkan alamat baru:', data.alamat);
    if (nama && email && alamat) {
      const newData = {
        nama: nama,
        email: email,
        alamat: alamat
      };
      localStorage.setItem(key, JSON.stringify(newData));
      tampilData();
    }
  }
  
  // event listener
  document.querySelector('#form-data').addEventListener('submit', simpanData);
  
  // tampilkan data saat halaman di-load
  tampilData();  