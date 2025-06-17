// 1. Buat fungsi `hello` dengan default parameter origin = "Bandung"
function hello(name, origin = "Bandung") {
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

// 4. Buat variabel `rahmat` dengan argumen name = 'Rahmat', origin = 'Semarang'
const rahmat = hello('Rahmat', 'Semarang');

// 5. Buat variabel `indra` dengan argumen name = 'Indra', tanpa origin
const indra = hello('Indra');
