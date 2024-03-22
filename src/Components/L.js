const handleSignUp = async () => {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const date_of_birth = document.getElementById('dateOfBirth').value;
    const assembly = document.getElementById('assembly').value;
    const constituency = document.getElementById('constituency').value;
    const district = document.getElementById('district').value;
    const panchayath = document.getElementById('panchayath').value;
    const municipality = document.getElementById('municipality').value;
    const corporation = document.getElementById('corperation').value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        return;
    }

    if (name.trim().length < 4) {
        alert('Name must be at least 4 characters long');
        return;
    }

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
        alert('Invalid email address');
        return;
    }


    try {
        let formData = { name, email, password, phoneNumber, date_of_birth, assembly, constituency, district, panchayath, municipality, corporation };
        const res = await axios.post('https://dccbackend.plusitpark.com/api/user/register', formData);
       
    
        console.log(res);

    } catch (error) {
        console.error('Error during registration:', error);
        alert(error);
    }

};