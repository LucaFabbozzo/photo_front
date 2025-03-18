<script setup>
import {closeSidebar} from '@/js/sidebar';
</script>

<template>
    <div id="sidebar" class="sidebar" role="navigation" aria-label="Main Navigation">
        <button class="close-btn" @click="closeSidebar" aria-label="Close Sidebar"><i class="fa-solid fa-times"></i></button>
        <div class="sidebar-content">
            <ul>
                <li><router-link to="/" @click="closeSidebar">Home</router-link></li>
                <li><router-link to="/about" @click="closeSidebar">About us</router-link></li>
                <li><router-link to="/works" @click="closeSidebar">Works</router-link></li>
                <li><router-link to="/contacts" @click="closeSidebar">Contacts</router-link></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Outfit:wght@100..900&family=Rowdies:wght@300;400;700&display=swap');

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgb(32, 26, 26), rgb(86, 86, 86));
    overflow-x: hidden;
    transition: 0.3s;

    .close-btn {
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 36px;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
    }

    .sidebar-content {
        position: relative;
        top: 25%;
        width: 100%;
        text-align: center;
        margin-top: 30px;

        ul {
            list-style-type: none;
            padding: 0;

            li {
                padding: 8px;
                text-align: center;

                a {
                    text-decoration: none;
                    font-size: 40px;
                    font-family: "Rowdies", serif;
                    font-weight: 400;
                    font-style: normal;
                    cursor: pointer;
                    color: white;
                    display: inline-block;
                    position: relative;
                    transition: color 0.3s;

                    &:after {
                        content: '';
                        position: absolute;
                        width: 0;
                        height: 2px;
                        display: block;
                        margin-top: 5px;
                        right: 0;
                        background: #999898;
                        transition: width 0.3s ease;
                        -webkit-transition: width 0.3s ease;
                    }

                    &:hover {
                        color: #999898;
                    }

                    &:hover:after {
                        width: 100%;
                        left: 0;
                        background: #999898;
                    }
                }
            }
        }
    }
}
</style>