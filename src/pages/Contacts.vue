<script setup>
import { reactive } from 'vue';
import Footer from '@/components/Footer.vue';
import emailjs from 'emailjs-com';
import { Cloudinary } from '@cloudinary/url-gen';

//Configuro Cloudinary

const cld = new Cloudinary({
    cloud: {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
    },
});

//Ottengo l'immagine da Cloudinary
const backgroundImg = cld.image('RoLu/slide_works/works_slide_2').toURL();

// Dati del form e messaggi di errore
const formData = reactive({
    name: '',
    email: '',
    message: ''
});

const errors = reactive({
    name: '',
    email: '',
    message: ''
});


// Funzione per validare i dati del form
const validateForm = () => {
    let isValid = true;

    // Reset degli errori
    errors.name = '';
    errors.email = '';
    errors.message = '';

    // Validazione del nome
    if (!formData.name.trim()) {
        errors.name = 'Name is required.';
        isValid = false;
    }

    // Validazione dell'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        errors.email = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email adress.';
        isValid = false;
    }

    // Validazione del messaggio
    if (!formData.message.trim()) {
        errors.message = 'Message is required.';
        isValid = false;
    }

    return isValid;
};



const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    // Validazione del form
    if (!validateForm(form)) {
        return; //interrompi l'invio se la validazione fallisce
    }


    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
            formData.name = '';
            formData.email = '';
            formData.message = '';
        }, (error) => {
            console.log(error.text);
            alert('Error sending email.');
        });
};
</script>


<template>
    <div class="contacts-container" :style="{ backgroundImage: `url(${backgroundImg})` }">
        <section>
            <form @submit="sendEmail">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" name="user_name" v-model="formData.name" aria-label="Name" aria-required="true">
                    <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" name="user_email" v-model="formData.email" aria-label="Email"
                        aria-required="true">
                    <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea name="message" v-model="formData.message" aria-label="Message"
                        aria-required="true"></textarea>
                    <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
                </div>

                <input type="submit" value="Send">
            </form>
        </section>
        <Footer />
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/contacts.scss";
</style>