<script setup>
import Footer from '@/components/Footer.vue';
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert('Email inviata con successo!');
        }, (error) => {
            console.log(error.text);
            alert('Errore nell\'invio dell\'email.');
        });
};

</script>


<template>

    <body>
        <section>
            <form @submit="sendEmail">
                <label>Name</label>
                <input type="text" name="user_name">
                <label>Email</label>
                <input type="email" name="user_email">
                <label>Message</label>
                <textarea name="message"></textarea>
                <input type="submit" value="Send">
            </form>
        </section>
        <Footer />
    </body>
</template>

<style scoped lang="scss">
body {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    margin: 0;
}

form {
    display: flex;
    flex-direction: column;
    padding: 30px 70px 30px 221px;

    label {
        font-size: 18px;
        display: inline-block;
        margin-bottom: 8px;
    }

    input,
    textarea {
        width: 400px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid rgba(219, 216, 216, 0.74);
        border-radius: 5px;
    }
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    input[type="submit"]:hover {
        background-color: #45a049;
    }
}
</style>