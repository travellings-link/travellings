<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted, watch, computed } from 'vue';


const loading = ref(false);

interface Changelog {
    date: string;
    message: string;
    author: string;
}
const changelogs: Ref<Changelog[]> = ref([]);

const ISOToTime = (ISO: string): string => {
    return new Date(ISO).toLocaleString();
};
onMounted(async () => {
    loading.value = true;

    const timestamp = new Date().getTime();
    const res = await fetch("https://api.github.com/repos/travellings-link/travellings/commits?per_page=100&_t=" + timestamp);
    changelogs.value = (await res.json()).map((item: any) => {
        return {
            date: ISOToTime(item.commit.author.date),
            message: item.commit.message,
            author: item.commit.author.name
        };
    });

    loading.value = false;
});



</script>

<template>

    <table>
        <thead>
            <th>
                <slot name="date"></slot>
            </th>
            <th>
                <slot name="message"></slot>
            </th>
            <th>
                <slot name="author"></slot>
            </th>
        </thead>
        <tbody>
            <template v-if="loading">
                <tr>
                    <td colspan="3">
                        <slot name="loading"></slot>
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr v-for="item in changelogs">
                    <td>{{ item.date }}</td>
                    <td>{{ item.message }}</td>
                    <td>{{ item.author }}</td>
                </tr>
            </template>
        </tbody>
    </table>

    <a href="https://github.com/travellings-link/travellings/commits/main/" target="_blank">
        <slot name="more"></slot>
    </a>
</template>