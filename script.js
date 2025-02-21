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
    }

    if (url) {
        window.open(url, '_blank');
    }
});
