const keys = [
    '2112', '4831', '5924', '6235', '7890', '8542', '9653', '1278', '1345', '1923',
    '2034', '2145', '2301', '2440', '2567', '2678', '2789', '2901', '3012', '3145',
    '3256', '3378', '3490', '3612', '3723', '3845', '3956', '4078', '4189', '4301',
    '4412', '4534', '4645', '4767', '4889', '4990', '5101', '5212', '5334', '5456',
    '5578', '5689', '5801', '5912', '6034', '6145', '6267', '6389', '6401', '6523'
];

document.getElementById('login-button').addEventListener('click', function() {
    var password = document.getElementById('password').value;
    if (keys.includes(password)) {
        document.querySelector('.login').classList.add('hidden');
        document.querySelector('.music-section').classList.remove('hidden');
    } else {
        alert('Clave de acceso incorrecta');
    }
});

document.getElementById('go-button').addEventListener('click', function() {
    var category = document.getElementById('music-category').value;
    var url = '';

    if (category === 'pop') {
        url = 'https://drive.google.com/drive/folders/13yHRP0yj-C_OZBdBgcHiNRgRmhy9DSvX?usp=sharing';
    } else if (category === 'vallenato') {
        url = 'https://drive.google.com/drive/folders/1fBmGFzwaQMp1LOM6-xNOjHKwIDyl1dVP?usp=sharing';
    } else if (category === 'salsa') {
        url = 'https://drive.google.com/drive/folders/1AVXPWs3KTLH337iGiNqmB91fFh7cwDra?usp=drive_link';
    } else if (category === 'rock') {
        url = 'https://drive.google.com/drive/folders/1LEHyt1F1IlLTAkFQIKjZoC3sIVml4Knb?usp=drive_link';
    } else if (category === 'reggae') {
        url = 'https://drive.google.com/drive/folders/1r5GswLGmX8tePvXUA0kQwjRD0xM5fGx7?usp=drive_link';
    } else if (category === 'perreo') {
        url = 'https://drive.google.com/drive/folders/1KgcQ7GxP2Tk7NGe0u68AUeAQGp_V88bi?usp=drive_link';
    } else if (category === 'hip-hop') {
        url = 'https://drive.google.com/drive/folders/1YSRN1bJwn4khdMl9g-2CzYy2BpBm_251?usp=drive_link';
    } else if (category === 'electronica') {
        url = 'https://drive.google.com/drive/folders/1PLw6pEaWHZTEv_-RSv4elid6jw7yIM-o?usp=drive_link';
    } else if (category === 'clasicas') {
        url = 'https://drive.google.com/drive/folders/14FlIKoC71U39TTeNPe4_3Q6_4K8bo2MZ?usp=drive_link';
    } else if (category === 'gym') {
        url = 'https://drive.google.com/drive/folders/1b6WALd7lzXYFV4D7OKzokFCCXm-JitGE?usp=drive_link';
    } else if (category === 'ambiente') {
        url = 'https://drive.google.com/drive/folders/1S1e2Q5GpZzVSNiobcnXEd9IagH2o0B4h?usp=drive_link';
    } else if (category === 'nuevos-lanzamientos') {
        url = 'https://drive.google.com/drive/folders/1FZxK6jcgttG1vFhmeKdW7aHQFoH87hQT?usp=sharing';
    } else if (category === 'romanticas') {
        url = 'https://drive.google.com/drive/folders/1WVoPkd8oaXKqXtC_08EaWEPxqj9bWHJF?usp=sharing';
         else if (category === 'variado') {
        url = 'https://drive.google.com/drive/folders/1xta6KeT0xn4fOAL_tKJT5U4f2Ims7hPA?usp=drive_link';
         else if (category === 'hombre') {
        url = 'https://drive.google.com/drive/folders/1hXp7BVLxgDX4bc1MRO0TbrBO1EiAxxTo?usp=drive_link';
        else if (category === 'merengue') {
        url = 'https://drive.google.com/drive/folders/1RwngFVUHSPG5-Wa_eoqu6NtVG7L5wWhC?usp=drive_link';
    }

    if (url) {
        window.open(url, '_blank');
    }
});
