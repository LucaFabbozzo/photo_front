<script setup>
import Footer from '@/components/Footer.vue';
</script>


<template>
    <body>
        <section>
            <form action="/action_page.php">
                <label for="fname">First name*</label><br>
                <input type="text" id="fname" name="fname" value="John"><br>
                <label for="lname">Last name*</label><br>
                <input type="text" id="lname" name="lname" value="Doe"><br>
                <label for="email">Email*</label><br>
                <input type="email" id="email" name="email" value="johndoe@gmail.com"><br>
                <textarea name="message" id="message" rows="5">Write your message...</textarea><br>
                <input type="submit" value="Submit">
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
}
</style>