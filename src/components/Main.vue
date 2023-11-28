<template>
    <div class="main">
        <MainContent />
        <MainWeek />
    </div>
</template>

<script>
import MainContent from './MainContent.vue';
import MainWeek from './MainWeek.vue';

export default {
    components: {
        MainContent,
        MainWeek
    }
}
</script>
