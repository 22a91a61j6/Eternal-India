var states = [
    { name: 'Andhra Pradesh', image: '../images/states_images/andhra_pradesh.png' },
    { name: 'Arunachal Pradesh', image: '../images/states_images/arunachal_pradesh.png' },
    { name: 'Assam', image: '../images/states_images/assam.png' },
    { name: 'Bihar', image: '../images/states_images/bihar.png' },
    { name: 'Chattisgarh', image: '../images/states_images/chattishgarh.png' },
    { name: 'Goa', image: '../images/states_images/goa.png' },
    { name: 'Gujarat', image: '../images/states_images/gujarat.png' },
    { name: 'Haryana', image: '../images/states_images/haryana.png' },
    { name: 'Himachal Pradesh', image: '../images/states_images/himachal pradesh.png' },
    { name: 'Jharkhand', image: '../images/states_images/jharkhand.png' },
    { name: 'Karnataka', image: '../images/states_images/karnataka.png' },
    { name: 'Kerala', image: '../images/states_images/kerala.png' },
    { name: 'Madhya Pradesh', image: '../images/states_images/madhya_pradesh.png' },
    { name: 'Maharashtra', image: '../images/states_images/maharashtra.png' },
    { name: 'Manipur', image: '../images/states_images/manipur.png' },
    { name: 'Meghalaya', image: '../images/states_images/meghalaya.png' },
    { name: 'Mizoram', image: '../images/states_images/mizoram.png' },
    { name: 'Nagaland', image: '../images/states_images/nagaland.png' },
    { name: 'Odisha', image: '../images/states_images/orrisa.png' },
    { name: 'Punjab', image: '../images/states_images/punjab.png' },
    { name: 'Rajasthan', image: '../images/states_images/rajasthan.png' },
    { name: 'Sikkim', image: '../images/states_images/sikkim.png' },
    { name: 'Tamil Nadu', image: '../images/states_images/tamil_nadu.png' },
    { name: 'Telangana', image: '../images/states_images/telangana.png' },
    { name: 'Tripura', image: '../images/states_images/tripura.png' },
    { name: 'Uttar Pradesh', image: '../images/states_images/uttar pradesh.png' },
    { name: 'Uttarakhand', image: '../images/states_images/uttarakhand.png' },
    { name: 'West Bengal', image: '../images/states_images/west-bengal.png' }
];



document.addEventListener('DOMContentLoaded', function() {

    const container = document.getElementById('states-container');
    container.innerHTML = '';

    states.forEach(state => {
        const stateDiv = document.createElement('a');
        stateDiv.href = `../html/state.html?state=${(state.name)}`;
        stateDiv.classList.add('state_div');
        
        const img = document.createElement('img');
        img.src = state.image;
        img.alt = state.name;

        const p = document.createElement('p');
        p.classList.add('state_name');
        p.textContent = state.name;

        stateDiv.appendChild(img);
        stateDiv.appendChild(p);
        container.appendChild(stateDiv);
    });
});
