<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>

<template>
<div>
<button v-if="$page.props.user.permissions.includes('create roles')">Create roles</button>
<button v-if="$page.props.user.permissions.includes('create lessons')">Create new lessons</button>
</div>
</template>

<style>
    button {
        background-color: green;
        color: white;
        padding: 20px;
        margin: 5px;
    }
</style>