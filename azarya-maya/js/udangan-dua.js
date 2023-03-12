const copyBtn = document.getElementById('btn-undangan')
const copyText = document.getElementById('tamu')

copyBtn.onclick = () => {
    copyText.select();
    let teks = copyText.value;
    if(teks === '')
    {
        Swal.fire({         //displays a pop up with sweetalert
        icon: 'error',
        text: 'Masukan nama tamu dengan benar',
        showConfirmButton: false,
        timer: 3000
    });
    }else{
        let nama = teks.replace(/ /g,"-");
        let base_url = window.location.href;
        let url = `Shalom jangan lupa datang dalam acara pernikahan kami 😇
        
https://yaswarau.id/azarya-maya/index.html?nama=${nama}

Azarya & Maya
Terimakasih 😁`;
        navigator.clipboard.writeText(url);
        // let url =
        document.execCommand('copy');    // Simply copies the selected text to clipboard 
        Swal.fire({         //displays a pop up with sweetalert
            icon: 'success',
            text: 'Link sudah tersalin !!',
            showConfirmButton: false,
            timer: 3000
        });
    }
   
}