    // Nama Undangan
    // https://yaswarau.id/azarya-maya/index.html?nama=samuel+bosawr
    let url = window.location.href;
    let cut = url.substr(47);
    if(cut==="")
    {
        document.getElementById("nama").innerHTML = `Belum ada nama tamu undangan`; 
    }else{
        let nama = cut.replace(/-/g, " ");
        document.getElementById("nama").innerHTML = nama;   
    }
