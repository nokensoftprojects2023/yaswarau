var script_url = "https://script.google.com/macros/s/AKfycbzh5vxrHUFkWP4oRE9fm23EePdIU_Tor7dRG1YR_M0FRM-aprbO_S8urx6lQX9xbhDe/exec";
function insert_value() {
    let nama = $("#nama_lengkap").val();
    let ucapan = $("#ucapan").val();
    let kehadiran = $("#kehadiran").val();
    if (nama && ucapan && kehadiran) {
        let url = script_url + "?callback=ctrlq&nama=" + nama + "&ucapan=" + ucapan + "&kehadiran=" + kehadiran + "&action=insert";
        $("input[type='text']").val("");
        $("textarea").val("");
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
        });


        Swal.fire({         //displays a pop up with sweetalert
            icon: 'success',
            text: 'Pesan sudah tersimpan !',
            showConfirmButton: false,
            timer: 1000
        });
    } else {
        Swal.fire({         //displays a pop up with sweetalert
            icon: 'error',
            text: 'Semua belum terisi !!',
            showConfirmButton: false,
            timer: 1000
        });
    }
}