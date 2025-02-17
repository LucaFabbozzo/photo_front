<script setup>
    import { openSidebar } from '@/js/sidebar';
</script>

<template>
    <header>
        <button class="open-btn" @click="openSidebar()"><i class="fa-solid fa-bars"></i></button>
    </header>
</template>

<style scoped lang="scss">
.open-btn {
    font-size: 30px;
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
}
</style>